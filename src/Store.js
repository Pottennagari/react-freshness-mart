import { configureStore, createSlice } from "@reduxjs/toolkit";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Sweets from "./Sweets";

const productsSlice= createSlice({
    name:'products',
    initialState:{ 
        Veg :[
        {image:'potato.jpeg',name:'Potato',price:30.0},
        {image:'tomato.jpeg',name:'Tomato',price:20.0},
        {image:'carrot.jpeg',name:'Carrot',price:140.0},
        {image:'paneer.jpeg',name:'Paneer',price:150.0},
        {image:'cauliflower.jpeg',name:'Cauliflower',price:50.0},
        {image:'onion.jpeg',name:'Onions',price:350.0},
        {image:'brinjal.jpeg',name:'Brinjal',price:120.0},
        {image:'capsicum.jpeg',name:'Capsicum',price:150.0},
        {image:'lady finger.jpeg',name:'Lady Finger',price:50.0},
        
    ],
    NonVeg:[
        {image:'chicken.jpeg',name:'Chicken',price:230.0},
        {image:'mutton biryani.jpeg',name:'Mutton Biryani',price:400.0},
        {image:'fish.jpeg',name:'Fish',price:160.0},
        {image:'mutton.jpeg',name:'Mutton',price:800.0},
        {image:'crabs.jpeg',name:'Crabs',price:200.0},
        {image:'chicken biryani.jpeg',name:'Chicken Biryani',price:300.0},
        {image:'prawns.jpeg',name:'Prawns',price:350.0},
        {image:'leg piece.jpeg',name:'Chicken leg piece',price:250.0},

    ],
    Sweets:[
        {image:'boondi laddu.jpeg',name:'Boondi Laddu',price:250.0},
        {image:'cake.jpeg',name:'Cake',price:1000.0},
        {image:'mysor pak.jpeg',name:'Mysor Pak',price:250.0},
        {image:'halwa.jpeg',name:'Halwa',price:300.0},
        {image:'dryfruit laddu.jpeg',name:'Dryfruit Laddu',price:550.0},
        {image:'jangry.jpeg',name:'Jangry',price:300.0},
        {image:'palkova.jpeg',name:'Palkova',price:350.0},
        {image:'soan papdi.jpeg',name:'Soan Papdi',price:350.0},
        {image:'rava laddu.jpeg',name:'Rava Laddu',price:350.0},
    ],
    },
    reducers:{}
})
const cartSlice=createSlice({
                 name:'cart',
                 initialState:[],
                 reducers:{
                    addtoCart :(state,action)=>{
                        const item=state.find(item=>item.name === action.payload.name);
                        if(item){
                            item.quantity +=1;
                        }
                        else{
                            state.push({...action.payload,quantity:1});
                        }
                    },
                    increament:(state,action)=>{
                        let item=state.find(item=>item.name === action.payload.name);
                        if(item)
                        {
;                            item.quantity +=1;
                        }
                    },
                    decreament:(state,action)=>{
                        let item=state.find(item=>item.name === action.payload.name);
                        if(item && item.quantity>1)
                        {
                            item.quantity -=1;
                        }
                        else{
                            return state.filter(item=>item.name !== action.payload.name);
                        }
                    },
                    remove:(state,action)=>{
                        return state.filter(item=>item.name !== action.payload.name);
                    },
                    clearCart:()=>[]
                }
})
const purchaseDetailsSlice=createSlice({
                 name:'purchaseDetails',
                 initialState:[],
                 reducers:{
                    addpurchaseDetails:(state,action)=>{
                        state.push(action.payload)
                    }
                 }
})
const authSlice=createSlice({
                name:'auth',
                initialState: {
                    isAuthenticated : localStorage.getItem("username")?true:false,
                    user:localStorage.getItem("username")
                },
                reducers :{
                    login : (state,action)=>{
                        state.isAuthenticated = true;
                        state.user = action.payload;
                        localStorage.setItem("username",action.payload);
                    },
                    logout:(state)=>{
                        state.isAuthenticated=false;
                        state.user="";
                        localStorage.removeItem("username");
                    },
                }
})
const Store= configureStore({
    reducer:{products:productsSlice.reducer,
             cart:cartSlice.reducer,
             purchaseDetails:purchaseDetailsSlice.reducer,
             auth:authSlice.reducer}
})
export const {addtoCart,increament,decreament,remove,clearCart}=cartSlice.actions;
export const{addpurchaseDetails}=purchaseDetailsSlice.actions;
export const{login,logout}=authSlice.actions;
export default Store;