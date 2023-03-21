import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import showService from '../services/showService'

export default function New() {
  const initialState = {
    title: '',
    creator: '',
    launched: '',
    genre: '',
    description: '',
    image: '',
  }
  const [newShow, setNewShow] = useState(initialState);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setNewShow(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newShoww = await showService.createShow(newShow);
      setNewShow(initialState);
      setError(false)
      navigate(`/shows/${newShoww._id}`)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  };

  return (
    <div>
      <h2>Create a tv show</h2>
      <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input type='text' name='title' value={newShow.title} onChange={handleChange} required/>
        <label> Creator </label>
        <input type='text' name='creator' value={newShow.creator} onChange={handleChange} required/>
        <label> Launched </label>
        <input type='number' name='launched' value={newShow.launched} onChange={handleChange} required />
        <label> Genre </label>
        <input type='text' name='genre' value={newShow.genre} onChange={handleChange} required />
        <label> Description </label>
        <input type='text' name='description' value={newShow.description} onChange={handleChange} required />
        <label> Image </label>
        <input type='text' name='image' value={newShow.image} onChange={handleChange} required/>
        <button type='submit'>Submit</button>
      </form>
      {error && <h3>Sorry, something went wrong.</h3>}
    </div>
  )
}
