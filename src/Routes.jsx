//importamos los router dom
import { Route, Routes, Outlet } from "react-router-dom";
//importamos el header
import Header from "./modules/components/header.jsx";
//importamo inicio
import Inicio from "./modules/Inicio/Inicio.jsx";
//creremos el layout
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

//simulamos la crearecion de nosotros
function Nosotros() {
  return <h1>pagina de nosotros</h1>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="menu" element={<h1>pagina de menu</h1>} />
      </Route>
    </Routes>
  );
}
//export default AppRoutes;
export default AppRoutes;
