import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import NotFound from './Pages/NotFound/NotFound';
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
        {/* <Route path='/inventory/:id' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route> */}
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}

    </div>
  );
}

export default App;
