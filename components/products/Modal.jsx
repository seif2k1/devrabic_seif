import { useEffect, useState } from "react";
import { Skeleton } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Rating } from "@mantine/core";
import { TfiEye } from "react-icons/tfi";
import { Modal, Group } from "@mantine/core";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import Loading from "../loading/Loading";
export default function QuickView({ data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [quantity, setQuantity] = useState(1);
  const [imageSelected, setImageSelected] = useState();
  const isPc = useMediaQuery("(min-width:1024px)");
  const isDesktop = useMediaQuery("(min-width:1280px)");
  const isMobile = useMediaQuery("(min-width:0px)");
  ///// price after sale /////
  const newPrices = (data) => {
    const increase = (data.discountPercentage * data.price) / 100.0;
    const total = (data.price - increase.toFixed(2)) / 1.0;
    return total.toFixed(2);
  };
  useEffect(() => {
    setImageSelected(data?.thumbnail);
  }, [data?.thumbnail]);
  const Info = {
    ...data,
    quantity: quantity,
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={
          isDesktop === true
            ? "85%"
            : isPc === true
            ? "95%"
            : isMobile === true
            ? "100%"
            : "100%"
        }
        className="bg-red-500"
        radius={15}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 4,
        }}
        transitionProps={{
          transition: "fade",
          duration: 300,
          timingFunction: "linear",
        }}
      >
        {data ? (
          <div className="w-full h-[600px] flex-col lg:flex-row font-['Neutra'] flex gap-9">
            <div className="lg:w-[50%] w-full h-[556px] flex gap-3 ">
              <div className="flex flex-col h-full gap-6">
                <Loading
                  data={Array(data.images?.length)
                    .fill(<Skeleton height={50} width={90} animate={true} />)
                    .map((_) => _)}
                >
                  {data.images.map((singleImage, i) => {
                    return (
                      <img
                        onClick={() => {
                          setImageSelected(singleImage);
                        }}
                        src={singleImage}
                        className="w-[90px] h-[50px] cursor-pointer"
                        key={i}
                        alt={data.title}
                      />
                    );
                  })}
                </Loading>
              </div>
              <div className="h-full w-full">
                <Loading
                  imageSelected={imageSelected}
                  data={<Skeleton height={456} width />}
                >
                  <img className={`w-full h-full `} src={imageSelected} />
                </Loading>
              </div>
              <div className="w-6 h-6 left-[28px] top-[532px] absolute" />
              <div className="w-6 h-6 left-[28px] top-[24px] absolute" />
            </div>
            <div className="lg:w-[50%] w-full flex-col justify-start lg:items-start item-center gap-6 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="flex-col justify-start w-full items-start gap-3 flex">
                  <Loading data={<Skeleton height={50} width />}>
                    <div className="justify-start w-full items-center gap-2 inline-flex">
                      <div className="text-zinc-900 text-4xl font-semibold capitalize  font-['Neutra'] leading-[43.20px]">
                        {data.title}
                      </div>
                      <div
                        className={`${
                          !!data.stock === true
                            ? "bg-green-600 bg-opacity-20"
                            : "bg-red-500"
                        } px-2 py-1 capitalize w-[115px] rounded justify-center items-center gap-2.5 flex`}
                      >
                        <div
                          className={`${
                            !!data.stock === true
                              ? "text-green-800"
                              : "text-white"
                          }  capitalize text-sm font-normal font-['Neutra'] leading-[21px]`}
                        >
                          {!!data.stock === true ? (
                            <>in stock</>
                          ) : (
                            <>out stock</>
                          )}
                        </div>
                      </div>
                    </div>
                  </Loading>
                </div>

                <div className="justify-start flex-col md:flex-row items-center gap-3 w-full inline-flex">
                  <Loading data={<Skeleton height={40} width />}>
                    <div className="justify-start items-center gap-4 flex">
                      {data.discountPercentage !== true ? (
                        <>
                          <div className="text-zinc-400 text-xl font-normal font-['Neutra'] line-through leading-[30px]">
                            {(data.price / 1.0).toFixed(2)} DA
                          </div>
                          <div className="text-green-800 text-2xl font-medium font-['Neutra'] leading-9">
                            {newPrices(data)} <sup>DA</sup>
                          </div>{" "}
                        </>
                      ) : (
                        <div className="text-green-800 text-2xl font-medium font-['Neutra'] leading-9">
                          {(data.price / 1.0).toFixed(2)} <sup>DA</sup>
                        </div>
                      )}
                    </div>
                    {!!data.discountPercentage === true && (
                      <div className="px-2.5 py-[3px] bg-red-500 bg-opacity-10 rounded-[30px] justify-start items-start gap-1.5 flex">
                        <div className="text-red-500 text-sm font-medium font-['Neutra'] leading-[21px]">
                          {data.discountPercentage}% Off
                        </div>
                      </div>
                    )}
                  </Loading>
                </div>
                <Loading data={<Skeleton height={5} width />}>
                  <div className="w-full bg-red-500 h-[0px] border border-neutral-200"></div>
                </Loading>
              </div>
              <div className="w-full flex-col justify-start items-start gap-4 flex">
                <div className="w-full justify-between items-center inline-flex">
                  <Loading data={<Skeleton height={35} width />}>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                        Brand:
                      </div>
                      <div className="p-2 flex items-center justify-center border relative">
                        <div className="text-neutral-600 text-[13px] font-bold font-['Dancing Script'] leading-[13px]">
                          {data.brand}
                        </div>
                      </div>
                    </div>
                  </Loading>
                </div>
                <div className="w-full justify-between items-center inline-flex">
                  <Loading data={<Skeleton height={35} width />}>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                        Category:
                      </div>
                      <div className="p-2 flex items-center justify-center border relative">
                        <div className="text-neutral-600 text-[13px] capitalize font-bold font-['Dancing Script'] leading-[13px]">
                          {data.category}
                        </div>
                      </div>
                    </div>
                  </Loading>
                </div>

                <Loading data={<Skeleton height={50} width />}>
                  <div className="w-full text-zinc-500 text-sm font-normal font-['Neutra'] leading-[21px]">
                    {data.description}
                  </div>
                </Loading>
                <div className="w-full justify-between items-center inline-flex">
                  <Loading data={<Skeleton height={35} width />}>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                        Rating:
                      </div>
                      <div className="p-2 flex items-center justify-center border relative">
                        <div className="text-neutral-600 text-[13px] capitalize font-bold font-['Dancing Script'] leading-[13px]">
                          <Rating
                            value={!!data.rating === true ? data.rating : 0}
                            fractions={
                              !!data.rating === true
                                ? Math.round(data.rating)
                                : 0
                            }
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </Loading>
                </div>

                <div className="w-full justify-between items-center inline-flex">
                  <Loading data={<Skeleton height={35} width />}>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                        Stock:
                      </div>
                      <div className="p-2 flex items-center justify-center border relative">
                        <div className="text-neutral-600 text-[13px] capitalize font-bold font-['Dancing Script'] leading-[13px]">
                          {data.stock} products
                        </div>
                      </div>
                    </div>
                  </Loading>
                </div>
              </div>

              <Loading data={<Skeleton height={35} width />}>
                <div className="py-[18px] flex-col md:flex-row w-full bg-white shadow border border-white justify-center items-center gap-3 inline-flex">
                  <div className="p-2 bg-white gap-5 rounded-[170px] border border-neutral-200 justify-center items-center flex">
                    <button
                      onClick={() =>
                        quantity > 1 ? setQuantity(quantity - 1) : 0
                      }
                      className="w-[34px] h-[34px] relative flex item-center justify-center"
                    >
                      <div className="w-[34px] h-[34px] flex items-center justify-center">
                        {" "}
                        <CiCircleMinus width={34} h={34} />
                      </div>
                    </button>
                    <div className="w-1/2 text-center text-zinc-900 text-base font-normal font-['Neutra'] leading-normal">
                      {/* {select.filter(
                    (item) => item._id === (!!data === true && data._id) && item.quantity
                  )} */}
                      <input
                        type="number"
                        className="w-14 text-center border-0 outline-0"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(Number(e.target.value));
                        }}
                      />
                      {/* {!!select === true
                    ? select.map((item) => {
                        return (
                          <div key={item._id}>
                            {item._id === data._id && item.quantity}
                          </div>
                        );
                      })
                    : null} */}
                    </div>
                    <button
                      onClick={() =>
                        quantity >= 1 ? setQuantity(quantity + 1) : 0
                      }
                      className="w-[34px] h-[34px] relative flex items-center justify-center"
                    >
                      <div className="flex items-center justify-center ">
                        <IoIosAddCircleOutline width={34} h={34} />
                      </div>
                    </button>
                  </div>
                  <button
                    /* onClick={() => {
                  dispatch(addItem(Info)), setQuantity(1);
                }} */
                    disabled={!!data.stock === false}
                    className="h-[51px] px-10 py-4 disabled:cursor-not-allowed disabled:opacity-25 disabled:bg-zinc-500 bg-green-600 rounded-[43px] justify-center items-center gap-4 flex"
                  >
                    <span className="text-white text-base  font-semibold font-['Neutra'] leading-tight">
                      Add to Cart
                    </span>
                  </button>
                </div>
              </Loading>
            </div>
          </div>
        ) : (
          <h1>Loading ...</h1>
        )}
      </Modal>
      <Group position="center">
        <div className="w-10 h-10 group/main hover:bg-[#fdc936] shadow-xl bg-white rounded-full border flex items-center justify-center border-zinc-200 hover:border-0">
          <TfiEye
            size={25}
            height={25}
            width={25}
            onClick={open}
            className="group-hover/main:fill-white fill-black flex items-center justify-center "
          />
        </div>
      </Group>
    </>
  );
}
