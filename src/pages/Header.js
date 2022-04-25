import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';




function Header() {

    const navigate = useNavigate(); 
    const changeComponent = () => {
        navigate('/search');
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
        </Link>

        <div className='header__search'>
            <form className='header__searchForm' onSubmit={changeComponent}>
                <input className='header__searchInput' type='text'/>
            </form>
            <i className="fa-solid fa-magnifying-glass" onClick={changeComponent}></i>
        </div>

        <div className='header__nav'>
            
            <Link to='/signup'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello, Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            </Link>

            <Link to='/prime'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Retuns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            </Link>

            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>

            <Link to='/checkout'>
            <div className='header__optionBasket'>
                <i className="fa-solid fa-basket-shopping"></i>
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
            </Link>
        </div>
    </div>
  )
}



export default Header