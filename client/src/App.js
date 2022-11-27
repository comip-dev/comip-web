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
import Informe from './containers/Informe';
import Biblioteca from './containers/Biblioteca';
import Navegacion from './containers/Navegacion';
import Proyectos from './containers/Proyectos';
import Agua from './containers/Agua';
import Subtramo from './components/Agua/Subtramo';


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
        <Route exact path={'/informe/:period'} element={[<NavObserver/>,<Navbar/>,<Informe/>]} />
        <Route exact path='/biblioteca/:section' element={[<NavObserver/>,<Navbar/>,<Biblioteca/>]} />
        <Route exact path={'/nav/:seccion'} element={[<NavObserver/>,<Navbar/>,<Navegacion/>]} />
        <Route exact path={'/proyectos/:seccion'} element={[<NavObserver/>,<Navbar/>,<Proyectos/>]} />
        <Route exact path={'/agua/:seccion'} element={[<NavObserver/>,<Navbar/>,<Agua/>]} />
        <Route exact path={'/subtramo/:to'} element={[<NavObserver/>,<Navbar/>,<Subtramo/>]} />
        <Route exact path={'/mapa'} element={[<NavObserver/>,<Navbar/>,<Mockup/>]} />
      </Routes>
    </Router>
  );
}

export default App;
