import styled from "@emotion/styled";
import { colors } from "./styles";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page"
import ProfilePage from "./pages/profile-page"
import HistorialPage from "./pages/historial-page"
import { useAuth } from "./context/auth-context";
import { useEffect, useState } from "react";
import { getProducts } from "./services/products-service";
import Navbar from "./components/navbar";
import Food from "./components/food";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

const Container = styled.div`
background-color: ${colors.gray[100]};
width: 500px;

`;

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
`

export default function AuthenticatedApp(){
  const { user } = useAuth();
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getProducts().then(setProducts)
  },[])

  
  return(
    <Wrapper>
      <Container>
        <Routes>
          {user ? <Route index element={<Navigate to="home" />} /> : null}
          <Route path="/home" element={<HomePage products={products} />} />
          <Route path="/home/:id" element={<Food/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/historial" element={<HistorialPage />} />
        </Routes>
      </Container>
      <Navbar/>
    </Wrapper>

  )
}