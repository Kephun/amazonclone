import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase-config';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/')
    })
    .catch(error => alert(error.message))
    //Firebase authentication
  }

  const register = (e) => {
    e.preventDefault();
    
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if (auth) {
        navigate('/');
      }

    })
    .catch(error => alert(error.message))
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