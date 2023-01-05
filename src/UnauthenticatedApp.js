import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import Eatable from "./components/Eatable/eatable-img";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";
import { colors, typography } from "./styles";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./context/auth-context";

const Section = styled.div`
  margin: 96px auto;
`;
const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;
const ImageWrapper = styled.div`
  
  width: 414px;
  height: 382px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  display:flex;
  flex-direction:column-reverse;
  gap:120px;
  margin: auto;
`
const CustomLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  padding-bottom:12px;
`;
const LogSignDiv = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
`

function UnauthenticatedApp() {
  const [showLogin, setShowLogin] = useState("login");
  const {user} = useAuth()
  const navigate = useNavigate();
    

  function handleLinkLogin(event) {
    event.preventDefault();
    setShowLogin("login");
  }

  function handleLinkSignUp(event) {
    event.preventDefault();
    setShowLogin("signup");
  }

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

  // return (
  //   <Section>
  //     <Container>
  //       <ImageWrapper>
  //         <LogSignDiv>
  //           <CustomLink style={{borderBottom: showLogin === "login" ? `3px solid ${colors.orange["600"]}` : ""}}
  //                     onClick={handleLinkLogin}
  //                     >Login</CustomLink>
  //           <CustomLink style={{borderBottom: showLogin === "signup" ? `3px solid ${colors.orange["600"]}` : ""}}
  //                     onClick={handleLinkSignUp}
  //                     >Sign-up</CustomLink>
  //         </LogSignDiv>
  //         <Eatable/>
  //       </ImageWrapper>
        
  //       {showLogin === "login" ? <LoginForm /> : ""}
  //       {showLogin === "signup" ? <SignupForm /> : ""}
        
  //     </Container>
  //   </Section>
  // );
}

export default UnauthenticatedApp;

