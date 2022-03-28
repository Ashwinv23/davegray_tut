import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleChange, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChange(item.id)}
      />
      <label style={{ textDecoration: item.checked ? "line-through" : null }}>
        {item.name}
      </label>
      <FaTrashAlt className="trash" onClick={() => handleDelete(item.id)} />
    </li>
  );
};

export default LineItem;
