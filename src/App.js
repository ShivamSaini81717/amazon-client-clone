
import './App.css';
import { Signin } from './components/account/Signin';
import { Signup } from './components/account/Signup';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Header/Navbar';
import { MainCom } from './components/Home/MainCom';
import { NewNav } from './components/newnav/NewNav';
import { Routes, Route } from "react-router-dom";
import { Cart } from './components/cart/Cart';
import { BuyNow } from './components/buypage/BuyNow';
import {Account} from "./components/account/Account.js"
import CircularProgress from '@mui/material/CircularProgress';
import { DashBoard } from './components/account/DashBoard.js';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
  setData(true);
    },500)
  })
  return (
    <>
    {
      data ?(
        <>
        <Navbar/>
<NewNav/>
      <Routes>
              <Route path='/' element={<MainCom/>}/>
              <Route path="/signup" element={ <Signup />}/>
              <Route path="/login" element={ <Signin />}/>
              <Route path="/getproductsone/:id" element={ <Cart/>}/>  
              <Route path="/buynow" element={ <BuyNow/>}/> 
              <Route path="/account" element={ <Account/>}/>
              <Route path="/dashboard" element={<DashBoard/>}/>
      </Routes>

<Footer/>
        </>
      ):<div className='circle'>
          
   <CircularProgress/>
   <h2>Loading............</h2>
      </div>
    }

    </>

  );
}

export default App;
