import React from "react";
import { useRouter } from "next/router";
const Slug = ({ product, addToCart   }) => {
  const router = useRouter();
  const { slug } = router.query;
  const apiUrl = 'http://localhost:1337';

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="w-50 h-100">
              
            <img
              alt="ecommerce"
              className=" rounded"
              src={`${apiUrl}${product?.attributes?.image?.data?.attributes?.url}`}
            />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest text-white">
              MyShop
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 text-white">
              {product.attributes.title}
              </h1>
             
              <p className="leading-relaxed text-white">
               {product.attributes.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3 text-white">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                {/* <div className="flex ml-6 items-center">
                  <span className="mr-3 text-white">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex ">
                <span className="title-font font-medium text-2xl text-white">
                Rs. {product.attributes.price}
                </span>
                <div className="flex mx-2">
                  <button onClick={() => {addToCart(slug,1, product.attributes.price )}} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button>
                  <button onClick={() => { router.push('/checkout') }}  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 mx-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Checkout
                  </button>
                </div>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
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
  let a = await fetch("http://localhost:1337/api/products?populate=*&filters[slug]=" + context.query.slug, {
    headers: headers,
  });
  let product = await a.json();
  return {
    props: { product: product.data[0] },
  };
}
export default Slug;
