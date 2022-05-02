import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/manageInventory' element={
          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>
        }></Route>
        <Route path='/addInventory' element={
          <RequiredAuth>
            <AddInventory></AddInventory>
          </RequiredAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
