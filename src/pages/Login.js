import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <h2>Sign in</h2>
      <form className='login__form'>
        <input type='text'/><br/>
        <input type='text'/>
      </form>
      <button>Sign in</button>
      <small><p>By signing-in you agree to Amazon's Condition of Use and Save</p></small>
      <button>Create Your Amazon Account</button>
    </div>
  )
}

export default Login