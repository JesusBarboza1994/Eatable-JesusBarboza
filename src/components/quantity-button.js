import styled from "@emotion/styled"
import { useEffect } from "react"
import { useAuth } from "../context/auth-context"
import { colors } from "../styles"

const Wrapper=styled.div`
  display:flex;
  gap:6px;
  width: 52px;
  height:20px;
  background:${colors.orange["600"]};
  border-radius: 30px;
  color:${colors.white};
  align-items:center;
  justify-content:center;
  cursor:pointer;
`
const Text = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
`
export default function QuantityButton({product}){
  const {items, setItems} = useAuth();
  const item = items.find(it => it.id === product.product.id);
  // console.log("el item",item)
  console.log("items", items)
  useEffect(()=>{
    sessionStorage.setItem("items",JSON.stringify(items))
  }, [items])

  function handleQuantity(event){
    console.log("itemsdos",items)
    console.log("product", product.product)
    if(event.target.id === "+"){
      setItems([...items.filter(it=> it.id !== product.product.id), 
        {id: item.id, quantity: item.quantity +1}] )
    }else{
      if(item.quantity === 1) return;
      setItems([...items.filter(it=> it.id !== product.product.id), 
        {id: item.id, quantity: item.quantity - 1}] ) 
    }
       
                                          
  }
  return(
    <Wrapper>
      <Text onClick={handleQuantity} id="-">-</Text>
      <Text >{items.find(it => it.id === product.product.id).quantity}</Text>
      <Text onClick={handleQuantity} id="+">+</Text>
    </Wrapper>
  )
}