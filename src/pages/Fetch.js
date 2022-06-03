import axios from "axios";
import { useEffect, useState } from "react";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

function Fetch() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `${GITHUB_URL}/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&limit=30`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setRepos(data);
  };

  return (
    <>
      <div>
        {repos.length > 0 && (
          <ul>
            {repos.map((repos) => (
              <li key={repos.id}>{repos.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default Fetch;
