import { Routes, Route } from "react-router-dom";

import Signin from "./pages/Signin/index"
import Login from "./pages/Login/index"
import Password from "./pages/Password/index"

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/password" element={<Password />} />
        </Routes>
    )
}
