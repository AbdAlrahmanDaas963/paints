import React from "react";

import { useLocation } from "react-router-dom";
import { getCategoryById } from "../../store";

function Gallery() {
  const location = useLocation();
  const { category } = location.state || {};

  const currentCategory = getCategoryById(category.id);
  console.log("currentCategory", currentCategory);

  if (!category) {
    return <div>No category selected</div>;
  }
  return (
    <div>
      <h1>{category.id}</h1>
      <h1>{currentCategory.name}</h1>
    </div>
  );
}

export default Gallery;
