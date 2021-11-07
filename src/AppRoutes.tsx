import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraUi, FluentUi, Home, MateriaUi } from './pages';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="material-ui" element={<MateriaUi />} />
        <Route path="fluent-ui" element={<FluentUi />} />
        <Route path="chakra-ui" element={<ChakraUi />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
