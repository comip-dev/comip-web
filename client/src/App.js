import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Institutional from './containers/Institutional';
import Rio from './containers/Rio';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Navbar/>}/>
        <Route exact path={'/home'} element={[<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional'} element={[<Navbar/>,<Institutional/>]} />
        <Route exact path={'/rio'} element={[<Navbar/>,<Rio/>]} />
        <Route exact path={'/fauna'} element={[<Navbar/>,<Institutional/>]} />
        <Route exact path={'/nav'} element={[<Navbar/>,<Institutional/>]} />
        <Route exact path={'/proyecto'} element={[<Navbar/>,<Institutional/>]} />
        <Route exact path={'/agua'} element={[<Navbar/>,<Institutional/>]} />
        <Route exact path={'/mapa'} element={[<Navbar/>,<Institutional/>]} />
      </Routes>
    </Router>
  );
}

export default App;
