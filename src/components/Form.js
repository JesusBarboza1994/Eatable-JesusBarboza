import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/session-service";
import { colors } from "../styles";
import Button from "./Button";
import Eatable from "./Eatable/eatable-img";
import Input from "./Input";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%
  min-width: 258px;
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
const LogSignDiv = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration:none;
  padding-bottom: 12px;
  color :${colors.black};
  font-weight: 600;
`

export default function Form({type, form, handleSubmit, handleFormChange}){

  return(
    <>
          <ImageWrapper>
            <LogSignDiv>
              <StyledLink to="/login"
                    style={{borderBottom: type === "Login" ? `3px solid ${colors.orange["600"]}` : "", 
                            }}>Login</StyledLink>
              <StyledLink to="/signup"
                    style={{borderBottom: type === "Sign Up" ? `3px solid ${colors.orange["600"]}` : "", 
                            }}>Sign-up</StyledLink>
           </LogSignDiv>
           <Eatable/>
         </ImageWrapper>

        <StyledForm onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email address"
            type="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={handleFormChange}
            />
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="******"
            value={form.password}
            onChange={handleFormChange}
            
            />
          <Button type="primary">
            {type}
          </Button>
        </StyledForm>
    </>

);
}