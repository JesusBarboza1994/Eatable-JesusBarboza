import apiFetch from "./api-fetch";

export async function getOrders(){
  return await apiFetch("orders");
}

export async function createOrder(data){
  const order =  await apiFetch("orders",
                 { body: data })
  return order;
}