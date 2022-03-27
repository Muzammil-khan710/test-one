import React from 'react'
import pic from "./Shirt.jpg"
import "./images.css"

const Shirt = () => {
  return (
    <div>
        <img className='round-img' src={pic} alt="" />
    </div>
  )
}

export { Shirt }