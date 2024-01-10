import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import MainPage from './components/mainPage';
import LoginPage from './components/loginPage';
import NotFound from './components/notFound';
import AddMoviePage from './components/addMoviePage';
import RatedMoviesPage from './components/ratedMoviesPage';
import MovieDetailsPage from './components/movieDetails';
import { isExpired } from 'react-jwt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/add-movie'
            element={isExpired(localStorage.getItem('token')) ? <Navigate replace to='/login' /> : <AddMoviePage />}
          />
          <Route path='/rated-movies' element={<RatedMoviesPage />} />
          <Route path='/details/:titleYear' element={<MovieDetailsPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
