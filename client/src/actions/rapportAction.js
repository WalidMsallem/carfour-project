import axios from 'axios'
import { SEND_RAPPORT_SUCCESS,SEND_RAPPORT_FAILER } from '../actions/types';

export const  sendRapport = (data ,resetFields,setMessage,setModal) => dispatch => {
    axios.post('/api/pdf/send' , data)
    .then(res => {
       dispatch({type : SEND_RAPPORT_SUCCESS})
       resetFields()
       setMessage('Send With Succes')
       setModal(true)
    })
    .catch(err => {
        dispatch({type : SEND_RAPPORT_FAILER , payload : err.response.data})
        setMessage('Serveur Error')
        setModal(true)
    })
}