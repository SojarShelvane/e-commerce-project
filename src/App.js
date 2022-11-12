import React from 'react';
//import { Button } from 'react-bootstrap';
//import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import About from './components/navbar/Header/aboutUs/About';
import Navbarmenu from './components/navbar/Navbarmenu';
//import { updateActiveValue, updateMsg } from './features/counter/homeSlice';
//import { getUsers, storeUserDtl } from './features/counter/UserSlice';
//import axios from "axios";
import Contact from './components/navbar/Header/contact/Contact';
import Beds from './components/navbar/Header/home/homeFurnishing/Beds'
function App() {

  /* const {items, isActive, msg} = useSelector((state)=>state.homeState);

  const dispatch = useDispatch();

  const loadUsers = async () => {
     
    //fetch all user details
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    if(resp){
      console.log('res',resp.data)
      dispatch(getUsers(resp.data))
    }
}

const loadUsersDtl = async () => {
   //fetch all user details
  const resp = await axios.get('https://jsonplaceholder.typicode.com/users/4');
  if(resp){
    console.log('res',resp.data)
    dispatch(storeUserDtl(resp.data))
  }
}

  React.useEffect(()=>{
    loadUsers();
    dispatch(updateActiveValue())
  },[])

  const loadMsg = () => {
    let loggedInUser = {
      id:464,
      fname:'SOnar ',
      lname:'marry ',
      email:'son@gmail.colm',
      gender:'malie'
    };
    dispatch(updateMsg(loggedInUser))
  }
 */
  

  return (
    <div className="App">
           {/* <Button onClick={()=>loadMsg()}>Login User</Button>
           <Button onClick={()=>loadUsersDtl()}>User Dtl</Button>
           Title: {msg} */}
         <Navbarmenu/>
          <Beds/><br/>
          <About/>
          <br/> <br/>
          <Contact/>
     
    </div>
  );
}

export default App;
