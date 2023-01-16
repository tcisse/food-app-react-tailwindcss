import React from "react";
import { categories } from "../data/data.js";

export default function Category() {
  console.log(categories);
  return (
    <div>
      <h1>Top Rated Menu Items</h1>
      {/* Categories */}
      {categories.map((item, index) => (
        <div></div>
      ))}
    </div>
  );
}
