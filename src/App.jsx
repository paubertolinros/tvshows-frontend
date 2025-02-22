import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Show from './views/Show';
import Edit from './views/Edit';
import New from './views/New';
import Signup from './views/auth/Signup'
import Login from './views/auth/Login'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>TV shows app</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/new" element={<New />} />
        <Route path="/shows/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
