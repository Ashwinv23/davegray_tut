import React from "react";
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
        <p style={{ margin: "2rem 0" }}>Your list is empty !</p>
      )}
    </main>
  );
};

export default Content;
