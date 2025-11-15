import { useState } from 'react';
import Destino from './Destino'

function GridDestinos() {
  const [viajes, setViajes] = useState([]);

  const data = async () => {
    try {
      const respuesta = await fetch('http://localhost:8080/viajes');
      const viajes =  respuesta.json();      
    } catch (error) {
      console.error("ERROR: no se puede acceder a los viajes" + error);      
    }
  }
  // (data().ok) ? setViajes(data) : [];
  // console.log(viajes);
  
  return (
    <div className='w-[75%] flex flex-row flex-wrap justify-center items-center gap-5 p-2 m-5'>
      <Destino />
      <Destino />
      <Destino />
      <Destino />
      <Destino />
      <Destino />
    </div>
  )
}

export default GridDestinos
