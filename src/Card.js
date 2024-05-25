import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ data }) => {
  const navigate = useNavigate();

  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((item) => (
        <div
          className="card"
          key={item.id}
          onClick={() => navigate(`/${item.id}`)}
        >
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.name}
          />
          <div className="sub_title">
            <h3>{item.name}</h3>
          </div>
        </div>
      ))}
    </>
  );
};
