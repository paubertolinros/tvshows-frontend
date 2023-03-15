import axios from 'axios';

class ShowService {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_BACKEND_URL}/shows`,
    });
  }

  // Iteration 2: use this method
  getShows() {
    return this.api.get('/').then(({ data }) => data).catch(err => console.error(err));
  }

  // Iteration 3: create method

  // Iteration 4: create method

  // Iteration 5: create method
}

const showService = new ShowService();

export default showService;