import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

export default function Signup() {
  const [user, setUser] = useState({
    username: '',
    email: '',
  })
  const [password, setPassword] = useState('');
  const [controlPassword, setControlPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  useEffect(() => {
    if (password !== controlPassword) {
      setErrorMessage("Passwords don't match")
    } else {
      setErrorMessage(undefined)
    }
  }, [controlPassword, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup({ username: user.username, email: user.email, password });
      navigate('/login')
    } catch (error) {
      console.error(error)
      setErrorMessage('Unable to create user account')
    }
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <label> Email </label>
        <input type='text' name='email' value={user.email} onChange={handleChange} required/>
        <label> User Name </label>
        <input type='text' name='username' value={user.username} onChange={handleChange} required/>
        <label> Password </label>
        <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label> Repeat password </label>
        <input type='password' name='controlPassword' value={controlPassword} onChange={(e) => setControlPassword(e.target.value)} required />
        {errorMessage && <h3 style={{color: 'red'}}>{errorMessage}</h3>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}