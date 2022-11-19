import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Navbar from './components/Navbar';
import Institutional from './containers/Institutional';
import Mockup from './containers/Mockup';
import NavObserver from './components/NavObserver';
import Rio from './containers/Rio';
import Fauna from './containers/Fauna';
import EstudiosConvenio from './components/Fauna/EstudiosConvenio';
import NormativasBilaterales from './components/Fauna/NormativasBilaterales';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={[<NavObserver/>,<Navbar/>,<Home/>]}/>
        <Route exact path={'/home'} element={[<NavObserver/>,<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional/:seccion'} element={[<NavObserver/>,<Navbar/>,<Institutional/>]} />
        <Route exact path={'/rio/:seccion'} element={[<NavObserver/>,<Navbar/>,<Rio/>]} />
        <Route exact path={'/fauna/:seccion'} element={[<NavObserver/>,<Navbar/>,<Fauna/>]} />
        <Route exact path={'/estudiosdelconvenio'} element={[<NavObserver/>,<Navbar/>,<EstudiosConvenio/>]} />
        <Route exact path={'/normaBilaterales'} element={[<NavObserver/>,<Navbar/>,<NormativasBilaterales/>]} />

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
