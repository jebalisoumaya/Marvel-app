import React, { useState } from "react";
import { Card } from "./Card";
import { useEffect } from "react";

export const Main = () => {
  const [data, setData] = useState(null);
  const [item, setItem] = useState([]);
  const url =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9b3fdd6b19f60730f155e3b892f43a57&hash=1665b0436d5d2122ca09a429b48304d6";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error when  fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    if (data && data.data && data.data.results) {
      setItem(data.data.results);
    }
  }, [data]);

  return (
    <>
      <div className="header">
        <div className="background">
          <img src="/The_Marvel_Universe.webp" alt="" />
        </div>
        <h1 className="title">Marvel Assemble</h1>
        <div className="search-bar">
          <input type="search" placeholder="Search Here" className="search" />
        </div>
      </div>
      <div className="content">
        {!item ? <p>Not Found</p> : <Card data={item} />}
      </div>
    </>
  );
};
