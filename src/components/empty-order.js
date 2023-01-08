import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import styled from "@emotion/styled";
import { RiCalendarLine, RiShoppingCart2Line } from "react-icons/ri";
import { useAuth } from "../context/auth-context";

const DivBack = styled.div`
  display:flex;
  width:100%;
  margin-bottom:25px;
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
const Wrapper = styled.div`
  padding: 50px;
  height:900px;
`
const TextBig = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`
const DivFill = styled.div`
  widht:100%;
  display:flex;
  margin-top:250px;
  justify-content:center;
`

export default function EmptyOrder(){
  const {setPage} = useAuth();
  return(
    <Wrapper>
      <DivBack>
        <Link style={{textAlign: "right"}} to="/home">
          <IoIosArrowBack onClick={()=>setPage("home")}/>
        </Link>
        <TextDiv>
          <Text>History</Text>
        </TextDiv>
      </DivBack>
      <DivFill>
        <RiCalendarLine style={{height:200, width:200}} />
      </DivFill>
      
      <TextBig>No history yet</TextBig>
    </Wrapper>
  )
}