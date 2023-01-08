import styled from "@emotion/styled";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/auth-context";
import { colors } from "../styles";

// import { updateUser } from "../services/users-service";

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
text-align:center;
`
const UpDiv = styled.div`

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
const TextDelivery = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
`
const TitleDiv = styled.div`
  display:flex;
  justify-content:space-between;
  margin-bottom:9px;
`
const DataDiv = styled.div`
  width:100%;
  background: ${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 18px 28px 46px 14px;
  display:flex;
  flex-direction:column;
  gap:10px;
`
const TextName = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`
const TextData = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.gray["400"]};
  padding-bottom:10px;
  
`
const HistoryDiv = styled.div`
  display:flex;
  justify-content:space-between;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  background: ${colors.white};
  padding:19px;
  margin-top:45px;
`
const TextHistory = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
`
const InputDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap:5px;
  padding: 12px 15px;
  background: ${colors.white};
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
`
const InputData = styled.input`
  border:none;
  border-bottom: 1px solid ${colors.black};
  margin-bottom:8px;
`

export default function ProfilePage(){
  const {logout, user, setPage, upDateUser } = useAuth();
  const [upUser, setUpUser] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",

  })
  const navigate = useNavigate();
  const [change, setChange] = useState(false)
  function handleChangeUser(event){
    setChange(!change)
  }

  function handleButton(event){
    if(change){
      console.log(upUser)
      upDateUser(upUser)
    }else{
      logout().then(console.log);
      sessionStorage.removeItem("cart");
      sessionStorage.removeItem("items");
      navigate("/login");
      setPage("home");
    }

  }

  function moveHistorial(event){
    navigate("/historial");
    setPage("historial");
  }
  function handleChangeInput(event){
    event.preventDefault();
    const {name, value} = event.target;
    setUpUser({...upUser, [name]: value})
  }

  return(
    <Wrapper>
      <UpDiv>
        <DivBack>
          <Link style={{textAlign: "right"}} to="/home">
            <IoIosArrowBack onClick={()=>setPage("home")}/>
          </Link>
          <TextDiv>
            <Text>My Profile</Text>
          </TextDiv>
        </DivBack>
        <UpDiv>
          <TitleDiv>
            <TextAddress>{ change ? "Update personal details" :"Personal Details"}</TextAddress>
            {change ? "" : <TextChange onClick={handleChangeUser}>change</TextChange>}
          </TitleDiv>
        </UpDiv>
          
        {change ? 
        <>
        <InputDiv>
          <TextData>Name</TextData>
          <InputData onChange={handleChangeInput} name="name" value={upUser.name}/>
          <TextData>Email</TextData>
          <InputData onChange={handleChangeInput} name="email" value={upUser.email}/>
          <TextData>Phone</TextData>
          <InputData onChange={handleChangeInput} name="phone"  value={upUser.phone}/>
          <TextData>Address</TextData>
          <InputData onChange={handleChangeInput} name="address" value={upUser.address}/>
        </InputDiv>
        
        </>
          
        : 
        <>
          <DataDiv>
            <TextName>{user.name }</TextName>
            <TextData>{user.email}</TextData>
            <TextData>{user.phone }</TextData>
            <TextData>{user.address }</TextData>
          </DataDiv>
          <HistoryDiv onClick={moveHistorial}>
            <TextHistory>History</TextHistory>
            <RiArrowRightSLine/>
          </HistoryDiv>
        </>
        }
      </UpDiv>
        
      <Button onClick={handleButton}>{change ? "Update":"Logout"}</Button>
      
    </Wrapper> 
  )
}