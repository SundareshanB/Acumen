import {DATA_MANAGER, MODEL_STATS,DB_CONNECTION} from "./modaltypes";
import {DRIVER} from "./modaltypes"

const intialstate = {
    datamanager:"",
    driver:"",
    modelstats:"",
    dbconnection:""
};

const modalreducer = (state=intialstate , action) =>{
    switch(action.type){
        case DATA_MANAGER  : 
            return{
                ...state,
                datamanager:action.payload
            }
        case DRIVER :
            return{
                ...state,
                driver:action.payload
            }
        case MODEL_STATS :
            return{
                ...state,
                modelstats:action.payload
            }
        case DB_CONNECTION :
            return{
                ...state,
                dbconnection:action.payload
            }
        default: return state
    }
}

export default modalreducer;