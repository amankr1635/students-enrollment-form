import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsInfo from "./Components/StudentsInfo"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" element={<StudentsInfo/>}/>      
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
