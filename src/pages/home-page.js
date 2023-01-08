import styled from "@emotion/styled"
import { Link } from "react-router-dom"
import CategoryList from "../components/category-list"
import { useAuth } from "../context/auth-context"
import FoodCard from "../components/food-card"
import { colors } from "../styles"
import {BsCart2} from "react-icons/bs"
import {RiSearchLine} from "react-icons/ri"
import { useEffect, useState } from "react"
import Cart from "../components/cart"


const Wrapper = styled.div`
  padding: 50px 40px 30px 40px;
`
const Container = styled.div`
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  background:${colors.gray[100]};
  padding-top:100px;
  justify-items:center;
  height: 800px;
  overflow-y: scroll;
`
const StyledLink = styled(Link)`
  text-decoration:none;
`
const UpDiv = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom:45px;
`
const SearchDiv = styled.div`
  display:flex;
  align-items:center;
`
const StyledInput = styled.input`
  border:none;
`
const SearchText = styled.h1`
font-weight: 600;
font-size: 28px;
line-height: 35px;
text-align: center;
`


export default function HomePage({products}){
  const categories = Array.from(new Set(products.map(product=> product.category))).sort()
  const {select, setActualProduct, setPage} = useAuth()
  const products_filter = products.filter(products=> products.category=== select);
  const [search, setSearch] = useState("")
  const [searchProducts, setSearchProducts] = useState("")
  useEffect(()=>{
    if(!sessionStorage.getItem("cart")) sessionStorage.setItem("cart",JSON.stringify([]))
    if(!sessionStorage.getItem("items")) sessionStorage.setItem("items",JSON.stringify([]))
  })
  function showFood(event, product){
    setActualProduct(product)
  }
  useEffect(()=>{
    setSearchProducts(products.filter(product => product.name.includes(search)))
  },[search])

  

  return(
    <Wrapper>
      <UpDiv>
        <SearchDiv>
          <RiSearchLine/>
          <StyledInput type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </SearchDiv>
        <Link to="/cart">
          <BsCart2 onClick={()=>setPage("empty")}/>
        </Link>
      </UpDiv>
      
        { search ==="" ? 
        <>
          <CategoryList categories={categories}/>
          <Container>  
          {products_filter.map((product, index)=>{
            return(
              <StyledLink to={`/home/${product.id}`}>
                <FoodCard showFood={(e)=>showFood(e, product)} key={index} img={product.picture_url} name={product.name} price={product.price/100}/>
              </StyledLink>
            )
          }) }
          </Container>
        </>
        : 
        <>
          <SearchText>Found {searchProducts.length === 1 ? " 1 result" :` ${searchProducts.length} results`} results</SearchText>
          <Container>  
              {searchProducts.map((product, index)=>{
                return(
                  <StyledLink to={`/home/${product.id}`}>
                    <FoodCard showFood={(e)=>showFood(e, product)} key={index} img={product.picture_url} name={product.name} price={product.price/100}/>
                  </StyledLink>
                )
              })}
            </Container>
        </>
        }

      
    </Wrapper>
  )
}