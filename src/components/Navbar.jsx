import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/new">New show</NavLink></li>
        <li><NavLink onClick={() => navigate(-1)}>Go back</NavLink></li>
      </ul>
    </div>
  )
}
