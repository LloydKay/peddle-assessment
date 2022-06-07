import axios from "axios";
import { useEffect, useState } from "react";

function Fetch() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=created:%3E2021-08-13&sort=stars&order=desc`
    );
    const data = await res.json();
    console.log(data);
    setRepos(data.items);
  };

  return (
    <>
      <div>
        {repos.length > 0 && (
          <ul>
            {repos.map((repos, id) => (
              <li key={id}>
                <div className="w-full mx-auto lg:w-10/12 m-10 p-10">
                  <div
                    className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 "
                    // key={index}
                  >
                    <div className="custom-card-image mb-6 md:mb-0">
                      <img src={repos.owner.avatar_url} alt="" />
                    </div>

                    <div className="col-span-2 mx-12">
                      <div className="mb-6 mx-7">
                        <h1 className="text-3xl card-title">
                          {repos.owner.login}
                        </h1>
                        <p>{repos.description}</p>
                      </div>

                      <div className="mx-7">
                        <span className="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600">
                          <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                          </svg>
                          <span className="ml-1">
                            Stars: {repos.stargazers_count}
                          </span>
                        </span>

                        <span className="inline-flex items-center m-2 px-3 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-red-600">
                          <svg
                            className="w-4 h-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                          </svg>
                          <span className="ml-1">
                            Issues: {repos.open_issues_count}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* {user?.address?.city || user.city} */}
      {/* {repos.map((item, i) => (
        <div key={i}>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
          <div>
            {item.arr.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
        </div>
      ))} */}
    </>
  );
}
export default Fetch;
