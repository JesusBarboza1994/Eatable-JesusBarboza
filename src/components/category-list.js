import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import { useAuth } from "../context/auth-context"
import { colors } from "../styles"

const Wrapper = styled.div`
  display: flex;
  gap:34px;
  padding-bottom:4px;
  overflow-x: scroll;
  overflow-y:hidden;
  /* Estilos de la barra de desplazamiento */
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    height:8px;
  }
  
`
const Text = styled.h1`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
`

export default function CategoryList({categories}){
  const {select, setSelect} = useAuth();

  function ChangeCategory(event){
    event.preventDefault();
    setSelect(event.target.id)
  }

  return(
    <Wrapper>
      {categories.map((category, index)=>{
        return <Text id={category}
                  key={index}
                  style={{color: select === category ? colors.orange["600"] : colors.gray["400"],
                  borderBottom: `${select === category ? `3px solid ${colors.orange["600"]}` : ""}`}}
                  onClick={ChangeCategory} >
                {category}</Text>
      })}
    </Wrapper>
  )
}