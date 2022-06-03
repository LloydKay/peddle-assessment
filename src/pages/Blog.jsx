import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import mrt from "../components/assets/mrt.png";

function Blog() {
  return (
    <>
      <div className="container mx-auto bg-gray-100">
        <div className="bg-oil text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">
            <h2 className="t font-extrabold tracking-tight text-white">
              <p className="mb-5 px-52 text-sm">
                {" "}
                <hr className="w-10 inline-block m-1" />
                BLOG
              </p>
              <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-">
                <p className="block px-64">Articles and News</p>
              </p>
            </h2>
          </div>
        </div>

        <div className="mt-5 container m-12 flex justify-evenly">
          <div className="w-full m-10">
            <p className="text-2xl mb-5">Latest From The Blog</p>
            <p className="text-justify">
              Lorem ipsum, dolor sit Amet consectetur adipisicing elit. Porro,
              modi? Pariatur inventore deserunt ipsum nulla veritatis nesciunt
              mollitia veniam error earum
            </p>
          </div>
          <div className="m-6 w-full p-8 ">
            <div className="relative flex w-2/4 flex-wrap items-stretch mb-3">
              <input
                type="text"
                placeholder="Placeholder"
                className=" px-3 py-4 rounded-lg placeholder-slate-300 text-slate-600 relative bg-white  text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pr-10"
              />
              <span className="z-10 h-full leading-snug font-normal  text-center text-slate-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-4">
                <FaSearch />
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {/* <!--Card 1--> */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full p-3" src={mrt} alt="Mountain" />
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>
            {/* <!--Card 2--> */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full p-3" src={mrt} alt="Mountain" />
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>

            {/* <!--Card 3--> */}
            <div className="rounded overflow-hidden shadow-lg bg-white">
              <img className="w-full p-3" src={mrt} alt="Mountain" />
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>

            {/* <!--Card 4--> */}
            <div className="rounded overflow-hidden shadow-lg bg-white my-5">
              <img className="w-full p-3" src={mrt} alt="Mountain" />
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>

            {/* <!--Card 5--> */}
            <div className="rounded overflow-hidden shadow-lg bg-white my-5">
              <img className="w-full p-3" src={mrt} alt="Mountain" />
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>

            {/* <!--Card 6--> */}
            <div className="rounded overflow-hidden shadow-lg bg-white my-5">
              <img className="w-full p-3" src={mrt} alt="Mountain" />
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="mt-5 container mx-12  flex justify-evenly">
            <div className="w-full ">
              <p className="text-4xl mb-5">Recent Articles</p>
              <p className="text-justify">
                Lorem ipsum, dolor sit Amet consectetur adipisicing elit. Porro,
                modi? Pariatur inventore deserunt ipsum nulla veritatis nesciunt
                mollitia veniam error earum
              </p>
            </div>
            <div className="m-6 w-full p-8 "></div>
          </div>

          <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div className="rounded overflow-hidden shadow-lg bg-white my-5">
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg bg-white my-5">
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg bg-white my-5">
              <div className="px-6 py-4">
                <div className=" text-xs mb-5 w-3/4">
                  <p>SEPTEMBER 6, 2021. FEATURED ARTICLE . AFFILIATE</p>
                </div>
                <p className="mt-3 font-bold">
                  12 Popup Use Cases <br /> To Increase Conversions
                </p>
                <p className="mt-3 text-gray-700 text-sm ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 text-pink-500">
                <p className="mb-5  text-sm">
                  {" "}
                  <hr className="w-14 inline-block m-1 mr-2" />
                  READ MORE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <button className=" item-center py-2 px-4 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            LOAD MORE
          </button>
        </div>

        <div className="bg-blue-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block text-white">
                What To Know More About Metrics ?
              </span>
              <p className="text-sm mt-5 text-gray-300">
                Learn who we are and what drives us.
              </p>
              <p className="text-sm mt-5 text-pink-300">
                Contact Us <FaArrowRight />{" "}
              </p>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
