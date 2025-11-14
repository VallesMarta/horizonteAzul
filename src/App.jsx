import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Inicio from './components/Inicio';
import PageNotFound from './components/PageNotFound';

function App() { 
const [paginaSelecionada, setPaginaSelecionada] = useState('inicio');

const pintarCuerpo = () => {
  console.log(paginaSelecionada);
  
  switch (paginaSelecionada) {
    case 'inicio':
      return <Inicio />;
      
    case 'login':
      return <Login />;

    default:
     return <PageNotFound />
  }


}

  return (
    <>
      <Header cambiarPagina={setPaginaSelecionada}/>
      <main>
        {pintarCuerpo()}
      </main>
      <Footer />
    </>
  )
}

export default App
