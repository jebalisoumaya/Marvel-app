import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import config from "./config.json";

export const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch character data
        const characterResponse = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=${config.MARVEL_API_KEY}&hash=${config.MARVEL_HASH}`
        );
        const characterResult = await characterResponse.json();
        setItem(characterResult.data.results[0]);

        // Fetch comics data related to the character
        const comicsResponse = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=${config.MARVEL_API_KEY}&hash=${config.MARVEL_HASH}`
        );
        const comicsResult = await comicsResponse.json();
        setComics(comicsResult.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="box-content">
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
            />
          </div>
          <div className="left-box">
            <h3>{item.name}</h3>
            <h4>
              {item.description || "404 NOT FOUND, HYDRA STOLE THIS DATA."}
            </h4>
          </div>
        </div>
      )}
      <div className="comics-section">
        <h2>Related Comics</h2>
        {!comics.length ? (
          <p>No related comics found.</p>
        ) : (
          <div className="comics-list">
            {comics.map((comic) => (
              <div className="comic-card" key={comic.id}>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic.title}
                />
                <div className="comic-title">
                  <h3>{comic.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
