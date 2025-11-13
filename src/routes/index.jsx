import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import Camisas from "../pages/Camisas";
import Calcas from "../pages/Calcas";
import Casacos from "../pages/Casaco";
import ProductDetail from "../pages/ProductDetail";
import { UserLayout } from "../layout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/camisas" element={<Camisas />} />
                <Route path="/calcas" element={<Calcas />} />
                <Route path="/casacos" element={<Casacos />} />
            </Route>
            <Route path="/product-detail" element={<ProductDetail />} />
        </Routes>
    )
}

export default Router