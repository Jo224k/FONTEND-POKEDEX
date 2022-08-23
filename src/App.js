import { BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Menu from './paginas/Menu';
import Detalles from './paginas/Detalles';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/Detalles/:id' element={<Detalles/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;