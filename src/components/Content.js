import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

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
        <ol>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <label
                style={{ textDecoration: item.checked ? "line-through" : null }}
              >
                {item.name}
              </label>
              <FaTrashAlt onClick={() => handleDelete(item.id)} />
            </li>
          ))}
        </ol>
      ) : (
        <p>Your list is empty !</p>
      )}
    </main>
  );
};

export default Content;
