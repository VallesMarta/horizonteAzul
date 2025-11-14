import { FaUser, FaKey } from "react-icons/fa";

function FormLogin() {
  return (
   <form className="flex flex-col gap-4 bg-secundario p-10 rounded-3xl">
        <div className="flex flex-row justify-center items-center">       
            <FaUser className="mr-2 text-otro text-3xl" />
            <input type="text" name="username" id="username" className="bg-fondo rounded-lg p-3 w-80 text-secundario" placeholder="username" autoFocus="true"/>       
        </div>
        <div className="flex flex-row justify-center items-center">
            <FaKey className="mr-2 text-otro text-3xl" />
            <input type="password" name="password" id="password" className="bg-fondo rounded-lg p-3 w-80 text-secundario" placeholder="password"/>
        </div>
        <button type="submit" 
                className="bg-otro text-secundario font-bold rounded-2xl p-2 cursor-pointer transition-all duration-300 ease-in-out hover:bg-iconos hover:text-textoPrincipal hover:scale-105"
          >Acceder</button>
    </form>
  )
}

export default FormLogin
