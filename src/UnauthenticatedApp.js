import { useEffect } from "react";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import {  Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth-context";

function UnauthenticatedApp() {
  const {user} = useAuth()
  const navigate = useNavigate();
    
  useEffect(() => {
    if(user) navigate("/home")
  
  }, )

  return(
      <Routes>
        {!user ? <Route index element={<Navigate to="login" />} /> : null}
        {/* <Route index element={<Navigate to="login" />} /> */}
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>

  )
}

export default UnauthenticatedApp;

