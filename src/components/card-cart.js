import styled from "@emotion/styled"
import { colors } from "../styles"
import QuantityButton from "./quantity-button"

const Wrapper = styled.div`
  width:100%;
  height:102px;
  background:${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;
`
const Img =styled.img`
  height:62px;
  width:62px;
  border-radius:50%;

`
const DivText = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  gap:8px;
`
const TextName = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color:${colors.black};
`
const TextPrice = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.orange["600"]};
`
const DivButton = styled.div`
  height:100%;
  display:flex;
  flex-direction:column-reverse;
`

export default function CartCard(product){
  return(
    <Wrapper>
      <div style={{display:"flex", gap:"20px"}}>
        <Img src={product.product.picture_url}/>
        <DivText>
          <TextName>{product.product.name}</TextName>
          <TextPrice>${product.product.price/100}</TextPrice>
        </DivText>
      </div>
      <DivButton>
        <QuantityButton product={product}/>
      </DivButton>
    </Wrapper>
  )
}