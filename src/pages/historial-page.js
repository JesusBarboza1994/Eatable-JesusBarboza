import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import { getOrders } from "../services/orders-service"
import styled from "@emotion/styled"
import { colors } from "../styles"
import OrderDetail from "../components/order-detail"
import { useAuth } from "../context/auth-context"

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
  background:${colors.gray["100"]};
  padding: 50px;
  display:flex;
  height:900px;
  flex-direction:column;

`
const Container = styled.div`
  display: flex;
  flex-direction:column;
  gap:11px;
  height: 700px;
  overflow-y:scroll;
`

export default function HistorialPage(){
  const [orders, setOrders] = useState([])
  const {setPage} = useAuth()

  useEffect(()=>{
    getOrders().then(setOrders).catch(error=>console.log(error))
  },[])

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
      <Container>
        {orders.map(order=>{
          return(
            <OrderDetail order={order}/>
          )
        })}
      </Container>
    </Wrapper>
  )
}