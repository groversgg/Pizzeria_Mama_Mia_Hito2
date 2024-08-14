import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import React, {useState} from "react";
import Login from "./components/Login/Login";

//Se debe comentar y descomentar Register y Login por separado para ver su funcionalidad.


function App() {
  const [email, setEmail] = useState ("")
  const [password1, setPassword1] = useState ("")
  const [password2, setPassword2] = useState("")
  

  return (
    <>
      
      <Navbar />
      {/*<Home />*/} 

      <Register
        email = {email}
        setEmail = {setEmail}
        password1 = {password1}
        setPassword1 = {setPassword1}
        password2 = {password2}
        setPassword2 = {setPassword2}
      />

      {/*<Login 
        email = {email}
        setEmail = {setEmail}
        password1 = {password1}
        setPassword1 = {setPassword1}
      />*/}
      <Footer />


    </>
  )
}

export default App
