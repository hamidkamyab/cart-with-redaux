

const Reducer = (cart={data:[],error:0},action)=>{
    if(action.type==='ADD'){
        const check = cart.data.filter((cartItem)=>cartItem.id === action.payload.id)
        if(check < 1){
            cart = {data:[...cart.data,action.payload],error:0}
        }else{
            return {data:[...cart.data],error:1};
        }
    }
    return cart;
}

export default Reducer;