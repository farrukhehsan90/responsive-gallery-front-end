import {  postApi, getApi } from '../api_service'
import { API_ENDPPINT } from '../../Constant/apiConfig'



export const userRegister = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "USER_REGISTER_PROCESSING" })
      let { data } = await postApi(`${API_ENDPPINT}/api/registration`, user)

      console.log("user Registration response", data)

      if (data.status) {
        alert("User Registerd Successfully")
        return Promise.resolve({ status: true })
        // NavigationSer.navigate("SignIn")
      } else {
        dispatch({ type: "ERROR" })
        alert(JSON.stringify(data.message))
        return Promise.resolve({ status: false })
      }


    } catch ({ message }) {
        dispatch({ type: "ERROR" })
      console.log("registration Error", message)
      alert("enter proper details user name should be atleast 6 digits")
      return Promise.reject({ status: false, message })
    }
  }
}



export const login = (user) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCHING" })
        let { data } = await postApi(`${API_ENDPPINT}/api/signin`, user)
  
        console.log("user Login response", data)
  
        if (data.status) {
            dispatch({ type: "FETCH_USER_SUCCESS", payload: data })
            alert("User Login Successfully")
            return Promise.resolve({ status: true })
        } else {
            dispatch({ type: "ERROR" })
            alert(data.message)
            return Promise.resolve({ status: false })
        }
  
  
      } catch ({ message }) {
        alert("enter proper details ")
        dispatch({ type: "ERROR" })
        console.log("registration Error", message)
        return Promise.reject({ status: false, message })
      }
    }
  }

  export const logout = (user) => {
    return async (dispatch) => {
        let data = []
        dispatch({ type: "FETCH_USER_SUCCESS", payload: data })
        alert("Logout Successful")
        return Promise.resolve({ status: true })
    }
  }

  export const getImages = (user) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCHING" })
        let { data } = await postApi(`${API_ENDPPINT}/api/images`, user)
        console.log("images response", data)
        if (data.status) {
            dispatch({ type: "FETCH_IMAGES_SUCCES", payload: data })
            return Promise.resolve({ status: true })
        } else {
            dispatch({ type: "ERROR" })
            alert(data.message)
            return Promise.resolve({ status: false })
        }
  
  
      } catch ({ message }) {
        dispatch({ type: "ERROR" })
        console.log("registration Error", message)
        return Promise.reject({ status: false, message })
      }
    }
  }


  export const uploadImage = (formData) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCHING" })
        let { data } = await postApi(`${API_ENDPPINT}/api/upload`, formData)
        console.log("images response", formData)
        if (data.status) {
            return Promise.resolve({ status: true })
        } else {
            dispatch({ type: "ERROR" })
            alert(data.message)
            return Promise.resolve({ status: false })
        }
  
  
      } catch ({ message }) {
        dispatch({ type: "ERROR" })
        console.log("registration Error", message)
        return Promise.reject({ status: false, message })
      }
    }
  }


  export const deleteImage = (formData) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCHING" })
        let { data } = await postApi(`${API_ENDPPINT}/api/delete`, {id: formData})
        console.log("images response", formData)
        if (data.status) {
            return Promise.resolve({ status: true })
        } else {
            dispatch({ type: "ERROR" })
            alert(data.message)
            return Promise.resolve({ status: false })
        }
  
  
      } catch ({ message }) {
        dispatch({ type: "ERROR" })
        console.log("registration Error", message)
        return Promise.reject({ status: false, message })
      }
    }
  }


  export const forgotPassword = (formData) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCHING" })
        let { data } = await postApi(`${API_ENDPPINT}/api/resetPassword`, formData)
        console.log("forgotPassword response", data, formData)
        if (data.status) {
            alert(data.message)
            return Promise.resolve({ status: true })
        } else {
            dispatch({ type: "ERROR" })
            alert(data.message)
            return Promise.resolve({ status: false })
        }
  
  
      } catch ({ message }) {
        dispatch({ type: "ERROR" })
        console.log("forgotPassword Error", message)
        return Promise.reject({ status: false, message })
      }
    }
  }


  export const resetPassword = (formData, userId, token) => {
    return async (dispatch) => {
      try {
        dispatch({ type: "FETCHING" })
        let { data } = await postApi(`${API_ENDPPINT}/api/${userId}/${token}`, formData)
        console.log("resetPassword response", data, formData)
        if (data.status) {
            alert(data.message)
            return Promise.resolve({ status: true })
        } else {
            dispatch({ type: "ERROR" })
            alert(data.message)
            return Promise.resolve({ status: false })
        }
  
  
      } catch ({ message }) {
        dispatch({ type: "ERROR" })
        console.log("resetPassword Error", message)
        return Promise.reject({ status: false, message })
      }
    }
  }
