import { useState } from "react";
import { RiHistoryFill, RiHome2Fill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { colors } from "../styles";
import styled from "@emotion/styled";
import { useAuth } from "../context/auth-context";

const Wrapper = styled.div`
  display:flex;
  justify-content: space-between; 
  padding: 35px 50px;
`
const StyledLink = styled(Link)`
  scale:2;
  text-decoration:none;
  
`

export default function Navbar(){
  const {page, setPage} = useAuth();

  return(
    <Wrapper>
      <StyledLink to="/home">
        <RiHome2Fill
        onClick={()=> setPage("home") } 
        style={{
          color:`${page==="home" ? colors.orange["600"] : colors.gray["300"] }`
        }}
      />
      </StyledLink>
      <StyledLink to="/profile">
        <RiUser3Fill 
          onClick={()=> setPage("profile") } 
          style={{
            color:`${page==="profile" ? colors.orange["600"] : colors.gray["300"] }`
          }}
        />
      </StyledLink>
      <StyledLink to="/historial">
          <RiHistoryFill
            onClick={()=> setPage("historial") } 
            style={{
              color:`${page==="historial" ? colors.orange["600"] : colors.gray["300"] }`
            }}
          />
      </StyledLink>
    </Wrapper>
  )
}