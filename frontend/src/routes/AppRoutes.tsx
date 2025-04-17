import { Routes, Route } from 'react-router-dom';
import PaginaPrincipal from './../pages/PaginaPrincipal';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PaginaPrincipal />} />
    </Routes>
  );
};

export default AppRoutes;