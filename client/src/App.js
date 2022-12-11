import { Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Register from './components/register/Register';
import { privateRoutes } from './routes/routes';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path='/' element={ <Main />}/>
      <Route path={privateRoutes.HOME} element={ <Home />}/>
      <Route path={privateRoutes.LOGIN} element={ <Login />}/>
      <Route path={privateRoutes.REGISTER} element={ <Register />}/>
    </Routes>
    </>
  );
}

export default App;
