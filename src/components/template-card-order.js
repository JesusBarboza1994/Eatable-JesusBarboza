import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { colors } from "../styles";
import Button from "./Button";
import CartCard from "./card-cart";
import { useAuth } from "../context/auth-context";

const DivBack = styled.div`
  display:flex;
  width:100%;
  margin-bottom:25px;
`

const Wrapper = styled.div`
  background:${colors.gray["100"]};
  padding: 50px;
  display:flex;
  height:900px;
  flex-direction:column;
  justify-content:space-between;
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
  display: flex;
  justify-content:space-between;
  margin-top:20px;
`
const TextTotal = styled.h1`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`
const Total = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
`
const UpDiv = styled.div`

`
const DownDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:35px;
`

export default function TemplateCardOrder({button, Container, title, handleFunction}){
  const {total, setPage} = useAuth();
  return(
    <Wrapper>
      <UpDiv>
        <DivBack>
          <Link style={{textAlign: "right"}} to="/home">
            <IoIosArrowBack onClick={()=>setPage("home")}/>
          </Link>
          <TextDiv>
            <Text>{title}</Text>
          </TextDiv>
        </DivBack>
        <Container/>
      </UpDiv>
      <DownDiv>
        <TotalDiv>
          <TextTotal>Total</TextTotal>
          <Total>${total}</Total>
        </TotalDiv>
        <Button onClick={handleFunction}>{button}</Button>
      </DownDiv>
    </Wrapper> 
  )
}