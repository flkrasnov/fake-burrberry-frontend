import React, { Component } from "react";

export default () => {
  return (
    <div className="product-color">
      <p className="product-color-text">Colour: Honey</p>

      <div className="product-color-toggler">
        <button
          className="product-color-toggler-btn color-toggle-black"
          type="button"
        >
          black color
        </button>
        <button
          className="product-color-toggler-btn product-color-toggler-btn-active color-toggle-honey"
          type="button"
        >
          honey color
        </button>
      </div>
    </div>
  );
};
