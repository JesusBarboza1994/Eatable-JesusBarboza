import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { colors } from "../styles";

const Wrapper = styled.div`
  width:100%;
  background: ${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 25px 36px 6px 30px;
`
const TextDate = styled.h1`
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`
const TotalDiv = styled.div`
  display:flex;
  justify-content:space-between;
`
const TextItems = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
const TextTotal = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.orange["600"]};
`
const ArrowDiv = styled.div`
  display:flex;
  justify-content: flex-end;
`
const SubTotalDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:3px;
  border-bottom: 1px solid ${colors.gray["200"]};
  padding-bottom:9px;
  padding-top: 13px;
`
const SubTotalTitle = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  
`
const ItemDiv = styled.div`
  display:flex;
  justify-content:space-between;
`
const TextItem = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`
const DeliveryDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:3px;
  padding-bottom:9px;
  padding-top: 13px;
`

export default function OrderDetail({order}){
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = new Date(order.created_at).toLocaleDateString('en-US', options);
  const [showDiv, setShowDiv] = useState(false)

  function showSubTotal(event){
    event.preventDefault();
    setShowDiv(!showDiv);
  }

  return(
    <Wrapper>
      <TextDate>{formattedDate}</TextDate>
      <TotalDiv>
        <TextItems>{order.order_details.length === 1 ? "1 item" : `${order.order_details.length} items`}</TextItems>
        <TextTotal>${order.total/100}</TextTotal>
      </TotalDiv>
      {!showDiv ? 
      <div>
        <SubTotalDiv>
          <SubTotalTitle>Order</SubTotalTitle>
          {order.order_details.map(item =>{
            return(
              <ItemDiv>
                <TextItem>{item.quantity} - {item.product_name}</TextItem>
                <TextItem>${item.subtotal/100}</TextItem>
              </ItemDiv>
            )
          })}
        </SubTotalDiv>
        <DeliveryDiv>
          <SubTotalTitle>Delivery</SubTotalTitle>
          <TextItem>{order.delivery_address}</TextItem>
        </DeliveryDiv>
        <ArrowDiv>
          <IoIosArrowUp onClick={showSubTotal}/>
        </ArrowDiv>
      </div> : null}
      {showDiv ? 
      <ArrowDiv>
        <IoIosArrowDown onClick={showSubTotal}/>
      </ArrowDiv> : null}
    </Wrapper>
  )
}