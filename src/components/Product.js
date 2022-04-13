import React from 'react'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>This could be anything, this could also be pulled from a JSON data file</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
        </div>
        <div className='product__rating'>
            <p>*</p>
        </div>
        <img className='product__image' src='' alt='' />
        <button>Add to basket</button>
    </div>
    
  )
}

export default Product