import React from "react";

export const Main = () => {
  return (
    <>
      <div className="header">
        <div className="background">
          <img src="/The_Marvel_Universe.webp" alt="" />
        </div>
        <div className="search-bar">
          <img src="public/Marvel-Logo.png" alt="" />
          <input type="search" placeholder="Search Here" className="search" />
        </div>
      </div>
    </>
  );
};
