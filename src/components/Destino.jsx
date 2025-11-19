import { useState } from "react";
import CardDescripcion from "./CardDescripcion";
// function Destino ({destino = "Irlanda", provincia="Dublin", precio=0.00, img="src/assets/media/img/img-inicio-destino-por-defecto.png", descripcion="Cargando descripcion..."}) {
function Destino ({ viaje }) {
  const [origen, setOrigen]  = useState(viaje.origen)
  const [origenAeropuerto, setOrigenAeropuerto] = useState(viaje.origenAeropuerto)
  const [destino, setDestino]  = useState(viaje.destino)
  const [destinoAeropuerto, setdestinoAeropuerto] = useState(viaje.destinoAeropuerto)
  const [precio, setPrecio] = useState(viaje.precio)
  const [img, setImg] = useState(viaje.img != "" ? viaje.img : "src/assets/media/img/img-inicio-destino-por-defecto.png");
  const [descripcion, setDescripcion] = useState(viaje.descripcion != "" ? viaje.descripcion : "UPS. No hay ninguna descripción actualmente")

  return (
    <div className="
      w-full max-w-[280px]  /* Ajusta al ancho de la imagen */
      p-3 rounded-xl flex flex-col bg-otro shadow-md
      transition-all duration-300 
      hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
    ">
      <img
        className="w-full h-48 object-cover rounded-lg mb-3"
        src={img}
        alt={destino}
      />

      {/* Título */}
      <h3 className="text-secundario font-extrabold text-2xl text-center mb-1">
        {destino}
      </h3>

      {/* Subtítulo / provincia */}
      <h5 className="text-center text-sm text-texto uppercase mb-2 font-bold">
        {destinoAeropuerto}
      </h5>

      {/* Descripción truncada */}
      <CardDescripcion descripcion={descripcion} />

      {/* Precio */}
      <p className="text-secundario font-semibold text-lg text-right mb-4">
        Precio: {precio}€
      </p>

      {/* Botón */}
      <button
        type="button"
        className=" cursor-pointer
          mt-4 p-2 rounded-lg bg-secundario text-fondo font-bold text-lg
          transition-all duration-300
          hover:bg-secundario/80 hover:scale-[1.05]
          active:scale-[0.95] active:bg-secundario/60
          shadow-md hover:shadow-lg
          self-center
        "
      >
        Reservar
      </button>
    </div>
  )
}

export default Destino;
