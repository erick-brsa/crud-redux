import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

// Muestra una alerta
export function mostrarAlerta(alerta) {
    return (dispatch) => {
        dispatch(mostrarAlertaError(alerta))
    }
}

const mostrarAlertaError = (alerta) => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

// Oculta una alerta
export function ocultarAlerta() {
    return (dispatch) => {
        dispatch(ocultarAlertaError())
    }
}

const ocultarAlertaError = () => ({
    type: OCULTAR_ALERTA
})

