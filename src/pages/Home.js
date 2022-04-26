import React from 'react';
import './Home.css'
import Product from '/home/kephun/amazonclone/src/components/Product.js'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''/>
        <div className='home__row'>
          <Product id='1' title='The Lean' price='29.99' rating='***'/>
          <Product id='1' title='Caffeine' price='29.99' rating='**'/>
          <Product id='1' title='Weights' price='200.10' rating='*'/>
        </div>
        <div className='home__row'>
          <Product id='1' title='The Lean' price='29.99' rating='***'/>
          <Product id='1' title='Caffeine' price='29.99' rating='**'/>
          <Product id='1' title='Weights' price='200.10' rating='*'/>
        </div>
        <div className='home__row'>
          <Product id='1' title='The Lean' price='29.99' rating='***'/>
          <Product id='1' title='Caffeine' price='29.99' rating='**'/>
          <Product id='1' title='Weights' price='200.10' rating='*'/>
        </div>
      </div>
    </div>
  )
}

export default Home