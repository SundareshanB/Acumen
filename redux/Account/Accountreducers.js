import {ACCOUNT_DETAILS,ACCOUNT_TABLE } from "./Accounttypes";

const intialstate = {
    accountdetails:[],
    accounttable:[]
};

const Accountreducers = (state=intialstate , action) =>{
    switch(action.type){
        case ACCOUNT_DETAILS  : 
            return{
                ...state,
                accountdetails : action.payload,
            }
        case ACCOUNT_TABLE : 
            return{
                ...state,
                accounttable : action.payload,
            }
        default: return state
    }
}

export default Accountreducers;