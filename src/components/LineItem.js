import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleChange, handleDelete }) => {
  return (
    <div>
      <li className="item" key={item.id}>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => handleChange(item.id)}
        />
        <label style={{ textDecoration: item.checked ? "line-through" : null }}>
          {item.name}
        </label>
        <FaTrashAlt onClick={() => handleDelete(item.id)} />
      </li>
    </div>
  );
};

export default LineItem;
