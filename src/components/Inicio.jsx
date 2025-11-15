import GridDestinos from './GridDestinos'

function Inicio() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>Banners...</div>
      <h1 className='text-secundario m-6 text-center text-4xl font-bold'>Decide tu próximo destino...</h1>
      <GridDestinos ></GridDestinos>
    </div>
  )
}

export default Inicio
