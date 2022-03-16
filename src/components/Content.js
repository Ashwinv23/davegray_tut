import React, { useState } from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, setItems, handleChange, handleDelete }) => {
  return (
    <main className="main">
      {items.length ? (
        <ul>
          <ItemsList
            items={items}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        </ul>
      ) : (
        <p>Your list is empty !</p>
      )}
    </main>
  );
};

export default Content;
