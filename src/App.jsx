import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Inicio from './components/Inicio';
import PageNotFound from './components/PageNotFound';
import Registro from './components/Registro';
import GridGetViajes from './components/GridGetViajes';

function App() { 
const [paginaSelecionada, setPaginaSelecionada] = useState('inicio');
const [usuarioLoggeado, setUsuarioLoggeado] = useState(undefined);

const pintarCuerpo = () => {  
  switch (paginaSelecionada) {
    case 'inicio':
      return <Inicio />;      
    case 'login':
      return <Login cambiarPagina={setPaginaSelecionada} setUsuarioLoggeado={setUsuarioLoggeado}/>;
    case 'registro':
      return <Registro />;

    case 'gestionar-viajes':
      return <GridGetViajes />;

    default:
     return <PageNotFound cambiarPagina={setPaginaSelecionada}/>
  }


}

  return (
    <>
      <Header cambiarPagina={setPaginaSelecionada} usuarioLoggeado={usuarioLoggeado} setUsuarioLoggeado={setUsuarioLoggeado}/>
      <main>
        {pintarCuerpo()}
      </main>
      <Footer />
    </>
  )
}

export default App
