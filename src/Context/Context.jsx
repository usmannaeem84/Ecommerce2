import React, { createContext,useEffect,useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ProductContext = createContext();

const ProductContextProvider = (props) => {



const currency = "$ "
const deliveryFee = 10; 
const [search , setSearch] = useState("")
const [showSearch , setShowSearch] = useState(false)
const [cartItems,setCartItems] = useState({})
const navigate = useNavigate()


const AddCart = async (itemId,size)=>{

  let cart = structuredClone(cartItems)

    if (!size) {
        toast.error("Select Product Size")
        return;
    }

if (cart[itemId]) {
    if (cart[itemId][size]) {
        cart[itemId][size] += 1;
    }else{
        cart[itemId][size] = 1;
    }
    
}else{
    cart[itemId] = {};
  cart[itemId][size]=1;
}



toast.success("Item Added To Cart")
setCartItems(cart)

}

function getTotalCart(){

    let totalCartQuant = 0;
    for (const items in cartItems) {
       for (const item in cartItems[items]) {
        try {     
            if (cartItems[items][item] > 0) {
                
            }
            totalCartQuant += cartItems[items][item]
                
         
        } catch (error) {
            
        }
       
       }
    }
    return totalCartQuant;
}

function updateQuantity(itemId,size,quantity){

    const cartData = structuredClone(cartItems) 
 
       cartData[itemId][size]=quantity
    
    setCartItems(cartData)
}

function getTotalAmount(){
let totalAmount=0;
for (const itemID in cartItems) {
 
    const prodInfo = products.find((product)=>itemID===product._id)

    for (const item in cartItems[itemID]) {
        try {
            if (cartItems[itemID][item] > 0) {
                
                totalAmount += prodInfo.price * cartItems[itemID][item]  
            }
        } catch (error) {
            
        }
    }

}

return totalAmount;
}

function clearCart() {

    let clearedCart = structuredClone(cartItems);
  
    for (const itemID in clearedCart) {
      for (const size in clearedCart[itemID]) {
        clearedCart[itemID][size] = 0;
      }
    }
  
   
    setCartItems(clearedCart);

 
}

    const contextValue = {products,currency,deliveryFee,getTotalAmount,cartItems,search,setSearch,updateQuantity,showSearch,getTotalCart,setShowSearch,AddCart,navigate,clearCart}

    return (

        <ProductContext.Provider value={contextValue}>
            {props.children}
        </ProductContext.Provider>

    )

}
export default ProductContextProvider;