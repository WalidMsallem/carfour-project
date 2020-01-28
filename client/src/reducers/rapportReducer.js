import { SEND_RAPPORT,SEND_RAPPORT_SUCCESS,SEND_RAPPORT_FAILER } from '../actions/types';

const initialState = {
  laoding: false,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_RAPPORT:
      return {
        ...state, laoding : true
      };
      case SEND_RAPPORT_SUCCESS:
        return {
          ...state, laoding : false
        };  case SEND_RAPPORT_FAILER:
        return {
          ...state, laoding : false, errors : action.payload
        };
    default:
      return state;
  }
}