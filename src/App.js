// import modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import css
import './App.css';
// import files/Components
import Create from './components/Create';
import Read from "./components/Read";
import Update from "./components/Update"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Create />}/>
       <Route path="/read" element={<Read/>}/>
       <Route path="/update" element={<Update/>}/>
    </Routes>  
    </BrowserRouter>
    </>
        
  );
}

export default App;
