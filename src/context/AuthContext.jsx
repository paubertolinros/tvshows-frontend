import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

function AuthContextWrapper(props) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const storeToken = (token) => {
    localStorage.setItem('authToken', token);
  }

  const removeToken = () => {
    localStorage.removeItem('authToken');
  }

  const authenticateUser = async () => {
    setIsLoading(true);
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      try {
        const response = await authService.me();
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(response);
      } catch (error) {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
      }
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };
  
  const logOutUser = () => {
    removeToken();
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isLoading, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export {AuthContextWrapper, AuthContext}