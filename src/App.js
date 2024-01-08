import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Index from './Components/Category/Index'
import Create from './Components/Category/Create';
import Edit from './Components/Category/Edit';
import Delete from './Components/Category/Delete'
import { BrowserRouter as Router, Routes,Route, Link, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Details from './Components/Home/Details';
import Product from './Components/Product/Product';
import Createp from './Components/Product/CreateP';
import EditP from './Components/Product/EditP';
import Company from './Components/Company/Company';
import CreateC from './Components/Company/CreateC';
import Home from './Components/Home/Home';
import Admin from './Components/Home/Admin';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';

import cart from './Components/Cart/cart';
import Adminhome from './Components/Home/Adminhome';



function App() {
  

  return (
    <div className='App'>
      {/* <Navbar></Navbar> */}


    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navbar />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path='/home/details/:id' element={<Details />}></Route>
        <Route path='/adminhome' element={<Adminhome />}></Route>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/register" element={<RegisterForm />}></Route>
         <Route path='/category/index' element={<Index></Index>}></Route>
         <Route path='/category/create' element={<Create></Create>}></Route>
         <Route path='/category/edit/:id' element={<Edit></Edit>}></Route>
         <Route path='/category/delete' element={<Delete></Delete>}></Route>
         <Route path='/product/index' element={<Product></Product>}></Route>
         <Route path='/product/create' element={<Createp></Createp>}></Route>
         <Route path='/product/edit' element={<EditP></EditP>}></Route>
         <Route path='/company/index' element={<Company></Company>}></Route>
         <Route path='/company/create' element={<CreateC></CreateC>}></Route>

         <Route path='/admin' element={<Admin></Admin>}></Route>

      </Routes>
    </BrowserRouter>
    
    </div>
  );
};

export default App;
