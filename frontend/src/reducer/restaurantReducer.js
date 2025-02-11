import { ALL_RESTAURANTS_REQUEST, ALL_RESTAURANTS_SUCCESS } from "../constants/restaurantConstant";

//reducer contains intial store and actions
const initialState={
    restaurants:[],
};
export const restaurantReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ALL_RESTAURANTS_REQUEST:
            return{ ...state,
            loading:true,
            error:null,
            };
            
        case ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading:false,
                count:action.payload.count,//action is a object
                restaurants:action.payload.restaurants,
            };
    
        default:
            return state;
    }

}