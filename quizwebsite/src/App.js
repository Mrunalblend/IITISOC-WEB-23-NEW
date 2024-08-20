import React from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Quiznew from './pages/quiznew';
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  

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
      <Route path="/" element ={<Quiznew />} />
      
    </Routes> )
    
  
  
  
}
export default App;
