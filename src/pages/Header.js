import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../components/StateProvider';
import { auth } from './firebase-config';



function Header() {

    const [{ basket, user }] = useStateValue();

    const navigate = useNavigate(); 
    const changeComponent = () => {
        navigate('/search');
    }

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
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
            
            <Link to={!user && '/signup'}>
            <div onClick={handleAuthentication} className='header__option'>
                <span className='header__optionLineOne'>Hello, guest</span>
                <span className='header__optionLineTwo'>{user ? 'Sign out':'Sign In'}</span>
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
                <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}



export default Header