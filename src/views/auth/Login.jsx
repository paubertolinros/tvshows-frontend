import React, { useState, useEffect } from 'react';
//import toast drom 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

export default function Login() {
  const { storeToken, authenticateUser, isLoggedIn } = useAuth();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(user)
      if (response.authToken) {
        storeToken(response.authToken);
        authenticateUser();
        navigate('/')
        //toast.succes('Welcome Back')
      } else {
        setErrorMessage('Unable to authenticate user');
      }
    } catch (error) {
      console.error(error)
      setErrorMessage('Unable to authenticate user')
    }
  };

    useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  // eslint-disable-next-line
  }, [isLoggedIn])

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label> Email </label>
        <input type='text' name='email' value={user.email} onChange={handleChange} required/>
        <label> Password </label>
        <input type='password' name='password' value={user.password} onChange={handleChange} required />
        {errorMessage && <h3 style={{color: 'red'}}>{errorMessage}</h3>}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}