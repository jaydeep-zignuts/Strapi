import '@/styles/globals.css'
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";


import { useEffect, useState } from 'react';
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  </Head>
  useEffect(() => {
    console.log("i amusing useeffect");           

  }, [])
  
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  
  const addToCart = (item, qty, price) =>{
   
    let newCart= cart
    for (let index = 0; index < qty; index++) {
      
      newCart.push([item, price])
    }
    setReloadKey(Math.random())
    setCart(newCart)

  }
  const removeFromCart = (item, qty,price) =>{
    let newCart= cart
    let index = newCart.indexOf(item)
    newCart.splice(index,1)
    setReloadKey(Math.random())
    setCart(newCart)

  }
  const clearCart = (item) =>{
    setCart([])
  }
  return <><NavBar key={reloadKey} cart={cart}/> <Component cart={cart} removeFromCart ={removeFromCart} addToCart={addToCart} clearCart={clearCart}  {...pageProps} /> <Footer/> </>
}
   