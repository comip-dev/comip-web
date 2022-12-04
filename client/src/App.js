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
import Contacto from './containers/Contacto';
import Alturas from './containers/Alturas';
import Noticias from './containers/Noticias';
import Noticia from './containers/Noticia';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={[<Navbar/>,<Home/>]}/>
        <Route exact path={'/home'} element={[<Navbar/>,<Home/>]} />
        <Route exact path={'/Institucional/:seccion'} element={[<Navbar/>,<Institutional/>]} />
        <Route exact path={'/rio/:seccion'} element={[<Navbar/>,<Rio/>]} />
        <Route exact path={'/fauna/:seccion'} element={[<Navbar/>,<Fauna/>]} />
        <Route exact path={'/estudiosdelconvenio'} element={[<Navbar/>,<EstudiosConvenio/>]} />
        <Route exact path={'/normaBilaterales'} element={[<Navbar/>,<NormativasBilaterales/>]} />
        <Route exact path={'/informe/:period'} element={[<Navbar/>,<Informe/>]} />
        <Route exact path='/biblioteca/:section' element={[<Navbar/>,<Biblioteca/>]} />
        <Route exact path={'/nav/:seccion'} element={[<Navbar/>,<Navegacion/>]} />
        <Route exact path={'/proyectos/:seccion'} element={[<Navbar/>,<Proyectos/>]} />
        <Route exact path={'/agua/:seccion'} element={[<Navbar/>,<Agua/>]} />
        <Route exact path={'/subtramo/:to'} element={[<Navbar/>,<Subtramo/>]} />
        <Route exact path={'/contacto'} element={[<Navbar/>,<Contacto/>]} />
        <Route exact path={'/alturas'} element={[<Navbar/>,<Alturas/>]} />
        <Route exact path={'/noticias'} element={[<Navbar/>,<Noticias/>]} />
        <Route exact path={'/noticia/:id'} element={[<Navbar/>,<Noticia/>]} />
      </Routes>
    </Router>
  );
}

export default App;
