import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Editor from "./Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editor" element={<Editor />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
