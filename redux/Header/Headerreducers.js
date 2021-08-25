import {STAGE} from "./Headertypes";
import { PERIOD_NAME,ACCOUNT_NAME } from "./Headertypes";

const intialstate = {
    stage:"",
    period:"",
    account:[],
};

const Headerreducers = (state=intialstate , action) =>{
    switch(action.type){
        case STAGE  : 
            return{
                ...state,
                stage : action.payload,
            }
        case PERIOD_NAME  : 
            return{
                ...state,
                period : action.payload,
            }
            
        case ACCOUNT_NAME  : 
            return{
                ...state,
                account : action.payload,
            }
        
        default: return state
    }
}

export default Headerreducers;