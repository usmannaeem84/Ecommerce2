import React, { useContext, useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../Context/Context'

const Navbar = () => {

    const [visible,setVisible] = useState(false)
const {setShowSearch,getTotalCart} = useContext(ProductContext)

    return (
        <div className='flex items-center justify-between py-5 font-medium' >
          <NavLink to="/" > <img src={assets.logo} alt="" className='w-36' /></NavLink>

            <ul className='  flex items-center justify-center gap-7 hidden sm:flex text-gray-700 ' >
                <NavLink to="/" className="flex flex-col items-center gap-1 " >
                    <p>HOME</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'  /> 
                </NavLink>

                <NavLink to="collection" className="flex flex-col items-center gap-1 " >
                    <p>COLLECTION</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'  />
                </NavLink>

                <NavLink to="about" className="flex flex-col items-center gap-1 " >
                    <p>ABOUT</p>
                    <hr className='w-3/4 h-[1.5px] bg-gray-700 border-none hidden'  />
                </NavLink>

                <NavLink to="contact" className="flex flex-col items-center gap-1 " >
                    <p>CONTACT</p>
                    <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'  />
                </NavLink>
            </ul>

<div className='flex items-center justify-center gap-6' >

<NavLink to="/collection"><img onClick={()=>setShowSearch(true)} className='w-5' src={assets.search_icon} alt="" /></NavLink>

<NavLink to="/login" className="group relative" >
    <img className='w-5' src={assets.profile_icon} alt="" />
    <div className=" hidden absolute dropdown-menu right-0 pt-4 ">
        <div className='flex flex-col bg-slate-100 w-36 px-3 py-5 gap-4 text-gray-500 '>
            <p className='cursor-pointer hover:text-black' >My profile</p>
            <p className='cursor-pointer hover:text-black' >Orders</p>
            <p className='cursor-pointer hover:text-black' >Logout</p>
        </div>
    </div>
</NavLink>

<NavLink to="/cart" className= "flex relative " >

<img className='w-5' src={assets.cart_icon} alt="" />
<p className="cquant bg-black leading-4  w-4 absolute rounded-full text-[8px] aspect-square text-center text-white right-[-5px] bottom-[-5px]">{getTotalCart()}</p>
</NavLink>

<img onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />

{/* creating navbar for small screen  */}

<div className={`flex flex-col absolute top-0 bottom-0 h-screen  right-0 overflow-hidden transition-all bg-slate-100 ${ visible ? "w-full" : "w-0" }  `} >

<div onClick={()=>setVisible(false)} className='flex gap-3 cursor-pointer items-center p-4' >
<img  className='rotate-180 h-4' src={assets.dropdown_icon} alt="" />
<p className='text-gray-700 font:md' >Back</p>
</div>

<div className="menu flex flex-col mt-3"></div>
<NavLink onClick={()=>setVisible(false)} className="menu py-4 pl-7 border  bg-white " to="/" >HOME</NavLink>
<NavLink onClick={()=>setVisible(false)} className="menu py-4 pl-7 border  bg-white " to="/collection" >COLLECTION</NavLink>
<NavLink onClick={()=>setVisible(false)} className="menu py-4 pl-7 border  bg-white " to="/about" >ABOUT</NavLink>
<NavLink onClick={()=>setVisible(false)} className="menu py-4 pl-7 border  bg-white " to="/contact" >CONTACT</NavLink>
</div>

</div>

        </div>
    )
}

export default Navbar
