import { createContext, useState ,useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    // to add item into cart
    const [cartItems , setCartItems] = useState({})

    // to add cart item functionality
    const addToCart = (itemId) => {
        // if user add product 1st time
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId] : 1}))
        }
        //if item is already in cart
        else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId] +1}))
        }
    }

    // to remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    //to check product is add in cart or not 
    useEffect(() => {
      console.log(cartItems);
    }, [cartItems])
    

    const contextValue = {
        //mount food list from assets to use in any component
        // food_list is value of context
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;