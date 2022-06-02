import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import Footer from "../components/layout/Footer";

function About() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className=" fixed z-10 inset-0 overflow-y-auto ">
            <div className=" flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="container mx-auto relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:w-full">
                  <div>
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-f flex justify-center">
                      <div className="sm:flex sm:items-start">
                        <p>ABOUT US</p>
                        <div className=" mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <p>Built for Saas and E-commerce</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <p>
                        Our tools are easy to set up and use with a user
                        friendly dashboard that enables you to set up, launch,
                        automate and manage multi-affiliate campaigns in 5
                        minutes,
                      </p>
                    </div>

                    <div className="flex justify-center px-9 py-5 mx-44 mt-10 mb-10">
                      <p className="text-5xl">
                        Metricks was developed because just like you, we needed
                        a product that could give us good value.
                      </p>
                    </div>

                    <div className="m-4 flex justify-evenly mt-10 mb-10">
                      <div className=" m-9 p-8">
                        <p>01</p>
                        <p className="mb-5">
                          {" "}
                          <hr className="w-10 inline-block m-1" />
                          WHY US?
                        </p>
                        <p className="text-justify">
                          We pride ourselves in eur ability to innevate and
                          create world-class tools that provide reliable and
                          effielent touchpoints between advertisers and
                          affiliates,
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
                      <div className="shadow m-9 ml-4 p-8 ">
                        <p>02</p>
                        <p className="mb-5">
                          {" "}
                          <hr className="w-10 inline-block m-1" />
                          GROWING WITH YOU
                        </p>
                        <p className="mb-5 text-justify">
                          Leveraging the best technology, we have developed an
                          all-in- one affillate marketing tracking software, a
                          genius tool to help you track, automate and optimize
                          your influencer campaigns, all from one dashboard
                        </p>
                        <p className="mt-5 text-justify">
                          Our team of experts are constantly brainstorming,
                          testing and developing new solutions with only one
                          thing in mind - your business growth. Your success is
                          our success and by giving you the tools you need to
                          scale, we grow as well.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 mt-10">
                      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                          <span className="block">Ready to dive in?</span>
                          <span className="block text-indigo-600">
                            Start your free trial today.
                          </span>
                        </h2>
                        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                          <div className="inline-flex rounded-md shadow">
                            <a
                              href="#"
                              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                              Get started
                            </a>
                          </div>
                          <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                              href="#"
                              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Footer />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default About;
