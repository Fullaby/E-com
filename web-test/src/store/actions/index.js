import { baseURL, FETCH_PRODUCT } from "./actionTypes"
import axios from 'axios'

export const fetchProductSuccess= (payload)=>{
    return{
        type: FETCH_PRODUCT,
        payload
    }
}

export const fetchProduct=()=>{
    return(dispatch)=>{
        return axios(`${baseURL}/product?search=`)
        .then(({data})=>{
            dispatch(fetchProductSuccess(data))
        })
    }
}