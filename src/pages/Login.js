import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text'/><br/>
          <h5>Password</h5>
          <input type='password'/>
        </form>
        <button className='login__signInButton'>Sign in</button>
        <p>By signing-in you agree to Amazon's Condition of Use and Sale</p>
        <button className='login__registerButton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login