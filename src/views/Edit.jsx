import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import showService from '../services/showService';

export default function Edit() {
  const params = useParams();
  console.log(params.id)
  return (
    <div>
      <h2>Edit show</h2>
      {/* ITERATION 5 */}
      {/* Should display a form with the data previously incorporated and when saved, send the
      changes to the database. Then it should redirect to the Home ('/') */}
    </div>
  )
}
