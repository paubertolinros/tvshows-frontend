import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import showService from '../services/showService';

export default function Show() {
  const params = useParams();
  console.log(params.id)

  return (
    <div>
      <h2>TV Show details</h2>
      {/* ITERATION 3 */}
    </div>
  )
}
