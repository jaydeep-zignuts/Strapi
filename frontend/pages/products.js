import { headers } from "next/dist/client/components/headers";
import Link from "next/link";
import React from "react";

const product = (props) => {
  // const apiUrl = "http://127.0.0.1:1337"
  const apiUrl = 'http://localhost:1337';
  return (
    <div className="container mx-auto px-4">
      <section className="text-light-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-light-900">
                Product list - My Shop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item)=>{
                return (
            <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                {/* <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={`${apiUrl}${item?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`}
                  alt="content"
                />
                 */}
                 <img className="h-96 rounded m-auto mb-6" src={`${apiUrl}${item?.attributes?.image?.data?.attributes?.url}`} alt="content" />
                <h3 className="text-lg text-gray-900 font-medium title-font ">
                {item.attributes.category}
                </h3>
                <h2 className="tracking-widest text-indigo-500 text-xs font-medium title-font"   >
                {item.attributes.title} 
                </h2>
                
                <div className="hidden bg-red-800 bg-purple-800 bg-green-800" ></div>
                <span className="text-black " >color :</span> <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
                <h2 className="text-lg text-gray-900 font-medium title-font ">
                {item.attributes.price}
                </h2>
                {/* <h2 className="text-lg text-gray-900 font-medium title-font ">
                {item.attributes.color}
                </h2> */}
                <Link href={`/product/${item.attributes.slug}`}>
                <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-300 rounded text-base mt-4 md:mt-0">Buy Now</button>
                </Link>
              </div>
            </div>            
                )
            })}
            
          </div>
        </div> 
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer f0ce170e4ea5fc94d15716b37662261cb65f3d065bb44589d7d2b0d36b615e4a7a134bf18438936e942babb18174b4ff7ad9a2fea89038945bd7ec9829f7150d0319a3e330718eb908a9c9268d145077ee5c4b97e415bcb220a12be480fb21f41e9ad592e824cda845eea46ba13d7c7838ed34273d14cfae5ebd5b598cdd1be0",
  };
  let a = await fetch("http://localhost:1337/api/products?populate=*",{headers:headers});
  let products = await a.json();
  return {
    props: { products: products }, 
  };
}
export default product;
 