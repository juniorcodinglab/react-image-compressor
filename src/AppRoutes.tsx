import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Aplicação Base</h1>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;