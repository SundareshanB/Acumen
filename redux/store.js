import Headerreducers from "./Header/Headerreducers";
import Modalreducer from "./Modal/modalreducers";
import Loginreducers from "./Login/loginreducers";
import Driverreducer from "./Driver/driverreducers";
import Accountreducers from "./Account/Accountreducers";
import { createStore, applyMiddleware, compose,combineReducers } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"

const rootReducers = combineReducers({
    header:Headerreducers,
    account:Accountreducers,
    modal : Modalreducer,
    login:Loginreducers,
    driver:Driverreducer,
})

const middleware = [thunk]

const makeStore = () => createStore(rootReducers, compose(applyMiddleware(...middleware)))
export const wrapper = createWrapper(makeStore)

const store = createStore(rootReducers)
export default store;