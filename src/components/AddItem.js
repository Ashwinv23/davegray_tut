import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        value={newItem}
        ref={inputRef}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <label htmlFor="addItem" autoFocus></label>
      <button onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
