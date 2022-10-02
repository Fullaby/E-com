import { FETCH_CATEGORY, FETCH_DETAIL, FETCH_PRODUCT } from "../actions/actionTypes";


const initialState={ Product: [], DetailProduct: [], Category:[]}

function ProductReducer(state= initialState, action){
    switch(action.type){
        case FETCH_PRODUCT:
            return{...state, Product: action.payload}
        case FETCH_DETAIL:
            return{...state, DetailProduct: action.payload}
        case FETCH_CATEGORY:
            return{...state, Category: action.payload}
        default:
            return state
    }

}
export default ProductReducer