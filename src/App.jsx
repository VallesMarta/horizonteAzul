import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

function App() { 
const [paginaSelecionada, setPaginaSelecionada] = useState('inicio');

const pintarCuerpo = () => {
  console.log(paginaSelecionada);
  
  switch (paginaSelecionada) {
      case 'inicio':

      return <Login />;
      
      case 'login':
      return "login";
  
    default:
     return "ERROR 404 - PAGE NOT FOUND";
  }


}

  return (
    <>
      <Header cambiarPagina={setPaginaSelecionada}/>
      <main>
        <p>{pintarCuerpo()}</p>
      </main>
      <Footer />
    </>
  )
}

export default App
