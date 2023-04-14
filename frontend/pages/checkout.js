import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'

const checkout = ({cart, removeFromCart}) => {

  const [subtotal, setSubtotal] = useState(0)
  const [form, setForm] =useState({name:"", email:"", phone:"", message:""})
  useEffect(() => {
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal=myTotal+cart[index][1]
    }
    setSubtotal(myTotal)
  },[])

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log({...form, [e.target.name]:e.target.value})
  }
  const handleClick= (e) =>{
    alert("Order Placed Successfully!!!")
  }
  const handlePrice = (e) => {
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal=myTotal+cart[index][1]
    }
    setSubtotal(myTotal)
  }

  return (
    
    <div>
    
      <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col  w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 text-white">Checkout</h1>
        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
        <h2 className='text-white'>Cart</h2>
        <div className='cart text-white'> {cart.length ? `your cart details are as follows` : `Your Cart is empty`} </div>
        <ul className='list-decimal '>
          { cart.map((item)=>{
            console.log(item);
            return <li >{ item[0] } with price of   {item[1]}<button  onClick={() => {removeFromCart(item, 1, item[1]); handlePrice()}} className="flex ml-auto d-inline text-white bg-indigo-500 border-0 py-2 mx-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">

            Remove From Cart
          </button></li>

          })
        }
        </ul>
        

        <div className='font-bold text-white'>
          Subtotal : {subtotal}
        </div>
        <div className='cart text-white'>
          Your cart details
        </div>
      </div>
      <div className=" ">
        <form className="flex flex-wrap -m-2" action="/success" method='get'>
          <div className="p-2 w-1/2 ">
            <div className="relative">
              <label for="name" className="leading-7 text-sm text-white-600 text-white">Name</label>
              <input type="text" onChange={handleChange} value={form.name} id="name" name="name" className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label for="email" className="leading-7 text-sm text-white-600 text-white">Email</label>
              <input type="email" id="email" onChange={handleChange} value={form.email} name="email" className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label for="phone" className="leading-7 text-sm text-white-600 text-white">PhoneNo</label>
              <input type="number" id="phone" onChange={handleChange} name="phone" value={form.phone} className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label for="message" className="leading-7 text-sm text-white-600 text-white">Message</label>
              <textarea id="message" onChange={handleChange} value={form.message} name="message" className="w-full bg-white-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out " required></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            
            <input type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white" ovalue="Buy"/>
            

          </div>
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a className="text-indigo-500 text-white">example@email.com</a>  
            <p className="leading-normal my-5 text-white">49 Smith St.
              <br/>Saint Cloud, MN 56301erpkrtpyprtpyptyukoprtpu
            </p> 
            <span className="inline-flex">      
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-4 text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  </section>
  </div>
  )
}

export default checkout

//   {/* <Script type="application/javascript" src={` https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`} onload="onScriptLoad();" crossorigin="anonymous"></Script>
//       <Script>
//         function onScriptLoad(){
//           var config = {
//           "root": "",
//         "flow": "DEFAULT",
//         "data": {
//           "orderId": "", /* update order id */
//         // "token": "", /* update token value */
//         // "tokenType": "TXN_TOKEN",
//         // "amount": "" /* update amount */
// //         },
// //         "handler": {
// //           "notifyMerchant": function(eventName,data){
// //           console.log("notifyMerchant handler function called");
// //           console.log("eventName => ",eventName);
// //           console.log("data => ",data);
// //         }
// //       }
// //     };
// //         if(window.Paytm && window.Paytm.CheckoutJS){
// //           window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
// //             // initialze configuration using init method
// //             window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
// //               // after successfully updating configuration, invoke JS Checkout
// //               window.Paytm.CheckoutJS.invoke();
// //             }).catch(function onError(error) {
// //               console.log("error => ", error);
// //             });
// //           });
// // }
// // }
// //       </Script> */}
