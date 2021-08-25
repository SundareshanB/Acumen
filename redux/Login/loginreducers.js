import {LOGIN_DATA} from "./logintypes";

const intialstate = {
    data:[{auth:false , username:""}]
};

const loginreducer = (state=intialstate , action) =>{
    switch(action.type){
        case LOGIN_DATA  : 
            return{
                ...state,
                data:action.payload
            }
        default: return state
    }
}

export default loginreducer;