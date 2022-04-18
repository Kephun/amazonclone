import React from 'react'
import './Subtotal.css'


function Subtotal() {
  return (
    <div className='subtotal'>
        <h3>Subtotal (18 items): </h3>
        <small className='subtotal__gift'><input type='checkbox'/>This order contains a gift</small>
        <button className='subtotal__button'>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;