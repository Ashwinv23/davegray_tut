import React from "react";
import LineItem from "./LineItem";

const ItemsList = ({ items, handleChange, handleDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <LineItem
          item={item}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ItemsList;
