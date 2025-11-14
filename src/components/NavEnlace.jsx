function NavEnlace({enlace, irA, textoAMostrar}) {
  return (
    <li>
        <a onClick={()=> enlace(irA)}
            className="font-bold text-lg cursor-pointer hover:text-iconos hover:scale-110 inline-block transform transition duration-300"
        >{textoAMostrar}</a>
    </li>
  )
}

export default NavEnlace
