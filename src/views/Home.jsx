import React, { useState, useEffect } from 'react'
import showService from '../services/showService'
//import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(false);

  const getAllShows = async () => {
    try {
      const response = await showService.getShows();
      setShows(response)
      setError(false)
    } catch (error) {
      console.error(error)
      setError(true)
    }
  };

  useEffect(() => {
    getAllShows()
  }, [])
  return (
    <div>
      <h2>Home</h2>
      {shows.length > 0 ? (
        <div>
          {shows.map((show) => {
            return (
              <Card showData={show} key={show._id} />
            )
          })}
        </div>
      ) : (
        <h3>Sorry! Not shows to display.</h3>
      )}
      {error && <h2>Sorry, something went wrong. Couldn't find shows.</h2>}
    </div>
  );
};
