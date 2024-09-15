import React, { useContext, useEffect, useState } from 'react';
import TotalAmount from '../Components/TotalAmount';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify';
import { ProductContext } from '../Context/Context';


const PlaceOrder = () => {

  const { navigate, clearCart } = useContext(ProductContext);

  function Orderplace() {

    toast.success("Order Placed");

  
    setTimeout(() => {

      clearCart(); 
      navigate("/"); 
    }, 2000); 
  }
  const [method, setMethod] = useState("COD")

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8 p-8">

      {/* Left side - Delivery Information */}
      <div className="left w-full sm:w-[40%]">

        <div className="text-xl sm:text-2xl font-medium">
          <div className="flex flex-col gap-1 mb-8">
            <div className="flex gap-2 items-center">
              <p className="text-xl sm:text-2xl font-medium text-gray-500">DELIVERY</p>
              <p className="text-xl sm:text-2xl font-medium">INFORMATION</p>
              <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
            </div>
          </div>
        </div>

        {/* Delivery Form */}
        <form className=" flex gap-4 flex-col">

    <div className='flex gap-3'>
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text"  placeholder='First Name' />
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='Last Name'  />
    </div>
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="email" placeholder='Email address'  />
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text"  placeholder='Street' />
    <div className='flex gap-3'>
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='City'  />
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text" placeholder='State'  />
    </div>
    <div className='flex gap-3'>
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="number"  placeholder='ZipCode' />
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="text"  placeholder='Country' />
    </div>
      <input className='border border-gray-300 py-1.5 px-3.5 w-full rounded' type="number"  placeholder='Phone' />

        </form>



      </div>

      {/* Right side - Cart Totals and Payment Method */}
      <div className="right w-full sm:w-[45%]">
        <TotalAmount />

        {/* Payment Method */}
        <div className="method mt-12 flex flex-col ">

        <div className="flex flex-col gap-1 mb-8">
            <div className="flex gap-2 items-center">
              <p className="text-lg sm:text-xl font-medium text-gray-500">PAYMENT</p>
              <p className="text-lg sm:text-xl font-medium">METHOD</p>
              <div className="w-9 sm:w-11 h-[2px] bg-black"></div>
            </div>
            </div>
            
          <div className="flex gap-4 items-center flex-col sm:flex-row">

            <div onClick={() => setMethod("STRIPE")} className="payM flex gap-5 w-full sm:w-[60%] items-center px-3 py-2 border border-gray-200">
              <div className={`circle border ${ method === "STRIPE" ? "bg-green-400" : ""}  w-3 h-3 rounded-full`}></div>
              <img className="h-5" src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div onClick={() => setMethod("RAZOR")} className="payM flex gap-5 w-full sm:w-[75%] items-center px-3 py-2 border border-gray-200">
              <div className={`circle border  ${method === "RAZOR" ? "bg-green-400" : ""} w-3 h-3 rounded-full`}></div>
              <img className="h-5" src={assets.razorpay_logo} alt="Stripe" />
            </div>

            <div onClick={() => setMethod("COD")} className="flex gap-5 w-full  sm:w-[85%]  items-center px-3 py-2 border border-gray-200">

              <div className={`circle border ${method === "COD" ? "bg-green-400" : ""} w-3 h-3 rounded-full`}></div>
              <p className='text-base text-gray-700'>CASH ON DELIVERY</p>
            </div>

          </div>
        <button onClick={()=>Orderplace()} className="mt-8 w-full sm:w-40 bg-black  text-white py-2 px-5 text-sm sm:text-base font-semibold">PLACE ORDER</button>
        </div>


      </div>
    </div>
  );
};

export default PlaceOrder;