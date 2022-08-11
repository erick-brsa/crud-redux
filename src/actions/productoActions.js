import clienteAxios from '../config/axios';

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR
} from '../types'
import Swat from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {

    return async (dispatch) => {
        dispatch(agregarProducto())
        try {
            // Insertar en la API
            await clienteAxios.post('/productos', producto)
            
            // Si todo sale bien
            dispatch(agregarProductoExito(producto))

            // Alerta
            Swat.fire({
                title: 'Correcto',
                text: 'El producto se agregó correctamente',
                icon: 'success'
            })
        } catch (error) {
            console.log(error)
            dispatch(agregarProductoError(true))
            Swat.fire({
                title: 'Error',
                text: 'Hubo un error, intenta de nuevo',
                icon: 'error'
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

// Si el producto se agrega correctamente
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

// Si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})

export function obtenerProductosAction() {

    return async (dispatch) => {
        dispatch(comenzarDescargaProductos())
        try {
            const { data } = await clienteAxios('/productos')
            dispatch(descargaProductosExitosa(data))
        } catch (error) {
            dispatch(descargaProductosError())
        }
    }
}

const comenzarDescargaProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargaProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

// Selecciona y elimina el producto
export function borrarProductoAction(id) {
    return async (dispatch) => {
        dispatch(obtenerProductoEliminar(id))
        try {
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(productoEliminadoExito())
            Swat.fire({
                title: 'Eliminado',
                text: 'Registro eliminado correctamente',
                icon: 'success',
            })
        } catch (error) {
            dispatch(productoEliminadoError())
            Swat.fire({
                title: 'Error',
                text: 'Hubo un error, intenta de nuevo',
                icon: 'error'
            })
        }
    }
}

const obtenerProductoEliminar = (id) => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const productoEliminadoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})

const productoEliminadoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})