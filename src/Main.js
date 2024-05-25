import React, { useState, useEffect } from "react";
import { Card } from "./Card";

export const Main = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9b3fdd6b19f60730f155e3b892f43a57&hash=1665b0436d5d2122ca09a429b48304d6"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result.data.results);
      } catch (error) {
        console.error("Error when fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=9b3fdd6b19f60730f155e3b892f43a57&hash=1665b0436d5d2122ca09a429b48304d6`
    );
  };

  const fetchRandomCharacter = async () => {
    const randomOffset = Math.floor(Math.random() * 1493); // There are 1493 characters in the Marvel API
    const randomUrl = `https://gateway.marvel.com/v1/public/characters?limit=1&offset=${randomOffset}&ts=1&apikey=9b3fdd6b19f60730f155e3b892f43a57&hash=1665b0436d5d2122ca09a429b48304d6`;
    setUrl(randomUrl);
  };

  return (
    <>
      <div className="header">
        <div className="background">
          <img src="/The_Marvel_Universe.webp" alt="" />
        </div>
        <h1 className="title">Welcome to Marvel Assemble!</h1>
        <p className="welcome-text">
          Where you can find all your favorite Marvel characters and their
          related comics. No Shrek here, sadly.
        </p>

        <div className="search-bar">
          <input
            type="search"
            placeholder="Search Here"
            className="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchMarvel();
              }
            }}
          />
        </div>
      </div>
      <div className="content">
        <button
          className="random-character-btn "
          onClick={fetchRandomCharacter}
        >
          Unleash the random! Click!
        </button>
        {!data ? <p>Loading...</p> : <Card data={data} />}
      </div>
      <footer className="footer">
        <p className="footer-text">
          This is the Footer btw, so just keep scrolling
        </p>
        <p className="footer-text">
          In loving memory of Stan "The Man" Lee - He'd be proud of this mess!
          (not)
        </p>
        <p className="footer-text">
          © 2024 Marvel Assemble. All rights reversed. If you steal this, Thanos
          will find you.
        </p>
      </footer>
    </>
  );
};
