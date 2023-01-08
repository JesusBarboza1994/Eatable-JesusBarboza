import styled from "@emotion/styled";
import TemplateCardOrder from "./template-card-order";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../services/users-service";
import { createOrder } from "../services/orders-service";
import { useNavigate } from "react-router-dom";

const UserDiv = styled.div`
  width:100%;
  background:${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 25px 30px;
`
const Input = styled.input`
  border: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  width:100%;
  border-bottom:1px solid ${colors.gray["300"]};
  margin-bottom:15px;
  &:focus{
    border-bottom:1px solid ${colors.gray["300"]};
    outline:0;
  }
`
const InputName = styled.input`
  border: none;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  width:100%;
  border-bottom:1px solid ${colors.gray["300"]};   
  margin-bottom:15px;
  &:focus{
    border-bottom:1px solid ${colors.gray["300"]};
    outline:0;
  }
`
const TextAddress = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`
const TextChange = styled.h1`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.orange["600"]};
`
const TextDiv = styled.div`
  display:flex;
  justify-content:space-between;
`
const TextDelivery = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
`
const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  gap:17px;
`
const UpDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:30px;
`

export default function Checkout(){
  const {user, setUser} = useAuth();
  const [upUser, setUpUser] = useState(user);
  const { items } = useAuth();
  const navigate = useNavigate();
  
  function Delivery(){
    return(
      <Wrapper>
        <UpDiv>
          <TextDelivery>Delivery</TextDelivery>
          <TextDiv>
            <TextAddress>Address details</TextAddress>
            <TextChange onClick={handleChangeUser}>change</TextChange>
          </TextDiv>
        </UpDiv>
        <UserDiv>
          <InputName type="text" onChange={handleChange} name="name" value={upUser.name }/>
          <Input type="text" onChange={handleChange} name="address" value={upUser.address }/>
          <Input type="text" onChange={handleChange} name="phone" value={upUser.phone}/>
        </UserDiv>
      </Wrapper>
    )
  }

  useEffect(()=>{
    getUser()
      .then(setUser)
      .catch((error) => console.log(error));
  }, [user])

  function handleChange(event){
    event.preventDefault();
    const {name, value} = event.target
    setUpUser({...upUser, [name]: value})
  }

  function handleChangeUser(event){
    event.preventDefault();
    console.log("Actualizado");
    setUser(upUser);
    updateUser(upUser).then(response=>{
      setUser(response)
    })
  }

  function handleOrder(event){
    event.preventDefault();
    createOrder({
      delivery_address: user.address,
      items: items
    }).then(console.log).catch(console.log())
    navigate("/historial");
  }

  return(
    <TemplateCardOrder button={"Complete Order"}
                       Container={Delivery}
                       title={"Checkout"}
                       handleFunction={handleOrder} />
    )
}