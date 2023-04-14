import React from 'react'
import Link from 'next/link' 
export const NavBar = ({cart}) => {
  return (
    <div>
                <header className="text-gray-600 body-font bg-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="/logo.svg"  className="w-8" />
      <span className="ml-3 text-xl">MyShop</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" legacyBehavior><a className="mr-5 hover:text-gray-900">Home</a></Link>
      <Link href="/about" legacyBehavior><a className="mr-5 hover:text-gray-900">About</a></Link>
      <Link href="/products" legacyBehavior><a className="mr-5 hover:text-gray-900">Products</a></Link>
      <Link href="/contact" legacyBehavior><a className="mr-5 hover:text-gray-900">Contact Us</a></Link> 
      <Link href="/checkout" legacyBehavior><a className="mr-5 hover:text-gray-900">Cart({cart.length})</a></Link> 

      
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
        
      </svg>
    </button>
  </div>     
</header>
    </div>         
  )
}                
  