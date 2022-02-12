export const initialState = {
    products:[],
    productDetails:{},
    carts:[],
    userLogin:null
}
export const reducer = (state,action)=>{
   switch (action.type) {
       case 'SET_ALL_PRODUCTS':
           return {...state,products:action.data}
       case 'SET_SELECT_PRODUCT':
           return {...state,productDetails:action.data}
       case 'ADD_TO_CART':
           return {...state,carts:[...state.carts,action.data]}
        case 'REMOVE_ITEM_CART':
            const newList = state.carts.filter(item=>item.id!=action.data.id)
            return {...state,carts:newList}
        case 'SET_USER_LOGIN':
            return {...state,userLogin:action.data}
       default:
           break;
   }
}