import styled from "@emotion/styled"
import { colors } from "./styles"

const Wrapper = styled.div`
  height: 250px;
  width: 156px;
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Img = styled.img`
  border-radius: 50%;
  height: 130px;
  width: 130px;
  position: absolute;
  top: -20%; 
`
const TextName = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
`
const TextPrice = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${colors.orange["600"]};
`
const TextDiv = styled.div`
  display:flex;
  align-items:center;
  border-radius:30px;
  flex-direction:column-reverse;
  background: ${colors.white};
  height: 212px;
  width: 100%;
  gap:8px;
  padding-bottom:20px;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
`

export default function FoodCard({img, name, price}){

  return(
    <Wrapper>
      <TextDiv>
        <TextPrice>${price}</TextPrice>
        <TextName>{name.charAt(0).toUpperCase() + name.slice(1)}</TextName>
      </TextDiv>
      <Img src={img} alt={name}/>
    </Wrapper>
  )
}