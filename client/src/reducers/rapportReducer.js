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
} from "../actions/types";

const initialState = {
  sendRapportLoading: false,
  saveRapportLoading: false,
  getRapportLoading: false,
  rapport : [] ,
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    // SEND
    case SEND_RAPPORT:
      return {
        ...state,
        sendRapportLoading: true
      };
    case SEND_RAPPORT_SUCCESS:
      return {
        ...state,
        sendRapportLoading: false
      };
    case SEND_RAPPORT_FAILER:
      return {
        ...state,
        sendRapportLoading: false,
        errors: action.payload
      };
// SAVE
      case SAVE_RAPPORT:
        return {
          ...state,
          saveRapportLoading: true
        };
      case SAVE_RAPPORT_SUCCESS:
        return {
          ...state,
          saveRapportLoading: false,
          // rapport : action.payload
        };
      case SAVE_RAPPORT_FAILER:
        return {
          ...state,
          saveRapportLoading: false,
          errors: action.payload
        };
  // GET 
        case GET_RAPPORT:
          return {
            ...state,
            getRapportLoading: true
          };
        case GET_RAPPORT_SUCCESS:
          return {
            ...state,
            getRapportLoading: false, 
            rapport : action.payload
          };
        case GET_RAPPORT_FAILER:
          return {
            ...state,
            getRapportLoading: false,
            errors: action.payload
          };

    default:
      return state;
  }
}
