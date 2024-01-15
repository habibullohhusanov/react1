import './style/App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/UI/jsx/navbar';
import AppRoute from './route/route';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
