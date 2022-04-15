import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import history from './history'


function Header() {
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        </Link>

        <div className='header__search'>
            <form className='header__searchForm' onSubmit={changeComponent}>
            <input className='header__searchInput' type='text'/>
            {/* Search Logo */}
            </form>
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello, Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Retuns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <span className='header__optionLineTwo header__basketCount'>0</span>
                {/* Basket Logo */}
            </div>
            </Link>
        </div>
    </div>
  )
}

const changeComponent = () => {
    history.push('/search')
}

export default Header