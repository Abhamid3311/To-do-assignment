import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Todos from './components/Dashboard/Todos';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import ManageProfile from './components/ManageProfile/ManageProfile';
import Footer from './components/SharedPage/Footer';
import Header from './components/SharedPage/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Todos></Todos>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/todos' element={<Todos></Todos>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/profile' element={<ManageProfile></ManageProfile>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
