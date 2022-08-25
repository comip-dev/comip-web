import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Institutional from './containers/Institutional';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
        <Route exact path={'/home'} element={[<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional'} element={[<Navbar/>,<Institutional/>]} />
      </Routes>
    </Router>
  );
}

export default App;
