//importamos los router dom
import { Route, Routes, Outlet } from "react-router-dom";
//importamos el header
import Header from "./modules/components/header.jsx";

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

//simulamos la crearecion de inicio
function Inicio() {
  return <h1>pagina de inicio</h1>;
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
      </Route>
    </Routes>
  );
}
//export default AppRoutes;
export default AppRoutes;
