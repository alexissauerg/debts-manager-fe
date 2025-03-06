import { Button, Input } from "@material-tailwind/react";
import logo from "@/assets/images/fullLogo.png";
import Box from "@/components/Box";
const Login = () => {
    return (
        <div className="bg-steelBlue grid grid-cols-1 lg:grid-cols-2 h-screen">
            <div className=" hidden lg:flex items-center justify-center">
                <img src={logo} alt="logo" className="w-1/2 rounded-lg shadow-md"/>
            </div>
            <div className="flex items-center justify-center p-16 ">
                <Box className="flex flex-col gap-4 p-10">
                    <h1 className="text-4xl font-bold mt-3">Iniciar Sesión</h1>
                    <form>
                        <div className="flex flex-col gap-y-5">
                            <Input label="Nombre de usuario" />
                            <Input label="Contraseña" type="password"/>
                            <div className="flex justify-end">
                                <Button className="bg-skyBlue-dark text-white capitalize mt-3 w-1/3">Iniciar Sesión</Button>
                            </div>
                        </div>
                        
                    </form>
                </Box>
            </div>
        </div>
    )
};

export default Login;