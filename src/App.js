import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout'
import Searchpage from './pages/Searchpage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import history from './pages/history'
import Login from './pages/Login'
import { useEffect } from 'react';
import { auth } from './pages/firebase-config';

function App() {

  

  return (
    <Router history={history}>
      <div className="app">
      <Routes>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          <Route path='/prime' element={<><Header/></>}/>
          <Route path='/signup' element={<><Login /></>}/>
          <Route path='/search' element={<><Header/><Searchpage/></>}/>
          <Route path='/' element={<><Header/><Home/></>}/>
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
