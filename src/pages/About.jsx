import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { FaArrowRight } from "react-icons/fa";

function About() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <div className=" fixed z-10 inset-0 overflow-y-auto container mx-auto ">
        <div className=" flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <div>
            <Header />
            <div className="bg-oil text-white">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">
                <h2 className="t font-extrabold tracking-tight text-white">
                  <p className=" px-52 text-sm">
                    {" "}
                    <hr className="w-10 inline-block m-1" />
                    ABOUT US
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl mt-">
                    <p className="block m-12 px-64 text-7xl">
                      Built For Saas and E-commerce
                    </p>
                  </p>
                </h2>
              </div>

              <div className="bg-oil px-4   w-1/4 flex justify-end py-7">
                <p className="flex justify-end text-right">
                  Our tools are easy to set up and use with a user friendly
                  dashboard that enables you to set up, launch, automate and
                  manage multi-affiliate campaigns in 5 minutes,
                </p>
              </div>
            </div>

            <div className=" bg-oil text-white">
              <div className="flex justify-center px-9 py-5 mx-44  ">
                <p className="text-5xl m-7">
                  Metricks was developed because just like you, we needed a
                  product that could give us good value.
                </p>
              </div>
            </div>

            <div className=" flex justify-evenly  py-24 bg-oil text-white">
              <div className=" m-9 p-8">
                <p>01</p>
                <p className="mb-5">
                  {" "}
                  <hr className="w-10 inline-block m-1" />
                  WHY US?
                </p>
                <p className="text-justify">
                  We pride ourselves in eur ability to innevate and create
                  world-class tools that provide reliable and effielent
                  touchpoints between advertisers and affiliates,
                </p>

                <p className="mt-5 pr-10 text-justify">
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  <br />
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  <br />
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  <br />
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  <br />
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  {"\u2022"}
                  <br />
                </p>
              </div>
              <div className="shadow m-9 ml-4 p-8 bg-pou ">
                <p>02</p>
                <p className="mb-5">
                  {" "}
                  <hr className="w-10 inline-block m-1" />
                  GROWING WITH YOU
                </p>
                <p className="mb-5 text-justify">
                  Leveraging the best technology, we have developed an all-in-
                  one affillate marketing tracking software, a genius tool to
                  help you track, automate and optimize your influencer
                  campaigns, all from one dashboard
                </p>
                <p className="mt-5 text-justify">
                  Our team of experts are constantly brainstorming, testing and
                  developing new solutions with only one thing in mind - your
                  business growth. Your success is our success and by giving you
                  the tools you need to scale, we grow as well.
                </p>
              </div>
            </div>

            <div className="bg-oil">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span className="block text-white">Got a Questions ?</span>
                  <p className="text-sm mt-5 text-gray-300">
                    Show how Metrics can help your business grow with best
                    affiliate marketing tracking software
                  </p>
                  <p className="text-sm mt-5 text-pink-300">
                    Contact Us <FaArrowRight />{" "}
                  </p>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0"></div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
