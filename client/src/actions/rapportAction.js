import axios from 'axios'
import { SEND_RAPPORT_SUCCESS,SEND_RAPPORT_FAILER } from '../actions/types';

export const  sendRapport = (data) => dispatch => {
    axios.post('/api/pdf/send' , data)
    .then(res => {
       dispatch({type : SEND_RAPPORT_SUCCESS})
    })
    .catch(err => {
        dispatch({type : SEND_RAPPORT_FAILER , payload : err.response.data})
    })
}