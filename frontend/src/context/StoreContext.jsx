import { createContext, useState ,useEffect } from "react";
// import { food_list } from "../assets/assets";
import axios from 'axios'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    // to add item into cart
    const [cartItems , setCartItems] = useState({})
    const url ="https://food-delivery-app-xai3.onrender.com"
    // const url ="http://localhost:4000"
    //crested state to store token in loginform 
    const [token , setToken] = useState("")
    const [food_list ,setFoodList] = useState([])

    // to add cart item functionality
    const addToCart = async (itemId) => {
        // if user add product 1st time
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId] : 1}))
        }
        //if item is already in cart
        else {
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId] +1}))
        }
        //check token is available for not
        if (token) {
            await axios.post(url+"/api/cart/addtousercart" ,{itemId},{headers:{token}})
        }
    }

    // to remove item from cart
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}));
        //check token is available for not
        if (token) {
            await axios.post(url+"/api/cart/removefromcart",{itemId},{headers:{token}})
        }
    }

    // to return cart total
    const getTotalCartAmount = () => {
        let totalAmount = 0 ;
        for (const item in cartItems) 
            {
                // if will execute when cart items is greater than zero
                if (cartItems[item]>0) {
                    let itemInfo = food_list.find((product) => product._id === item)
                    totalAmount += itemInfo.price*cartItems[item]
                }
            }
        return totalAmount;
    }



    //to check product is add in cart or not 
    // useEffect(() => {
    //   console.log(cartItems);
    // }, [cartItems])
    
    // function to fetch food item from data base in the state 
    const fetchFoodList = async () => {
        //call api
        const response = await axios.get(url+"/api/food/list")
        setFoodList(response.data.data)
        // console.log(response)
    }

    //after a refresh the page how mush fooditem you have add into the cart should be display as it is.
    const loadCartData = async(token) => {
        const response = await axios.post(url+'/api/cart/getcartdetails',{},{headers:{token}});
        setCartItems(response.data.cartData);
    }

    useEffect(() => {
        async function loadData(){
            await fetchFoodList();
        //logic for - after a refresh page data should be remain in local storage .
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
            //load the loadCartData function after refresh the page
            await loadCartData(localStorage.getItem("token"))
        }
    }
        loadData()
    },[])

    const contextValue = {
        //mount food list from assets to use in any component
        // food_list is value of context
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;