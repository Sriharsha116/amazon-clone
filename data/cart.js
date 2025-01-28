export const cart=[];

export function addToCart(productid){
  let matchingItem;
  
  cart.forEach((cartItem)=>{
    if(productid === cartItem.productId)
    {
      matchingItem=cartItem;
    }
  });
  if(matchingItem)
  {
    matchingItem.quantity+=1;
  }
    else{
      cart.push({
        productId:productid,
        quantity:1
      });
    }
}