/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function ContactUs() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="container">
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-full flex-col overflow-y-scroll bg-twitter text-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6"></div>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">
                          {/* Replace with your content */}
                          <div className="absolute inset-0 px-4 sm:px-6 mt-6 mb-5">
                            <form className="mx-6">
                              <div className="flex justify-center">
                                <p className="text text-xl text-center font-extrabold">
                                  Hey, we are still in the works, but you can
                                  still send us a message{" "}
                                </p>
                              </div>

                              <div className="mt-5">
                                <label htmlFor="">First Name</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="px-4 mt-5 mb-5 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                  placeholder="Enter your first name"
                                />

                                <label htmlFor="">Last Name</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="px-4 mt-5 mb-5 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                  placeholder="Enter your Last Name"
                                />

                                <label htmlFor="">Email address</label>
                                <input
                                  type="email"
                                  name="email"
                                  className="px-4 mt-5 mb-5 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                  placeholder="Enter Your Email address"
                                />

                                <label htmlFor="">
                                  Tell Us What You Need Help With:
                                </label>
                                <textarea
                                  className="px-4 mt-5 mb-5 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                                  placeholder="Enter A Topic, Like 'Channel Problem...' "
                                  rows={4}
                                ></textarea>

                                <button
                                  type="button"
                                  class="bg-indigo-600 text-white text-sm  leading-6 font-medium py-2 px-3 rounded-full"
                                >
                                  Get Started
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* /End replace */}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}

export default ContactUs;
