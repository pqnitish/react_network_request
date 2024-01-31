import React, { useState } from "react";
import DataDisplay from "./components/DataDisplay";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      let respon = await fetch("https://jsonplaceholder.typicode.com/posts");
      let finalData = await respon.json();
      setData(finalData);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <h1>React Network Request Demo</h1>
      {isLoading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <DataDisplay data={data} />
      )}
      <button onClick={fetchData} disabled={isLoading}>Fetch Data</button>
    </div>
  );
      }

export default App;
