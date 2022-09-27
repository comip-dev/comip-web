import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Institutional from './containers/Institutional';
import Rio from './containers/Rio';
import NavObserver from './components/NavObserver';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={[<NavObserver/>,<Navbar/>,<Home/>]}/>
        <Route exact path={'/home'} element={[<NavObserver/>,<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional/:seccion'} element={[<NavObserver/>,<Navbar/>,<Institutional/>]} />
        <Route exact path={'/rio'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/fauna'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/nav'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/proyecto'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/agua'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/mapa'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/convenios'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
      </Routes>
    </Router>
  );
}

export default App;
