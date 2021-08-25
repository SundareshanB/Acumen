import {ACCOUNT_DETAILS,ACCOUNT_TABLE } from "./Accounttypes"

export const Accountdetails = (data) =>{
    return{
        type:ACCOUNT_DETAILS,
        payload:data
    }
}

export const Accounttable = (data) =>{
    return{
        type:ACCOUNT_TABLE,
        payload:data
    }
}