import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import NotesForm from "components/NotesForm/NotesForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { privateRoutes } from "./routes/routes";
import "./App.css";
import Notes from "components/Notes/Notes";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path={privateRoutes.HOME} element={<Home />} />
        <Route path={privateRoutes.LOGIN} element={<Login />} />
        <Route path={privateRoutes.REGISTER} element={<Register />} />
        <Route path={privateRoutes.NOTES} element={<Notes />} />
        <Route path={privateRoutes.CREATEFORM} element={<NotesForm />} />
        <Route path={privateRoutes.EDITFORMWITHID} element={<NotesForm />} />
      </Routes>
    </div>
  );
}

export default App;
