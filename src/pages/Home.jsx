function Home() {
  return (
    <div className="container mx-auto items-center bg-twitter text-white h-100">
      <div className="flex justify-center pt-24">
        <p className="text text-4xl text-center font-extrabold">
          SOMETHING AWESOME IS <br /> COMING SOON
        </p>
      </div>
      <div className="flex justify-center mt-6 ">
        <p className="text text-sm text-center">
          Your all-in-one affiliate marketing tracking software track, automate
          and <br /> optimize your campaigns
        </p>
      </div>

      <div className="mt-6 mb-4">
        <div className="flex justify-center m-1">
          <div className="w-20 px-2 py-2 shadow-sm text-center bg-white text-gray-700 m-1 rounded">
            <div className="font-bold text-3xl mb-2">7</div>
            <p className=" text-xs">Days</p>
          </div>
          <div className="w-20 text-center px-2 py-2 shadow-sm bg-white text-gray-700  m-1 rounded">
            <div className="font-bold text-3xl mb-2">24</div>
            <p className="text-xs">Hours</p>
          </div>
          <div className="w-20 px-2 text-center py-2 shadow-sm bg-white text-gray-700  m-1 rounded">
            <div className="font-bold text-3xl mb-2">54</div>
            <p className="text-xs">Minutes</p>
          </div>
          <div className="w-20 px-2 text-center py-2 shadow-sm bg-white text-gray-700  m-1 rounded">
            <div className="font-bold text-3xl mb-2">11</div>
            <p className="text-xs">Second</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-5">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-fiy py-2">
            <input
              className="appearance-none text-xs bg-transparent border-none w-full text-gray-700 ml-3 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="First Name.."
              aria-label="Full name"
            />
            <input
              className="appearance-none text-xs bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Last Name.."
              aria-label="Full name"
            />
          </div>
        </form>
      </div>

      <div className="flex justify-center pt-5 pb-10">
        <div className="  px-2">
          <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
            <form className="flex flex-row">
              <input
                className="h-16 bg-gray-100 text-grey-darker py-2 text-xs text-grey-darkest border border-gray-100 font-bold w-72   outline-none rounded-full text-gray-600"
                type="text"
                placeholder="Enter your email address..."
              />
              <span className="flex items-center bg-blue-500 rounded-full  border-0 px-3 font-bold text-grey-100">
                <button className="bg-gredient-dark hover:bg-gredient-light text-xs text-white py-3 px-6 rounded-full">
                  JOIN OUR WAITING LIST
                </button>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
