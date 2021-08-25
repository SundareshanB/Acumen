import {LOGIN_DATA} from "./logintypes"

export const login = (data) =>{
    return{
        type:LOGIN_DATA,
        payload:data
    }
}