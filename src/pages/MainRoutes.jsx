import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LoginSignup } from "./LoginSignup";

export function MainRoutes(){

    return <Routes>
         <Route path="/" element={ <Home /> } />
         <Route path="/loginSignup" element={ <LoginSignup /> } />
    </Routes>
}