import NavEnlace from "./NavEnlace";
import NavButton from "./NavButton";

function Header({cambiarPagina}) {
  return (
    <header className="p-4 bg-primario text-white flex items-center justify-between">
      <img onClick={()=> cambiarPagina('inicio')} src="./src/assets/media/img/logo_empresa_header.png" alt="Logo de Horizonte Azul" className="h-20" />      
      <nav className="flex flex-row justify-center items-center">
        <ul className="flex flex-row flex-wrap gap-5 items-center">
          <NavEnlace enlace={cambiarPagina} irA='inicio' textoAMostrar="Home"/>
          <NavEnlace enlace={cambiarPagina} irA='about' textoAMostrar="About Us"/>
          <NavEnlace enlace={cambiarPagina} irA='contact' textoAMostrar="Contact"/>
          <NavButton enlace={cambiarPagina} irA='registro' textoAMostrar="Crear cuenta" color="primario"/>
          <NavButton enlace={cambiarPagina} irA='login' textoAMostrar="Iniciar Sesión" color="secundario"/>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
