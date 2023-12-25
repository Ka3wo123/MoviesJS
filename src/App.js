
import './App.css';
import Navbar from './components/navBar';
import { useEffect, useState } from 'react';

import { Outlet } from "react-router-dom";
import axios from 'axios';

function App() {
  const appStyle = {
    backgroundColor: '#414141',
    minHeight: '100vh'
  };
  const url = 'https://at.usermd.net/api/movies';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setMovies(response.data);
      }).catch(err => { console.err(err) })

  }, []);

  return (
    <div style={appStyle}>
      <Navbar movies={movies}/>      
      <Outlet />
      <footer>
        <p className='copy'>MoviesJS &copy; | 2023</p>
      </footer>
    </div>
  );
}

export default App;
