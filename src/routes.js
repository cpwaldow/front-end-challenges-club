import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/emailsignup' element={<h1>emailsignup</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
