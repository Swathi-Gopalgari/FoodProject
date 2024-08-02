import {legacy_createStore as createStore,combineReducers,applyMiddleware,compose,} from "redux";
import thunk from "redux-thunk";//help us to run the datafetch
//import Restaurant from "./components/layouts/Restaurant";
import { restaurantReducer } from "./reducer/restaurantReducer";
const reducer =combineReducers({
    Restaurants:restaurantReducer,
    
});
//apply multiple store enhancer
const composeenhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const middleware={thunk};
const store=createStore(reducer,composeenhancers(applyMiddleware(...middleware)));
export default store;
