import { useAuth } from "../context/auth-context"
import styled from "@emotion/styled"
import { colors } from "../styles"
import Button from "./Button.js"
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width:100%;
  height:1000px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding: 50px 50px 50px 50px;
`
const TextName = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color:${colors.black};
`
const TextPrice = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.orange["600"]};
  margin-bottom: 27px;
`
const Img = styled.img`
  border-radius: 50%;
  height: 241px;
  width:241px;
  margin-bottom:80px;
`
const Text = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`
const DescDiv = styled.div`
  
`
const TextDescrip = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
const DivBack = styled.div`
  display:flex;
  width:100%;
  justify-content:flex-start;
  margin-bottom:25px;
`
const UpDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  width:100%;
  justify-content:space-between;
`
const MiddleDiv = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
  gap:10px;
`

export default function Food(){
  const { items, setItems, actualProduct, setCart, cart} = useAuth();
  const [isAdd, setIsAdd] = useState((JSON.parse(sessionStorage.getItem("cart")) || [])
                              .filter(product=>product.id === actualProduct.id).length === 0);
  
  function handleAdded(event){
    event.preventDefault();
    // setActualProduct({...actualProduct, "quantity": 1})
    if(JSON.parse(sessionStorage.getItem("cart")).filter(product=>product.id === actualProduct.id).length === 0){
      setCart([...cart, actualProduct]) 
      setItems([...items, {id:actualProduct.id, quantity: 1}])
    }else{
      setCart(cart.filter(product=> product.id !== actualProduct.id));
      setItems(items.filter(product=> product.id !== actualProduct.id))
    } 
    setIsAdd(!isAdd);
    
  }

  useEffect(()=>{
    sessionStorage.setItem("cart",JSON.stringify(cart) )
  }, [cart])
  useEffect(()=>{
    sessionStorage.setItem("items",JSON.stringify(items) )
  }, [items])

  return(
    <Wrapper>
      <UpDiv>
        <DivBack>
          <Link to="/home">
            <IoIosArrowBack />
          </Link>
        </DivBack>
        <Img src={actualProduct.picture_url} alt={actualProduct.name}/>
        <MiddleDiv>
          <TextName>{actualProduct.name.charAt(0).toUpperCase() + actualProduct.name.slice(1)}</TextName>
          <TextPrice>${actualProduct.price/100}</TextPrice>
          <DescDiv>
            <Text>Description</Text>
            <TextDescrip>{actualProduct.description}</TextDescrip>
          </DescDiv>
        </MiddleDiv>
      </UpDiv>
      <Button onClick={handleAdded} select={!isAdd} >{isAdd ? "Add to Cart" : "Added to cart"}</Button>
    </Wrapper>
    
  )
}