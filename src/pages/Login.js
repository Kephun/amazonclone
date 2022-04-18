import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { db, auth } from './firebase'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    //Firebase authentication
  }

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth)
      })
    //do some fancy firebase register
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/><br/>
          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
        </form>
        <button type='submit' className='login__signInButton' onClick={signIn}>Sign in</button>
        <p>By signing-in you agree to Amazon's Condition of Use and Sale</p>
        <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login