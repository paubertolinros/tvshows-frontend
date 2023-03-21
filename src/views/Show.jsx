import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import showService from '../services/showService';

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getShow = async () => {
    try {
      const response = await showService.getShow(id);
      setShow(response)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  };

  useEffect(() => {
    getShow();
    // eslint-disable-next-line
  }, [id]);

  const handleDeleteShow = async (id) => {
    try {
      await showService.deleteShow(id);
    } catch (error) {
      console.error(error)
    } finally {
      navigate('/')
    }
  };

  return (
    <div>
      <h2>TV Show details</h2>
      {show !== null ? (
      <div key={show._id}>
        <h2> {show.title} </h2>
        <img src={show.image} alt={show.title} className="show_img"/>
        <p>Creator: {show.creator}</p>
        <p>Launched: {show.launched}</p>
        <p>Genre: {show.genre}</p>
        <p>Description: {show.description}</p>
        <div>
          <button><Link to={`/edit/${show._id}`}>Edit</Link></button>
          <button onClick={()=>handleDeleteShow(`${show._id}`)}>Delete</button>
        </div>
      </div>
      ) : (<h3>Sorry! Not show to display.</h3>)}
      {error && <h3>Sorry, something went wrong. Couldn't find show.</h3>}
    </div>
  )
}
