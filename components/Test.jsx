import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./filters/Filter";
import Category from "./category/Category";
import Brand from "./brand/Brand";
import { useDispatch, useSelector } from "react-redux";
import { updateFiltring } from "./redux/createSlice/Product";
import { IoIosClose, IoMdCloseCircleOutline } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { useCookies } from "react-cookie";

function Demo({ setProducts2, products2 }) {
  //// search filter ///////
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=${Number(0)}`
        );
        response && setProducts(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, []);
  return (
    <div className="w-full  flex flex-col items-start justify-center ">
      <h1>
        Filtering By Id {products[0]?.id} - {products[products.length - 1]?.id}
      </h1>
      <div className="lg:h-[36px] w-full lg:w-[506px]   flex items-center justify-center gap-3 ">
        <input
          type="number"
          placeholder={
            products[0]?.id + "-" + products[products.length - 1]?.id
          }
          min={products[0]?.id}
          max={products[products.length - 1]?.id}
          className=" border focus:outline-[#fdc936] border-neutral-200  placeholder:font-['Neutra'] font-['Neutra']  w-full h-full px-5"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="border border-[#fdc936] bg-[#fdc936] flex items-center justify-center rounded-md px-4 py-2 h-full "
          onClick={() =>
            setProducts2(
              products.filter((findId) => findId.id === Number(search))
            )
          }
        >
          Search
        </button>
        <button
          className="border border-[#fdc936] bg-[#fdc936] flex items-center justify-center rounded-md px-4 py-2 h-full "
          onClick={() => {
            Number(search) >= 1 && setProducts2(products2), setSearch("");
            Number(search) >= 1 && localStorage.clear();
            Number(search) >= 1 && window.location.reload();
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

const Test = ({
  setProducts2,
  products2,
  setCategoryFilter,
  setMobileView,
}) => {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.cartItem.filter);
  const [deletFiltering, setDeletFiltering] = useState({
    category: select.category,
    brand: select.brand,
  });
  const [test, settest] = useState();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setMobileView(isOpen);
  }, [isOpen]);
  const [cookies, setCookie] = useCookies("access_token");
  return (
    <>
      <div
        className={`lg:hidden w-full flex-row-reverse  h-[100px] px-[60px] bg-white sm:px-[80px]  fixed top-[0px]  z-[61] flex items-center justify-between ${
          isOpen ? "shadow-none" : "shadow-sm"
        }`}
      >
        {isOpen === true ? (
          <IoIosClose
            className="z-[61]"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            size={40}
          />
        ) : (
          <RiMenu3Line
            className="z-[61]"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            size={40}
          />
        )}
        <h1
          className={`md:text-[60px] z-[50] text-[20px]  ${
            cookies.access_token
              ? "visible"
              : isOpen
              ? "invisible delay-0"
              : "visible delay-200"
          }`}
        >
          DevRabic
        </h1>
      </div>
      <div
        className={`${
          isOpen === false ? " invisible" : " visible"
        } px-[35px] h-screen justify-center lg:visible lg:w-full lg:h-[240px] bg-white shadow-md shadow-[#c0e3e5] w-screen font-['Neutra'] fixed top-0 py-5 z-[40]  flex flex-col items-center  `}
      >
        <Demo setProducts2={setCategoryFilter} products2={products2} />

        <div className="w-full flex lg:flex-row flex-col  p-5 gap-5 items-center justify-start ">
          <Category setCategoryFilter={setCategoryFilter} />
          <Filter setCategoryFilter={setCategoryFilter} products2={products2} />

          <Brand setCategoryFilter={setCategoryFilter} />
        </div>
        <div className="w-full border px-[20px] flex gap-5 items-center">
          <h1 className="text-[35px]">Filter</h1>

          {select.category ? (
            <div className="flex  items-center justify-center px-3 rounded-full  bg-zinc-300 gap-2 ">
              <h1 className="lowercase text-[12px]">{select.category}</h1>

              <IoIosClose
                onClick={() => {
                  dispatch(updateFiltring({ ...select, category: null }));
                  window.location.reload();
                }}
                height={15}
                width={15}
                size={15}
                className="flex items-center cursor-pointer justify-center"
              />
            </div>
          ) : null}
          {select.brand ? (
            <div className="flex items-center justify-center px-3 rounded-full bg-zinc-300 gap-2 ">
              <h1 className="lowercase text-[12px]">{select.brand}</h1>

              <IoIosClose
                onClick={() => {
                  dispatch(updateFiltring({ ...select, brand: null }));
                  window.location.reload();
                }}
                height={15}
                width={15}
                size={15}
                className="flex items-center cursor-pointer justify-center"
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Test;
