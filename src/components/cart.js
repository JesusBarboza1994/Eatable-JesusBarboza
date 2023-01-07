import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import CartCard from "./card-cart";
import { colors } from "../styles";
import { useAuth } from "../context/auth-context";
import Button from "./Button";

const DivBack = styled.div`
display:flex;
width:100%;
margin-bottom:25px;
`
const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`
const Wrapper = styled.div`
  background:${colors.gray["100"]};
  padding: 50px;
  min-height:800px;
`
const TextDiv = styled.div`
  text-align:center;
  width:100%;
`
const Text = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
`
const TotalDiv = styled.div`

`
const TextTotal = styled.h1`

`
const Total = styled.h1`

`
const UpDiv = styled.div`

`
const DownDiv = styled.div`

`

export default function Cart(){
  const products = JSON.parse(sessionStorage.getItem("cart"));

  return(
    <Wrapper>
      <UpDiv>
        <DivBack>
          <Link style={{textAlign: "right"}} to="/home">
            <IoIosArrowBack />
          </Link>
          <TextDiv>
            <Text>Cart</Text>
          </TextDiv>
        </DivBack>
        <Container>
          {products.map((product, index)=>{
            return <CartCard key={index} product={product} />
          })}
        </Container>
      </UpDiv>
      <DownDiv>
        <TotalDiv>
          <TextTotal>Total</TextTotal>
          <Total>${}</Total>
        </TotalDiv>
        <Button>Checkout</Button>
      </DownDiv>
    </Wrapper> 
    )
}