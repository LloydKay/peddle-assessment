import axios from "axios";
import { useEffect, useState } from "react";

function Fetch() {
  const [repos, setRepos] = useState([]);

  const fetchData = () => {
    fetch(
      // "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRepos(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {repos.length > 0 && (
          <ul>
            {repos.map((repos) => (
              <li key={repos.id}>{repos.forks}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default Fetch;
