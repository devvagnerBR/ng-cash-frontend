import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import Homepage from "../pages/homepage/Homepage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import useProtectedPage from './../hooks/useProtectedPage';



const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="conta/*" element={<Homepage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router
