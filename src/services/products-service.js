import apiFetch from "./api-fetch";

export async function getProducts(){
  const products = await apiFetch("products");
  return products;
}