
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import View from './pages/View'





function App() {
  return (
  <>
      <div className="App">
  
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/view/:id" element={<View/>} />
      
  
        </Routes>
    
        <hr/>
  
        <Footer />
  
      </div>
  </>
  );
}

export default App;







