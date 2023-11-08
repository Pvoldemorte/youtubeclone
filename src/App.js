import './App.css';
import Home from "./Component/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      
     </Routes>
     <h1>Youtube Clone by chetan Patidar</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
