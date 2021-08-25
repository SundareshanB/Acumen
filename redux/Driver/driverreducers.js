import {CURRENT_ASSIGNMENT,SOURCE_ASSIGNMENT} from "./drivertypes";

const intialstate = {
    data:[],
    source:[]
};

const driverreducer = (state=intialstate , action) =>{
    switch(action.type){
        case CURRENT_ASSIGNMENT  : 
            return{
                ...state,
                data:action.payload
            }
        case SOURCE_ASSIGNMENT  : 
            return{
                ...state,
                source:action.payload
            }
        default: return state
    }
}

export default driverreducer;