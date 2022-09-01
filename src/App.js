import { BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Menu from './paginas/Menu';
import Detalles from './paginas/Detalles';
import Error404 from './paginas/Error404';
import Login from './paginas/Login';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path='/' element={<Menu/>}/>
        <Route path='/Detalles/:id' element={<Detalles/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;