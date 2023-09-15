import { Outlet, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  const shouldShowFooter = location.pathname === '/seguros' || location.pathname === '/vistoria';


  const shouldUseApp2CSS = location.pathname === '/integrantes' || location.pathname === '/login';

  return (
    <>
      {shouldUseApp2CSS ? (
        <link rel="stylesheet" type="text/css" href="src\App2.css" />
      ) : (
        <link rel="stylesheet" type="text/css" href="src\App.css" />
      )}
      <Menu />
      <Outlet />
      {shouldShowFooter && <Footer />} 
    </>
  );
}

export default App;
