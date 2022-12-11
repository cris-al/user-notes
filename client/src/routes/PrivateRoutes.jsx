import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import { privateRoutes } from "./routes";

export default function PrivateRoutes(){

    return(
        <Routes>
            <Header />
            <Route path={privateRoutes.HOME} element={<Home />}/>
            <Route path={privateRoutes.LOGIN} element={<Login />}/>
            <Route path={privateRoutes.REGISTER} element={<Register />}/>
        </Routes> 
    )
}