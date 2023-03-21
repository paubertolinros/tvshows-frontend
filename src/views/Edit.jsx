import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import showService from '../services/showService';

export default function Edit() {
  const { id } = useParams();
  const [showEdit, setShowEdit] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getShowData = async () => {
    try {
      const response = await showService.getShow(id);
      setShowEdit(response)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  };

  useEffect(() => {
    getShowData();
    // eslint-disable-next-line
  }, [id]);

  const handleChange = (e) => {
    setShowEdit(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await showService.editShow(id, showEdit);
      navigate(`/shows/${id}`)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  };

  return (
    <div>
      <h2>Edit show</h2>
       <form onSubmit={handleSubmit}>
        <label> Title </label>
        <input type='text' name='title' value={showEdit.title} onChange={handleChange} required/>
        <label> Creator </label>
        <input type='text' name='creator' value={showEdit.creator} onChange={handleChange} required/>
        <label> Launched </label>
        <input type='number' name='launched' value={showEdit.launched} onChange={handleChange} required />
        <label> Genre </label>
        <input type='text' name='genre' value={showEdit.genre} onChange={handleChange} required />
        <label> Description </label>
        <input type='text' name='description' value={showEdit.description} onChange={handleChange} required />
        <label> Image </label>
        <input type='text' name='image' value={showEdit.image} onChange={handleChange} required/>
        <button type='submit'>Submit</button>
      </form>
      {error && <h3>Sorry, something went wrong.</h3>}
    </div>
  )
}
