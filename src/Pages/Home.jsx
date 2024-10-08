/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";

import Header from "../Components/Home-Components/Header";
import Product from "../Components/Home-Components/Product";
import Video from "../Components/Home-Components/Video";
import Details from "../Components/Home-Components/Details";
import HomeFotter from "../Components/Home-Components/HomeFotter";
import ProductInfo from "../Components/ProductInfo";
import Spiner from "../Components/Loader/Spiner";
import { ProductContext } from "../LayOut";

const Home = () => {
  const AllProducts = useContext(ProductContext);
  console.log("from contex", AllProducts);

  const [newAraivles, setNewAraivles] = useState([]);
  const [showAll, setShowAll] = useState(8);
  const [filterCatagory, setFilterCatagory] = useState("new-arrival");
  const [demoProduct, setDemoproduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newArible = AllProducts.filter(
      (product) => product.category === filterCatagory
    );
    console.log(newAraivles);
    setNewAraivles(newArible);
    const demoFetching = async () => {
      const res = await fetch("../../public/product.json");
      const demoData = await res.json();
      setDemoproduct(demoData);
      setIsLoading(false);
    };

    demoFetching();
  }, [AllProducts, filterCatagory]);

  //  handle view all
  const handleViewAll = () => {
    setShowAll(showAll + 8);
  };

  return (
    <div>
      <div>
        <Header></Header>
        <div>
          <div className="px-4 max-w-[1100px] mx-auto pt-16 pb-3">
            <ProductInfo
              color={`text-gray-700`}
              title={"Summer Arrivals"}
              paragraph={
                "Embrace the season with our latest collection and make this summer your most stylish one yet!"
              }
            ></ProductInfo>
          </div>
          <div className="grid px-4 max-w-[1100px]  justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-auto md:gap-5">
            {newAraivles?.slice(0, showAll).map((product, idx) => (
              <Product key={idx} product={product}></Product>
            ))}
          </div>
        </div>
        <div className={showAll >= newAraivles.length ? "hidden" : "block"}>
          <div className="flex justify-center py-[44px]">
            <button
              onClick={handleViewAll}
              className="bg-black text-white px-3 py-2 text-center"
            >
              View All
            </button>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto">
          <div className="px-4 max-w-[1100px] mx-auto pt-10">
            <h2 className="text-xl px-4 text-[22px] md:px-0 pb-2 font-semibold ">
              Product Collection
            </h2>
          </div>
          <div className="">
            <div className="grid px-4  justify-center pt-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-1  md:gap-5">
              {demoProduct.map((demo) => (
                <div className="px-4 md:px-0 pb-5" key={demo.id}>
                  <img className="w-full" src={demo.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* video components */}
        <Video></Video>
        <Details></Details>
        <HomeFotter></HomeFotter>
      </div>
    </div>
  );
};

export default Home;
