import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: []
        },
        reducers: {
            addCart: (state,action) => {
                let obj = action.payload;
                let itemIsPresent = state.items.find((cartObj) => cartObj.dataObj.id==obj.id)
                if(itemIsPresent){
                        itemIsPresent.quantity = itemIsPresent.quantity+1;
                }
                else{
                    let cartObj = {dataObj:obj, quantity: 1};
                    state.items.push(cartObj);
                }
                
            },
            removeCart: (state,action) => {
                let id = action.payload;
                let itemIdx = state.items.findIndex((cartObj) => cartObj.dataObj.id==id)
                state.items.splice(itemIdx,1);
            },
            clearCart: (state) => {
                state.items.length = 0
            },
            incrementQuantity: (state,action) => {
                let id = action.payload;
                let cartItem = state.items.find((cartObj)=> cartObj.dataObj.id == id);
                cartItem.quantity = cartItem.quantity+1;
            },
            decrementQuantity: (state,action) => {
                let id = action.payload;
                let cartItem = state.items.find((cartObj)=> cartObj.dataObj.id == id);
                if(cartItem.quantity==1){
                    let itemIdx = state.items.findIndex((cartObj) => cartObj.dataObj.id==id)
                    state.items.splice(itemIdx, 1);
                }
                else{
                    cartItem.quantity = cartItem.quantity-1;
                }
            }
        }
    }
)

export const {addCart, removeCart, clearCart, incrementQuantity, decrementQuantity} = cartSlice.actions

export default cartSlice.reducer