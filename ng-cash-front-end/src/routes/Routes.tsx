import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";




const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="conta/*" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router
