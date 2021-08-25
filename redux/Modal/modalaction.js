import {DATA_MANAGER} from "./modaltypes"
import {DRIVER} from "./modaltypes"
import {MODEL_STATS,DB_CONNECTION} from "./modaltypes"

export const datamanager = (data) =>{
    return{
        type:DATA_MANAGER,
        payload:data
    }
}
export const driver = (data) =>{
    return{
        type:DRIVER,
        payload:data
    }
}
export const modelstats = (data) =>{
    return{
        type:MODEL_STATS,
        payload:data
    }
}
export const dbconnection = (data) =>{
    return{
        type:DB_CONNECTION,
        payload:data
    }
}