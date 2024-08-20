import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import LISTOFTOPICSPAGEFORCHEM from "./pages/l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-c-h-e-m";
import LISTOFTOPICSPAGEFORMATHS from "./pages/l-i-s-t-o-f-t-o-p-i-c-s-p-a-g-e-f-o-r-m-a-t-h-s";
import FrameComponent from "./pages/frame-component";
import { useEffect } from "react";
import ProfilePage from "./pages/prof/ProfilePage"
import LoginPage11 from "./pages/loginp/LoginPage11";
import Homepage from "./pages/home/HomePage";


import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login"
import {Register} from "./Register"
 
  
    
      

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [currentForm, setCurrentForm] = useState('login')
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/list-of-topics-page-for-chem":
        title = "";
        metaDescription = "";
        break;
      case "/list-of-topics-page-for-maths":
        title = "";
        metaDescription = "";
        break;
      case "/frame-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (

    <Routes>
      <Route path="/loginp" element ={<LoginPage11 />} />
       <Route path="/profilep" element={<ProfilePage/>}/>
      <Route path="/home" element={<Homepage />} />
    
      <Route path="/list-of-topics-page-for-chem"
        element={<LISTOFTOPICSPAGEFORCHEM />}
      />
      
      <Route
        path="/list-of-topics-page-for-maths"
        element={<LISTOFTOPICSPAGEFORMATHS />}
      />
      <Route path="/frame-6" element={<FrameComponent />} />
    </Routes> )
      (
      <div className="App">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
        
      </div>
    );
  
  
  
}
export default App;
