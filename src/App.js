
import './App.css';
import Navbar from './components/navBar';

import { Outlet } from "react-router-dom";

function App() {
  const appStyle = {
    backgroundColor: '#414141',
    minHeight: '100vh'
  };

  return (
    <div style={appStyle}>
      <Navbar />      
      <Outlet/>                
      <footer>
        <p className='copy'>MoviesJS &copy; | 2023</p>
      </footer>       
    </div>
  );
}

export default App;
