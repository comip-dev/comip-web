import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Institutional from './containers/Institutional';
import Rio from './containers/Rio';
import Authorities from './components/Institutional/Authorities';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={[<Navbar/>,<Home/>]}/>
        <Route exact path={'/home'} element={[<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional'} element={[<Navbar/>,<Institutional/>,<Authorities/>]} />
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
