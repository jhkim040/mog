import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import HttpHeadersProviders from "./components/context/HttpHeadersProviders";
import NicknameProvider from "./components/context/NicknameProvider";
import EmailProvider from "./components/context/EmailProvider";

function App() {
  return (
    <BrowserRouter>
      <EmailProvider>
        <HttpHeadersProviders>
          <NicknameProvider>
            <Routes>
              <Route path="/" exact={true} element={<Login />} />
              <Route path="/user" exact={true} element={<Main />} />
            </Routes>
          </NicknameProvider>
        </HttpHeadersProviders>
      </EmailProvider>
    </BrowserRouter>
  );
}

export default App;
