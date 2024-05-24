import React from "react";

export const Card = ({ data }) => {
  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div className="card">
                <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt=""
                />

                <div className="sub_title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};
