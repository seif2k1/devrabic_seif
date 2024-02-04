import React, { useState } from "react";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";

const Setting = ({ info }) => {
  const [passwordIsShow, setPasswordIsShow] = useState(false);
  return (
    <div className="gap-y-[24px] w-full h-full flex flex-col  items-start justify-between">
      <div className="w-full  flex flex-col items-center justify-between bg-white rounded-lg border border-neutral-200  ">
        <div className="w-full h-[62px] px-6  py-4 bg-white rounded-tl-lg rounded-tr-lg shadow justify-start items-center inline-flex">
          <div className="text-zinc-900 text-xl font-medium font-['Neutra'] leading-[30px]">
            Account Settings
          </div>
        </div>
        <div className="w-full  h-full flex flex-col lg:flex-row-reverse items-center justify-between">
          <div className="w-full md:w-[30%] h-full flex flex-col items-center justify-center gap-[20px]">
            <img className="w-56 h-56 rounded-full" src={info?.image} />
            <button className="w-[167px] h-[45px] hover:text-white hover:bg-[#fdc936] px-8 py-3.5 bg-white rounded-[43px] border-2 border-[#fdc936] justify-center items-center gap-3 inline-flex text-black text-sm font-semibold font-['Neutra'] leading-[16.80px]">
              Chose Image
            </button>
          </div>
          <div
            className="w-full md:w-[70%] gap-4 h-full flex flex-col items-center md:items-start py-[24px] justify-between px-[24px]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full lg:flex-row flex-col lg:h-[76px] justify-start items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  User Name
                </div>
                <input
                  type="text"
                  defaultValue={info?.username}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Email
                </div>
                <input
                  type="text"
                  defaultValue={info?.email}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="w-full lg:flex-row flex-col lg:h-[76px] justify-start items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  First Name
                </div>
                <input
                  type="text"
                  defaultValue={info?.firstName}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Maiden Name
                </div>
                <input
                  type="text"
                  defaultValue={info.maidenName}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Last Name
                </div>
                <input
                  type="text"
                  defaultValue={info.lastName}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="w-full lg:flex-row flex-col lg:h-[76px] justify-start items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Number Phone
                </div>
                <input
                  type="text"
                  defaultValue={info?.phone}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col overflow-hidden justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Current Password
                </div>

                <div className="relative w-full">
                  <input
                    type={`${passwordIsShow === true ? "text" : "password"}`}
                    defaultValue={info.password}
                    readOnly
                    className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px] relative  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                    placeholder="Password"
                  />
                  <div className="w-5 h-5 right-[3%] top-[30%] flex items-center justify-center absolute">
                    {passwordIsShow === false ? (
                      <LiaEyeSlashSolid
                        onClick={() => setPasswordIsShow(!passwordIsShow)}
                      />
                    ) : (
                      <LiaEyeSolid
                        onClick={() => setPasswordIsShow(!passwordIsShow)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:flex-row flex-col lg:h-[76px] justify-between items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Address
                </div>
                <input
                  type="text"
                  defaultValue={info?.address?.address}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  City
                </div>
                <input
                  type="text"
                  defaultValue={info?.address?.city}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="w-full lg:flex-row flex-col lg:h-[76px] justify-between items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Postal Code
                </div>
                <input
                  type="text"
                  defaultValue={info?.address?.postalCode}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  State
                </div>
                <input
                  type="text"
                  defaultValue={info?.address?.state}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
            </div>

            <button className="w-[167px] h-[45px] px-8 py-3.5 bg-[#fdc936] rounded-[43px] justify-center items-center gap-3 inline-flex">
              <div className="text-white text-sm font-semibold font-['Neutra'] leading-[16.80px]">
                Save Changes
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full  flex flex-col items-center justify-between bg-white rounded-lg border border-neutral-200  ">
        <div className="w-full h-[62px] px-6  py-4 bg-white rounded-tl-lg rounded-tr-lg shadow justify-start items-center inline-flex">
          <div className="text-zinc-900 text-xl font-medium font-['Neutra'] leading-[30px]">
            Personel Information
          </div>
        </div>
        <div className="w-full  h-full flex items-center justify-between">
          <div
            className="w-full gap-4 h-full flex flex-col items-center md:items-start py-[24px] justify-between px-[24px]"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full flex-col lg:flex-row lg:h-[76px] justify-start items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Birth Date
                </div>
                <input
                  type="text"
                  defaultValue={info?.birthDate}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Age
                </div>
                <input
                  type="text"
                  defaultValue={info?.age}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Height
                </div>
                <input
                  type="text"
                  defaultValue={info?.height}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Weight
                </div>
                <input
                  type="text"
                  defaultValue={info?.weight}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
            </div>
            <div className="w-full flex-col lg:flex-row lg:h-[76px] justify-start items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Gender
                </div>
                <input
                  type="text"
                  defaultValue={info?.gender}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>

              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Eyes
                </div>
                <input
                  type="text"
                  defaultValue={info?.eyeColor}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Hair & type
                </div>
                <input
                  type="text"
                  defaultValue={
                    (info?.hair?.hairColor || info?.hair?.color) &&
                    info?.hair?.type
                  }
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
            </div>
            <div className="w-full flex-col lg:flex-row lg:h-[76px] justify-start items-start gap-1.5 inline-flex">
              <div className="w-full flex-col justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  University
                </div>
                <input
                  type="text"
                  defaultValue={info?.university}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>

              <div className="flex-col w-full justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  User Agent
                </div>
                <input
                  type="text"
                  defaultValue={info?.userAgent}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
            </div>
            <div className="w-full flex-col lg:flex-row lg:h-[76px] justify-between items-start gap-1.5 inline-flex">
              <div className="flex-col w-full justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Ip
                </div>
                <input
                  type="text"
                  defaultValue={info?.ip}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>

              <div className="flex-col w-full justify-start items-start gap-1.5 inline-flex">
                <div className="text-zinc-900 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Mac Address
                </div>
                <input
                  type="text"
                  defaultValue={info?.macAddress}
                  readOnly
                  className="w-full rounded-md border focus:outline-[#fdc936] border-neutral-200 py-3.5 justify-start items-center inline-flex px-[20px] h-[49px]  text-stone-500 text-base font-normal font-['Neutra'] leading-tight "
                  placeholder="First Name"
                />{" "}
              </div>
            </div>

            <button className="w-[167px] h-[45px] px-8 py-3.5 bg-[#fdc936] rounded-[43px] justify-center items-center gap-3 inline-flex">
              <div className="text-white text-sm font-semibold font-['Neutra'] leading-[16.80px]">
                Save Changes
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
