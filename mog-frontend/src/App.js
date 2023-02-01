import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import ChangeNickname from "./pages/ChangeNickname";
import ChangeMessage from "./pages/ChangeMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/signup" exact={true} element={<Signup />} />
        <Route path="/user" exact={true} element={<Main />} />
        <Route path="/password" exact={true} element={<ChangePassword />} />
        <Route path="/nickname" exact={true} element={<ChangeNickname />} />
        <Route path="/message" exact={true} element={<ChangeMessage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
