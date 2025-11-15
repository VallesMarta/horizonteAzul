import NavEnlace from "./NavEnlace";
import NavButton from "./NavButton";
import { useEffect, useState } from "react";
import NavPerfil from "./NavPerfil";

function Header({cambiarPagina, usuarioLoggeado, setUsuarioLoggeado}) {
  // const [usuarioLoggeado, setUsuarioLoggeado] = useState(undefined);

  useEffect(() => {
    let existeUsuarioLoggeado = localStorage.getItem("username");
    setUsuarioLoggeado(existeUsuarioLoggeado);
  }, []);

  return (
    <header className="p-4 bg-primario text-white flex items-center justify-between">
      <img onClick={()=> cambiarPagina('inicio')} src="./src/assets/media/img/logo_empresa_header.png" alt="Logo de Horizonte Azul" className="h-20" />      
      <nav className="flex flex-row justify-center items-center">     
        {usuarioLoggeado != undefined && usuarioLoggeado != "admin"
          ? (
            <ul className="flex flex-row flex-wrap gap-5 items-center">
              <NavEnlace enlace={cambiarPagina} irA='reservas' textoAMostrar="Mis Reservas"/>
              <NavEnlace enlace={cambiarPagina} irA='carrito' textoAMostrar="Carrito"/>
              <NavButton enlace={cambiarPagina} irA='registro' textoAMostrar="Hola" color="primario"/>
              <NavPerfil username={usuarioLoggeado} setUsuarioLoggeado={setUsuarioLoggeado} />              
            </ul>
          ): (
            <ul className="flex flex-row flex-wrap gap-5 items-center">
              <NavEnlace enlace={cambiarPagina} irA='inicio' textoAMostrar="Home"/>
              <NavEnlace enlace={cambiarPagina} irA='about' textoAMostrar="About Us"/>
              <NavEnlace enlace={cambiarPagina} irA='contact' textoAMostrar="Contact"/>
              <NavButton enlace={cambiarPagina} irA='registro' textoAMostrar="Crear cuenta" color="primario"/>
              <NavButton enlace={cambiarPagina} irA='login' textoAMostrar="Iniciar Sesión" color="secundario"/>
            </ul>
          )         
         }

      </nav>
    </header>
  );
}

export default Header;
