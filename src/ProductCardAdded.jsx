import React from 'react'
import { BsCartPlusFill } from "react-icons/bs";

const ProductCardAdded = (Component) => {
  return (props) => {
    return(
        <div className='relative'>
            <div className="z-20 ml-10 mt-10 absolute bg-orange-300 p-1"><BsCartPlusFill /></div>
            <Component {...props}></Component>
        </div>
          
    )
  }   
}

export default ProductCardAdded