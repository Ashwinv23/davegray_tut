import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <label htmlFor="addItem" autoFocus></label>
      <button>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
