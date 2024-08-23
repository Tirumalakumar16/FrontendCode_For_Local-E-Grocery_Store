import axios from 'axios'
// Auth token
export const getAuthToken = () =>{
    return window.localStorage.getItem('localCart')
}

export const setAuthToken = (token) =>{
    return window.localStorage.setItem("localCart", token )
}

//Get Request
export const getRequest = (method , url , data )=>{
     let headers = {}

     if(getAuthToken !== null && getAuthToken !== 'null') {
        headers = {"Authorization" : `Bearer ${getAuthToken()}`}
     }

     return axios({
        method : method,
        headers : headers,
        url : url,
        data : data
     })


}

export const postRequest = (method ,url , data)=>{

    return axios(
        {
            method : method,
            url : url,
            data : data
        }
    )
}