import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductsActions";

const Product = () => {
  const { products } = useSelector((state) => state.productReducer);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <>
      <div className=" bg-red-300 h-full w-1/2 flex flex-col items-start justify-start ml-auto mr-auto p-5 mt-10">
        <div className="bg-red-500 text-center mt-10 w-60 ml-auto mr-auto  h-20 py-4  ">
          <h1 className=" text-white text-5xl font-bold">User List </h1>
        </div>

        <ul className=" mt-5 ml-52 cursor-pointer">
          {products.map((items, index) => {
            return (
              <li key={index} className="">
                <h1>
                  {items.id} {items.title}
                </h1>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Product;
