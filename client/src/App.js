import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Institutional from './containers/Institutional';
import Mockup from './containers/Mockup';
import NavObserver from './components/NavObserver';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={[<NavObserver/>,<Navbar/>,<Home/>]}/>
        <Route exact path={'/home'} element={[<NavObserver/>,<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional/:seccion'} element={[<NavObserver/>,<Navbar/>,<Institutional/>]} />
        <Route exact path={'/rio'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
        <Route exact path={'/fauna'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
        <Route exact path={'/nav'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
        <Route exact path={'/proyecto'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
        <Route exact path={'/agua'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
        <Route exact path={'/mapa'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
        <Route exact path={'/convenios'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
      </Routes>
    </Router>
  );
}

export default App;
