import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTodo from './components/Dashboard/AddTodo';
import AllTodos from './components/Dashboard/AllTodos';
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import ManageProfile from './components/ManageProfile/ManageProfile';

import Footer from './components/SharedPage/Footer';
import Header from './components/SharedPage/Header';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/SharedPage/RequireAuth';
import NotFound from './components/SharedPage/NotFound';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard>
        </Dashboard>}>
          <Route index path='/dashboard' element={<AddTodo></AddTodo>}></Route>
          <Route path='/dashboard/allTodos' element={<AllTodos></AllTodos>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/profile' element={
          <RequireAuth>
            <ManageProfile></ManageProfile>
          </RequireAuth>}>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
