//contains utility related to money

export function formatcurrency(priceCents){
 return  (priceCents/100).toFixed(2);
}