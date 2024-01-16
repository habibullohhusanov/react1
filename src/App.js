import './style/App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/UI/jsx/navbar';
import AppRoute from './route/route';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [])
  return (
    <AuthContext.Provider value={{isAuth, setIsAuth, isLoading}}>
      <BrowserRouter>
        <Navbar />
        <AppRoute />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
