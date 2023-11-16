
import './App.css';
import Navbar from './components/navBar';

function App() {
  const appStyle = {
    backgroundColor: '#414141', // Change this to the desired color
    minHeight: '100vh', // Ensures the background color covers the entire viewport    
  };
  return (   
     
      <div style={appStyle}>        
        <Navbar />         
        <footer>
          <p className='copy'>MoviesJS &copy; | 2023</p></footer>                        
      </div>    
  );
}

export default App;
