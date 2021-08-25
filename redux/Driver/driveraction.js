import {CURRENT_ASSIGNMENT,SOURCE_ASSIGNMENT} from "./drivertypes"

export const drivers = (data) =>{
    return{
        type:CURRENT_ASSIGNMENT,
        payload:data
    }
}

export const source = (data) =>{
    return{
        type:SOURCE_ASSIGNMENT,
        payload:data
    }
}