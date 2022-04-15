import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout'
import Searchpage from './components/Searchpage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import history from './components/history'


function App() {
  return (
    <Router history={history}>
      <div className="app">
      <Routes>
          <Route path='/search' element={<><Header/><Searchpage/></>}/>
          <Route path='/checkout' element={<><Header/><Checkout/></>}/>
          <Route path='/' element={<><Header/><Home/></>}/>
      </Routes>  
      </div>
    </Router>
  );
}

export default App;
