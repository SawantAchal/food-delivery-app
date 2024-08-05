import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrderPage = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate()
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() * 100 + 2 * 100,
    };

    try {
      let response = await axios.post(`${url}/api/order/placeorder`, orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        const errorMessage = typeof response.data.message === 'string'
          ? response.data.message
          : JSON.stringify(response.data.message);
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order');
    }
  };



  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }
    else if(getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className='flex flex-col  md:flex-row items-start justify-between gap-12 mt-14 md:m-10 m-5'>
      <div className='w-full max-w-[max(30%,500px)]'>
        <p className='text-2xl font-bold mb-12'>Delivery Information</p>
        <div className='flex gap-3'>
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
        </div>
        <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
        <input type='text' name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
        <div className='flex gap-3'>
          <input type='text' name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
          <input type='text' name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
        </div>
        <div className='flex gap-3'>
          <input type='text' name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
          <input type='text' name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
        </div>
        <input type='text' name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' />
      </div>
      <div className='w-full max-w-[max(40%,500px)]'>
        <div className='flex-1 flex flex-col gap-5'>
          <h2 className='text-2xl font-bold mb-5'>Cart Totals</h2>
          <div>
            <div className='flex justify-between text-gray-400'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mx-2.5' />
            <div className='flex justify-between text-gray-400'>
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='mx-2.5' />
            <div className='flex justify-between text-gray-400'>
              <strong>Total</strong>
              <strong>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</strong>
            </div>
          </div>
          <button type='submit' className='border-none text-white bg-red-500 w-[max(15vw,200px)] rounded-md cursor-pointer px-3 py-0 mt-8'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrderPage;


// import React, { useContext, useEffect, useState } from 'react';
// import { StoreContext } from '../context/StoreContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const PlaceOrderPage = () => {
//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: ""
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const validateForm = () => {
//     const { firstName, lastName, email, street, city, state, zipcode, country, phone } = data;
//     if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
//       alert("Please fill in all the required fields.");
//       return false;
//     }
//     return true;
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) return;

//     let orderItems = [];
//     food_list.forEach((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = { ...item, quantity: cartItems[item._id] };
//         orderItems.push(itemInfo);
//       }
//     });

//     let orderData = {
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() * 100 + 2 * 100,
//     };

//     try {
//       let response = await axios.post(`${url}/api/order/placeorder`, orderData, { headers: { token } });
//       if (response.data.success) {
//         const { session_url } = response.data;
//         window.location.replace(session_url);
//       } else {
//         const errorMessage = typeof response.data.message === 'string'
//           ? response.data.message
//           : JSON.stringify(response.data.message);
//         alert(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('Error placing order');
//     }
//   };

//   const placeCODOrder = async () => {
//     if (!validateForm()) return;

//     let orderItems = [];
//     food_list.forEach((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = { ...item, quantity: cartItems[item._id] };
//         orderItems.push(itemInfo);
//       }
//     });

//     let orderData = {
//       address: data,
//       items: orderItems,
//       amount: getTotalCartAmount() * 100 + 2 * 100,
//       paymentMethod: 'Cash on Delivery'
//     };

//     try {
//       let response = await axios.post(`${url}/api/order/placeorder`, orderData, { headers: { token } });
//       if (response.data.success) {
//         navigate('/myorders');
//       } else {
//         const errorMessage = typeof response.data.message === 'string'
//           ? response.data.message
//           : JSON.stringify(response.data.message);
//         alert(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('Error placing order');
//     }
//   };

//   useEffect(() => {
//     if (!token) {
//       navigate('/cart');
//     } else if (getTotalCartAmount() === 0) {
//       navigate('/cart');
//     }
//   }, [token]);

//   return (
//     <form className='flex flex-col md:flex-row items-start justify-between gap-12 mt-14 md:m-10 m-5'>
//       <div className='w-full max-w-[max(30%,500px)]'>
//         <p className='text-2xl font-bold mb-12'>Delivery Information</p>
//         <div className='flex gap-3'>
//           <input name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//           <input name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//         </div>
//         <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//         <input type='text' name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//         <div className='flex gap-3'>
//           <input type='text' name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//           <input type='text' name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//         </div>
//         <div className='flex gap-3'>
//           <input type='text' name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//           <input type='text' name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//         </div>
//         <input type='text' name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' />
//       </div>
//       <div className='w-full max-w-[max(40%,500px)]'>
//         <div className='flex-1 flex flex-col gap-5'>
//           <h2 className='text-2xl font-bold mb-5'>Cart Totals</h2>
//           <div>
//             <div className='flex justify-between text-gray-400'>
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr className='mx-2.5' />
//             <div className='flex justify-between text-gray-400'>
//               <p>Delivery fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr className='mx-2.5' />
//             <div className='flex justify-between text-gray-400'>
//               <strong>Total</strong>
//               <strong>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</strong>
//             </div>
//           </div>
//           <button type='submit' onClick={placeOrder} className='border-none text-white bg-red-500 w-[max(15vw,200px)] rounded-md cursor-pointer px-3 py-0 mt-8'>PROCEED TO PAYMENT</button>
//           <button type='button' onClick={placeCODOrder} className='border-none text-white bg-green-500 w-[max(15vw,200px)] rounded-md cursor-pointer px-3 py-0 mt-4'>CASH ON DELIVERY</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrderPage;














// import React, { useContext, useEffect, useState } from 'react';
// import { StoreContext } from '../context/StoreContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const PlaceOrderPage = () => {
//     const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
//     const navigate = useNavigate();
//     const [data, setData] = useState({
//         firstName: "", lastName: "", email: "", street: "", city: "", state: "", zipcode: "", country: "", phone: ""
//     });
//     const [paymentMethod, setPaymentMethod] = useState('card'); // default to card payment

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const placeOrder = async (event) => {
//         event.preventDefault();
//         let orderItems = [];
//         food_list.forEach((item) => {
//             if (cartItems[item._id] > 0) {
//                 let itemInfo = { ...item, quantity: cartItems[item._id] };
//                 orderItems.push(itemInfo);
//             }
//         });

//         let orderData = {
//             address: data,
//             items: orderItems,
//             amount: getTotalCartAmount() * 100 + 2 * 100,
//             paymentMethod: paymentMethod
//         };

//         try {
//             let response = await axios.post(`${url}/api/order/placeorder`, orderData, { headers: { token } });
//             if (response.data.success) {
//                 if (paymentMethod === 'card') {
//                     const { session_url } = response.data;
//                     window.location.replace(session_url);
//                 } else {
//                     navigate('/myorders'); // Navigate to order confirmation page for cash on delivery
//                 }
//             } else {
//                 const errorMessage = typeof response.data.message === 'string'
//                     ? response.data.message
//                     : JSON.stringify(response.data.message);
//                 alert(errorMessage);
//             }
//         } catch (error) {
//             console.error('Error placing order:', error);
//             alert('Error placing order');
//         }
//     };

//     useEffect(() => {
//         if (!token) {
//             navigate('/cart');
//         } else if (getTotalCartAmount() === 0) {
//             navigate('/cart');
//         }
//     }, [token]);

//     return (
//         <form onSubmit={placeOrder} className='flex flex-col  md:flex-row items-start justify-between gap-12 mt-14 md:m-10 m-5'>
//             <div className='w-full max-w-[max(30%,500px)]'>
//                 <p className='text-2xl font-bold mb-12'>Delivery Information</p>
//                 {/* Form Fields */}
//                 <div className='flex gap-3'>
//                     <input name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                     <input name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last name' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                 </div>
//                 <input type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Email Address' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                 <input type='text' name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                 <div className='flex gap-3'>
//                     <input type='text' name='city' onChange={onChangeHandler} value={data.city} placeholder='City' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                     <input type='text' name='state' onChange={onChangeHandler} value={data.state} placeholder='State' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                 </div>
//                 <div className='flex gap-3'>
//                     <input type='text' name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                     <input type='text' name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' required />
//                 </div>
//                 <input type='text' name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' className='mb-4 w-full p-3 border-2 border-solid border-gray-500 rounded-md outline-red-600' />
//             </div>
//             <div className='w-full max-w-[max(40%,500px)]'>
//                 <div className='flex-1 flex flex-col gap-5'>
//                     <h2 className='text-2xl font-bold mb-5'>Cart Totals</h2>
//                     <div>
//                         <div className='flex justify-between text-gray-400'>
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr className='mx-2.5' />
//                         <div className='flex justify-between text-gray-400'>
//                             <p>Delivery fee</p>
//                             <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//                         </div>
//                         <hr className='mx-2.5' />
//                         <div className='flex justify-between'>
//                             <p className='font-semibold'>Total</p>
//                             <p className='font-semibold'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
//                         </div>
//                     </div>
//                     <div>
//                         <h2 className='text-2xl font-bold mb-5'>Payment Method</h2>
//                         <div className='flex gap-4'>
//                             <button type='button' onClick={() => setPaymentMethod('card')} className={`p-3 border-2 border-solid ${paymentMethod === 'card' ? 'border-green-500' : 'border-gray-500'} rounded-md outline-none`}>
//                                 Pay with Card
//                             </button>
//                             <button type='button' onClick={() => setPaymentMethod('cash')} className={`p-3 border-2 border-solid ${paymentMethod === 'cash' ? 'border-green-500' : 'border-gray-500'} rounded-md outline-none`}>
//                                 Cash on Delivery
//                             </button>
//                         </div>
//                     </div>
//                     <button type='submit' className='mt-4 p-3 w-full border-2 border-solid border-gray-500 rounded-md outline-red-600'>Place Order</button>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default PlaceOrderPage;
