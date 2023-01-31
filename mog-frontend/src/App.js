import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
