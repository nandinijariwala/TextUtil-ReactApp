// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";
import About from "./components/About";
import {BrowserRouter as Router, 
//  // Switch, 
  Route, 
//  // Link,
  Routes} from "react-router-dom";

// import { type } from "@testing-library/user-event/dist/type";


// let name="Harry";

function App() {

  const [mode,setMode] = useState('light');//state varibale whether dark mode is enable or not.
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#000f37';
      showAlert("Dark mode is enable.", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable.", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alerts alert={alert}/> 
       <div className="container my-3">
       <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}/>
       <Route exact path="/about" element={<About mode={mode}/>}/>
    </Routes>
    </div>
      </Router>
    </>
  );
}

export default App;
