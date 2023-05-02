// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Routes,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Descobrir from './components/Descobrir';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Home />} />
        {/* Componente de uma rota específica */}
        <Route path="descobrir" element={<Descobrir />} />
      </Routes>
    </div>
  );
}

export default App;
