import {renderOrderSummary} from './checkout/OrderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import { loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js'
// import '../data/cart-class.js';
//import '../data/backened-practice.js';

//built in class which will run the function immediately 

Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
       resolve();
    });
  })

]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});
/*
new Promise((resolve)=>{
  loadProducts(()=>{
    console.log('finsihed loading');
    resolve('value1');
  });

}).then((value)=>    //next step
{
  console.log(value);
  return new Promise((resolve)=>{
    loadCart(()=>{
       resolve();
    });
  })

}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });

*/

/*

loadProducts(()=>{
  loadCart(()=>{
   renderOrderSummary();
  renderPaymentSummary();
  });
});
*/