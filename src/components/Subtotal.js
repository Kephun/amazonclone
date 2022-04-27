import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from '../reducer';


function Subtotal() {

  const [{ basket }] = useStateValue();

  return (
    <div className='subtotal'>
      <CurrencyFormat 
        value={getBasketTotal(basket)}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button className='subtotal_button'>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;