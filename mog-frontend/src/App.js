import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from "./pages/Signup";
import ChangePassword from "./pages/ChangePassword";
import ChangeNickname from "./pages/ChangeNickname";
import ChangeMessage from "./pages/ChangeMessage";
import MainTest from "./pages/MainTest";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/signup" exact={true} element={<Signup />} />
        <Route path="/main" exact={true} element={<Main />} />
        <Route path="/password" exact={true} element={<ChangePassword />} />
        <Route path="/nickname" exact={true} element={<ChangeNickname />} />
        <Route path="/message" exact={true} element={<ChangeMessage />} />

        <Route path="/user" exact={true} element={<MainTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
