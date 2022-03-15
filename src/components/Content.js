import React, { useState } from "react";
import ItemsList from "./ItemsList";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Get bike serviced",
      checked: false,
    },
    {
      id: 2,
      name: "Get car repaired",
      checked: false,
    },
    {
      id: 3,
      name: "Get cycle rented",
      checked: true,
    },
  ]);

  const handleChange = (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
    localStorage.setItem("shopping list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shopping list", JSON.stringify(listItems));
  };

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
