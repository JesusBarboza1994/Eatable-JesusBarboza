import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { useAuth } from "../context/auth-context";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height:835px;
  align-items: center;
  justify-content:center;
`
const TextBig = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
`
const Container = styled.div`
  display:flex;
  width:100%;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap:50px;
`


export default function EmptySearch(){
  const {setPage} = useAuth();
  return(
    <Wrapper>
      <Container>
        <BiSearch style={{height:200, width:200}} />
        <TextBig>No products found</TextBig>
      </Container>
    </Wrapper>
  )
}