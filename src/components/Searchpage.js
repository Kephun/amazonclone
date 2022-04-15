import React from 'react'
import './Searchpage.css'
import Product from './Product'

function Searchpage() {
  return (
    <div className='searchpage'>
        <h2>Results</h2>
        <div className='searchpage__results'>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            <Product title='The Lean' price='29.99' rating='***'/>
            {/* The props passed down */}
        </div>
    </div>
  )
}

export default Searchpage