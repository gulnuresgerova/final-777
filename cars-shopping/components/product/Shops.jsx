import { useEffect, useState } from "react";
import Title from "../ui/Title";
import Shopsitem from "./Shopsitem";
const Shops = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);
  useEffect(() => {
    setFilter(
      productList.filter(
        (product) =>
          product.category === categoryList[active].title.toLowerCase()
      )
    );
  }, [categoryList, productList, active]);
  return (
    <div className="bg-black  min-h-[calc(100vh_-_433px)] pb-20 h-full">
      <div className="">
        <div className="container pt-24  font-dancing mx-auto  mb-16">
          <div className="flex  items-start gap-12 justify-start w-full">
            <div className="flex align-start pt-20   ms:pr-88 flex-col justify-between">
              <Title addClass="text-[25px] text-white flex align-center justify-center">
                Cars/Wholesale
              </Title>
              <div className="mt-10 flex  text-white flex-col">
                {categoryList &&
                  categoryList.map((category, index) => (
                    <button
                      className={`px-6 py-2  rounded-3xl ${
                        index === active &&
                        "outline-dashed outline-2 outline-bordo text-white"
                      }`}
                      key={category._id}
                      onClick={() => {
                        setActive(index);
                        setProductLimit(3);
                      }}
                    >
                      {category.title}
                    </button>
                  ))}
              </div>
            </div>
            <div className=" container shp pt-20 mt-24 grid ms:w-100% w-[1000px] md:grid-cols-3  sm:grid-cols-1 ms:ml-44 grid-cols-1 gap-7  min-h-[450px]">
              {filter.length > 0 &&
                filter
                  .slice(0, productLimit)
                  .map((product) => (
                    <Shopsitem key={product._id} product={product} />
                  ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button
              className="btn-primary !bg-transparent  outline-dashed outline-2 outline-bordo "
              onClick={() => setProductLimit(productLimit + 3)}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
