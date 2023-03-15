import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Show from './views/Show';
import Edit from './views/Edit';
import New from './views/New';

function App() {
  return (
    <div className="App">
      <h1>TV shows app</h1>
      {/* ITERATION 1: Should import a navbar to browse through the pages Home and New and should have a "go back" button */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/shows/:id" element={<Show />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
