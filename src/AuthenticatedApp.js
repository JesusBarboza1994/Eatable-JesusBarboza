import styled from "@emotion/styled";
import { colors } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page"
import ProfilePage from "./pages/profile-page"
import HistorialPage from "./pages/historial-page"
import { useAuth } from "./context/auth-context";

const Container = styled.div`
display: grid;
grid-template-columns: 240px 1fr;
background-color: ${colors.gray[50]};
height: 100vh;
`;

const Navbar = styled.div``

export default function AuthenticatedApp(){
  const {user } = useAuth()
  return(
    
    <Container>
      <Navbar/>
        <Routes>
          {user ? <Route index element={<Navigate to="home" />} /> : null}
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/historial" element={<HistorialPage />} />
        </Routes>

    </Container>
  )
}