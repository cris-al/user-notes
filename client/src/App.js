import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import { privateRoutes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path={privateRoutes.HOME} element={<Home />} />
        <Route path={privateRoutes.LOGIN} element={<Login />} />
        <Route path={privateRoutes.REGISTER} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
