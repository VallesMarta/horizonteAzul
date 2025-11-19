import { useEffect, useState } from 'react';
import Destino from './Destino'

function GridDestinos({urlAPI}) {
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    // renderiza la variable
    let cargarViajes = async () => {
      setViajes(await listarViajes());

    }

    cargarViajes();
    
  },[])
  const listarViajes = async () => {
    try {
      const respuesta = await fetch(urlAPI + '/viajes');
      const data = await respuesta.json();

      if (respuesta.ok) {
        return data.resultado;
      }
    } catch (error) {
      console.error("ERROR: No hay viajes disponibles");
      return [];
    }
  };

  return (
    <div className='w-[75%] flex flex-row flex-wrap justify-center items-center gap-5 p-2 m-5'>
      {
        viajes.map((viajeSel)=>{
          return <Destino key={viajeSel._id} viaje={viajeSel}/>
        })
      }      
    </div>
  )
}

export default GridDestinos
