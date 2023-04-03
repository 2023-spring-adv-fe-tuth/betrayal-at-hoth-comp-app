import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./Home";
import { Setup } from "./Setup";
import { Results } from "./Results";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/setup' element={<Setup/>}/>
          <Route path='/results' element={<Results/>}/>
        </Routes>
      </HashRouter>    
    </div>
  );
}

export default App;
