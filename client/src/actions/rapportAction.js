import axios from 'axios'
import {
    SEND_RAPPORT_SUCCESS,
    SEND_RAPPORT_FAILER,
    SAVE_RAPPORT_SUCCESS,
    SAVE_RAPPORT_FAILER,
    GET_RAPPORT_SUCCESS,
    GET_RAPPORT_FAILER,
    SAVE_RAPPORT,
    GET_RAPPORT,
    SEND_RAPPORT
} from '../actions/types';

export const sendRapport = (data, resetFields, setMessage, setModal) => dispatch => {
    dispatch({type: SEND_RAPPORT})
    axios.post('/api/pdf/send', data).then(res => {
        dispatch({type: SEND_RAPPORT_SUCCESS , payload : res.data})
        resetFields()
        setMessage('Send With Succes')
        setModal(true)
    }).catch(err => {
        dispatch({type: SEND_RAPPORT_FAILER, payload: err.response.data})
        setMessage('Serveur Error')
        setModal(true)
    })
}
export const saveRapport = (data, setMessage, setModal) => dispatch => {
    dispatch({type: SAVE_RAPPORT})
    axios.post('/api/draft/save', data).then(res => {
        dispatch({type: SAVE_RAPPORT_SUCCESS})
        setMessage('Save With Succes')
        setModal(true)
    }).catch(err => {
        dispatch({type: SAVE_RAPPORT_FAILER, payload: err.response.data})
        setMessage('Serveur Error')
        setModal(true)
    })
}
export const getRapport = (setMessage, setModal) => dispatch => {
    dispatch({type: GET_RAPPORT})
    axios.get('/api/draft/get').then(res => {
        dispatch({type: GET_RAPPORT_SUCCESS , payload : res.data})
    }).catch(err => {
        dispatch({type: GET_RAPPORT_FAILER, payload: err.response.data})
        setMessage('Serveur Error')
        setModal(true)
    })
}
