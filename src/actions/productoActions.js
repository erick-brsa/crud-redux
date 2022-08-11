import clienteAxios from '../config/axios';

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
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
            console.log(error)
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