import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import CategoryList from "../components/category-list"
import { useAuth } from "../context/auth-context"
import FoodCard from "../food-card"
import { colors } from "../styles"

const Wrapper = styled.div`
  display:flex;
  gap:30px;
  flex-wrap:wrap;
  background:${colors.gray[100]};
  justify-content:center;
  margin-top:50px;
  height: 800px;
  overflow-y: scroll;
`

export default function HomePage({products}){
  const categories = Array.from(new Set(products.map(product=> product.category))).sort()
  const {select} = useAuth()
  const products_filter = products.filter(products=> products.category=== select);
 
  return(
    <>
      <CategoryList categories={categories}/>
      <Wrapper>
        {products_filter.map((product, index)=>{
          return(
              <FoodCard key={index} img={product.picture_url} name={product.name} price={product.price/100}/>
          )
        })}

      </Wrapper>
    </>
  )
}