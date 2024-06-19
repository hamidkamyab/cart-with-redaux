

const Reducer = (cart={data:[],error:0},action)=>{
    if(action.type==='ADD'){
        const check = cart.data.filter((cartItem)=>cartItem.id === action.payload.id)
        if(check < 1){
            cart = {data:[...cart.data,action.payload],error:0}
        }else{
            return {data:[...cart.data],error:1};
        }
    }
    if(action.type==='INCREASE'){
        const tempCart =  cart.data.map((cartItem)=>{
            if(cartItem.id === action.payload.id){
                return {...cartItem,qty:cartItem.qty + 1}
            }
            return cartItem;
        })
        return {data:tempCart,error:0};
    }
    if(action.type==='DECREASE'){
        const tempCart =  cart.data.map((cartItem)=>{
            if(cartItem.id === action.payload.id){
                if(cartItem.qty > 1){
                    return {...cartItem,qty:cartItem.qty - 1}
                }
            }
            return cartItem;
        })
        return {data:tempCart,error:0};
    }
    if(action.type==='REMOVE'){
        const tempCart =  cart.data.filter((cartItem)=>cartItem.id !== action.payload.id)
        return {data:tempCart,error:0};
    }
    
    return cart;
}

export default Reducer;