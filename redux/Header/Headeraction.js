import {STAGE} from "./Headertypes"
import { PERIOD_NAME,ACCOUNT_NAME} from "./Headertypes"

export const Stage = (data) =>{
    return{
        type:STAGE,
        payload:data
    }
}
export const Period = (data) =>{
    return{
        type:PERIOD_NAME,
        payload:data
    }
}
export const Account = (data) =>{
    return{
        type:ACCOUNT_NAME,
        payload:data
    }
}

