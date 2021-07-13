const initialState = {
    user : null,
    isLoading: false,
    images: []
  }
  
  export const userReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
      case 'FETCHING':
        return {
          ...state,
          isLoading: true
        }
      case 'FETCH_USER_SUCCESS':
        return {
          ...state,
          user: payload,
          isLoading: false
        }
        case 'FETCH_IMAGES_SUCCES':
        return {
          ...state,
          images: payload
        }
      case 'ERROR':
        return {
          ...state,
          isLoading: false
        }
      case 'LOGOUT_REQUEST' : 
        return {
          state: initialState
        }
      default:
        return state
    }
  }
  
  export default userReducer