import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { Rating, Skeleton } from "@mantine/core";
import QuickView from "./Modal";
import Test from "../Test";
import Loading from "../loading/Loading";
import { Pagination as Pagination1 } from "@mantine/core";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Example from "../users/Testdrop";

function chunk(array, size) {
  if (!array?.length) {
    return [];
  }
  const head = array?.slice(0, size);
  const tail = array?.slice(size);
  return [head, ...chunk(tail, size)];
}

const Products = () => {
  const [cookies, setCookie] = useCookies("access_token");
  const [activePage, setPage] = useState(1);
  const select = useSelector((state) => state.cartItem.filter);
  const search = useSelector((state) => state.cartItem.search);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [products1, setProducts1] = useState([]);

  const [Id, setId] = useState([]);
  useEffect(() => {
    setProducts1(products.filter((findId) => findId.id === Number(search)));
  }, [search]);
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products?limit=0`
        );
        response && setProducts(response.data.products);
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, []);
  useEffect(() => {
    setProducts1(products);
  }, [products, select]);
  ///// price after sale /////
  const newPrices = (data) => {
    const increase = (data.discountPercentage * data.price) / 100.0;
    const total = (data.price - increase.toFixed(2)) / 1.0;
    return total.toFixed(2);
  };
  const [s, setS] = useState([]);
  useEffect(() => {
    setPage(1);
  }, [select]);
  useEffect(() => {
    setProducts1(
      chunk(
        products?.map((data, index) => data),
        Number(select.limit)
      )[activePage - 1]?.map((item) => item)
    );
  }, [products, select, activePage]);
  const selectLength = () => {
    const filter = products?.length / Number(select.limit);
    return Math.ceil(filter);
  };
  const [_1, setCookies1] = useCookies("access_token");
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: "Bearer " + _1.access_token,
        },
      });
      setInfo(response?.data);
    };
    fetch();
  }, []);
  const [mobileView, setMobileView] = useState();
  return (
    <>
      <div className="w-full flex relative bg-red-500">
        {cookies.access_token ? (
          <Example info={info} />
        ) : (
          <Link
            to="/users"
            className={`border-[#fdc936] flex items-center justify-center bg-[#fdc936] lg:w-[100px] lg:z-[62] rounded-md px-4 py-2 font-neutra fixed  lg:left-[80%] lg:top-[5%] top-[30px] left-[15px]  ${
              mobileView === true ? " z-[62]" : "z-10"
            }`}
          >
            Login
          </Link>
        )}
        <Test
          setMobileView={(element) => setMobileView(element)}
          setCategoryFilter={(element) => setProducts(element)}
          setProducts3={(element) => setS(element)}
          products2={products}
        />
      </div>
      <div className=" w-full mt-[110px] lg:mt-[245px] px-[35px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 items-center gap-[2rem] justify-center ">
        {products1?.map((product, i) => {
          return (
            <div
              key={product.id}
              className="group h-[357px] overflow-hidden  flex flex-col items-center relative bg-white rounded-lg border-2 shadow-xl hover:shadow-[#fdc936] border-neutral-200 hover:border-[#fdc936] hover:outline-[#fdc936]  "
            >
              <div className=" flex-col w-full justify-start overflow-hidden items-start gap-2.5 inline-flex">
                <Loading data={<Skeleton height={302} width />}>
                  <img
                    className="w-full h-[302px] hover:scale-[1.75] duration-500 aspect-video"
                    src={product.thumbnail}
                  />
                </Loading>
              </div>
              <div className="w-full h-[110px] flex py-6 px-4 items-center justify-between">
                <div className=" flex-col w-full justify-center items-start gap-1.5 inline-flex">
                  <div className="flex-col w-[80%] justify-start items-start gap-1.5 flex">
                    <Loading data={<Skeleton height={20} width />}>
                      <div className="w-full text-neutral-600 text-sm font-normal font-['Neutra'] leading-[21px]">
                        {product.title} <span>({product.stock} product)</span>
                      </div>
                    </Loading>
                    <Loading data={<Skeleton height={20} width />}>
                      <div className=" h-6 justify-start items-start gap-0.5 inline-flex">
                        <div className="text-zinc-900 flex items-start text-base gap-2 font-medium font-['Neutra'] leading-normal">
                          {!!product.discountPercentage === true ? (
                            <>
                              <span>
                                {newPrices(product)} <sup>DA</sup>
                              </span>
                              <div className="text-neutral-400 text-base font-normal font-['Neutra'] line-through leading-normal">
                                {(product.price / 1.0).toFixed(2)} DA
                              </div>
                            </>
                          ) : (
                            <span>
                              {(product.price / 1.0).toFixed(2)} <sup>DA</sup>
                            </span>
                          )}
                        </div>
                      </div>
                    </Loading>
                  </div>

                  <Loading data={<Skeleton height={25} width={125} />}>
                    <div className="justify-center items-center inline-flex">
                      <Rating
                        value={!!product.rating === true ? product.rating : 0}
                        fractions={
                          !!product.rating === true
                            ? Math.round(product.rating)
                            : 0
                        }
                        readOnly
                      />
                    </div>
                  </Loading>
                </div>

                <Loading
                  data={
                    <Skeleton height="2.5rem" width="2.5rem" radius={100} />
                  }
                >
                  <button
                    className="w-10 h-10 bg-zinc-100 group/seif hover:bg-[#fdc936] rounded-full flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-zinc-500"
                    disabled={!!product.stock === false}
                  >
                    <CiShoppingCart
                      size={25}
                      className="fill-black group-disabled/seif:stroke-white group-hover/seif:fill-white stroke-black "
                    />
                  </button>
                </Loading>

                {/*//// visual and quick shop*/}
                <div className="opacity-0 top-0 group-hover:opacity-100 duration-1000 cursor-pointer w-10 h-[86px] right-[20px] group-hover:top-[20px] absolute">
                  <div className="w-10 h-10 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                    <div
                      className="w-10 h-10 flex items-center justify-center"
                      onClick={() =>
                        setId(
                          products1.filter((data) => data.id === product.id)
                        )
                      }
                    >
                      <QuickView data={Id?.length > 0 && Id[0]} />
                    </div>
                  </div>
                  <div className="w-10 h-10 left-0 top-[46px] absolute flex-col justify-start items-start inline-flex">
                    <div className="w-10 h-10 hover:bg-[#fdc936] shadow-xl bg-white rounded-full border flex items-center justify-center border-zinc-200">
                      <CiHeart size={25} />
                    </div>
                  </div>
                </div>
                {/*  status of stock */}
                <div className="absolute top-[20px] left-[20px] gap-5 flex items-start justify-start flex-col-reverse ">
                  <Loading data={<Skeleton height={27} width={35} />}>
                    {!!product.stock === false && (
                      <div className=" h-[27px] px-2 py-[3px] bg-zinc-900 rounded justify-center items-center gap-1 inline-flex">
                        <div className="text-white text-sm font-normal font-['Neutra'] leading-[21px]">
                          Out of Stock
                        </div>
                      </div>
                    )}
                    {/*  ///annouce of sold with percent /// */}
                    {!!product.discountPercentage === true && (
                      <div className=" h-[27px] px-2 py-[3px] bg-[#fdc936] rounded justify-center items-center gap-1 inline-flex">
                        <div className="text-white text-sm font-normal font-['Neutra'] leading-[21px]">
                          Sale
                        </div>
                        <div className="text-white text-sm font-medium font-['Neutra'] leading-[21px]">
                          {product.discountPercentage} %
                        </div>
                      </div>
                    )}
                  </Loading>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full flex my-5 items-center justify-center">
        <Pagination1
          total={selectLength()}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </div>
    </>
  );
};

export default Products;
