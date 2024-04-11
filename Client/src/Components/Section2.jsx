import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "/Navbar/Amul.png";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import lap from "/product/lapy1.png";


const products = [
  {
    id:1,
    img1:"/product/5.png",
    h:"Tailoring the online journey of a multinational paint brand with a century of offline presence sections",
    h1:"B2B Marketplace",
    p1:"Leverages the existing dealer network for decentralized fulfillment",
    h2:"B2B Marketplace",
    p2:"Leverages the existing dealer network for decentralized fulfillment",
    h3:"B2B Marketplace",
    p3:"Leverages the existing dealer network for decentralized fulfillment",
    h4:"B2B Marketplace",
    p4:"Leverages the existing dealer network for decentralized fulfillment",
    img2:"/product/lapy1.png"
  },
  {
    id:1,
    img1:"/product/5.png",
    h:"Tailoring the online journey of a multinational paint brand with a century of offline presence sections",
    h1:"B2B Marketplace",
    p1:"Leverages the existing dealer network for decentralized fulfillment",
    h2:"B2B Marketplace",
    p2:"Leverages the existing dealer network for decentralized fulfillment",
    h3:"B2B Marketplace",
    p3:"Leverages the existing dealer network for decentralized fulfillment",
    h4:"B2B Marketplace",
    p4:"Leverages the existing dealer network for decentralized fulfillment",
    img2:"/product/lapy1.png"
  }
];



export default function Section2() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:3000/api/product");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <section className="flex-col p-10 sm:p-20 pt-20">
      <div>
        <h1 className="text-3xl sm:text-6xl font-bold text-center">
          Tailor-made enterprise solutions for your <br /> brand
        </h1>
        <p className="text-lg sm:text-2xl text-center">
          Powering Disruptive brands across 40+ industries
        </p>
      </div>
      <div>
        <Splide
          options={{
            type: "slide",
            perPage: 1,
            autoplay: true,
            arrows: true,
          }}
        >
          {products.map((product) => (
            <SplideSlide key={product.id}>
              <div className="hidden sm:flex pt-10">
                <div className="">
                  <div className="py-5">
                    <img className="" src={product.img1} alt="" />
                    <h1 className="text-3xl font-bold">{product.h}</h1>
                    <div className="grid text-lg grid-cols-2 grid-rows-2 gap-0">
                      <div className="">
                        <h1>{product.h1}</h1>

                        <p>{product.p1}</p>
                      </div>
                      <div>
                      <div className="">
                        <h1>{product.h2}</h1>

                        <p>{product.p2}</p>
                      </div>
                      </div>
                      <div>
                      <div className="">
                        <h1>{product.h3}</h1>

                        <p>{product.p3}</p>
                      </div>
                      </div>
                      <div>
                      <div className="">
                        <h1>{product.h4}</h1>

                        <p>{product.p4}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="sm:pt-20" src={product.img2} alt="" />
              </div>
              <div className="sm:hidden flex-col pt-10">
                <div className="">
                  <div className="py-5">
                    <div className="flex justify-center">
                    <img className="" src={product.img1} alt="" />
                    </div>
                    <h1 className="text-3xl font-bold">{product.h}</h1>
                    <div className="grid text-lg grid-cols-2 grid-rows-2 gap-0">
                      <div className="">
                        <h1>{product.h1}</h1>

                        <p>{product.p1}</p>
                      </div>
                      <div>
                      <div className="">
                        <h1>{product.h2}</h1>

                        <p>{product.p2}</p>
                      </div>
                      </div>
                      <div>
                      <div className="">
                        <h1>{product.h3}</h1>

                        <p>{product.p3}</p>
                      </div>
                      </div>
                      <div>
                      <div className="">
                        <h1>{product.h4}</h1>

                        <p>{product.p4}</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="sm:pt-20" src={product.img2} alt="" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
