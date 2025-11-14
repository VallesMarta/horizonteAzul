import FormLogin from "./FormLogin";

function Login() {
  return (
    <>
        <h1 className='text-secundario m-6 text-center text-4xl font-bold'>Login</h1>
        <div className="flex flex-row justify-between items-center gap-40 mx-60 p-4 rounded-3xl">
            <div>
                <img 
                    src="./src/assets/media/img/imf-login.png" 
                    alt="" 
                    className="rounded-[13px] h-150" 
                />
            </div>
            <div className="flex flex-col justify-center items-center">
                <img 
                    src="./src/assets/media/img/logo_form_login.jpg" 
                    alt="" 
                    className="rounded-[13px] w-[50%]" 
                />
                <FormLogin />
            </div>
        </div>
    </>
  )
}

export default Login;
