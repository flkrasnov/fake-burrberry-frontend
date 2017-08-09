import React, { Component } from "react";

export default () => {
  return (
    <div className="product-buttons">
      <button
        className="product-buttons-btn product-buttons-btn-black"
        type="button"
      >
        Select a size
      </button>
      <button
        className="product-buttons-btn product-buttons-btn-white"
        type="button"
      >
        Find in store
      </button>

      <button className="product-buttons-btn-text" type="button">
        NEED SIZE HELP?
      </button>
    </div>
  );
};
