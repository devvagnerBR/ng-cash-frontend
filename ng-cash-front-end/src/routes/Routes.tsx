import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";



const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router
