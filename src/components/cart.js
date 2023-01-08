import styled from "@emotion/styled"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import CartCard from "./card-cart";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useAuth } from "../context/auth-context";
import Button from "./Button";
import TemplateCardOrder from "./template-card-order"
import EmptyPage from "./empty-cart";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  height:600px;
  overflow-y:scroll;
`

export default function Cart(){
  const products = JSON.parse(sessionStorage.getItem("cart"));
  const {items, setTotal} = useAuth();

  const ContainerProducts = () =>{
    return (
      <Container>
          {products.map((product, index)=>{
            return <CartCard key={index} product={product} />
          })}
      </Container>
    )
  }

  const navigate = useNavigate();
  useEffect(()=>{
    const updatetotal = items.reduce((
      acc, item)=> acc + item.quantity * products.find(product=> product.id === item.id).price/100 ,0)
    setTotal(updatetotal)
  },[items])

  function handleCheckout(event){
    event.preventDefault();
    navigate("/checkout")
  }
  return(
    <>
      { (products.length==0) ? <EmptyPage title={"Cart"} description={"No items in the cart"} /> :
    <TemplateCardOrder button={"Checkout"} Container={ContainerProducts} products={products} title={"Cart"} handleFunction={handleCheckout}/>
  }
    </>
  ) 
}