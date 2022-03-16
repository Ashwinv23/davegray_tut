import { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [newItem, setNewItem] = useState("");

  const updateItems = (items) => {
    setItems(items);
    localStorage.setItem("shopping list", JSON.stringify(items));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItems = [...items, { id, checked: false, name: item }];
    updateItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

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
    updateItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    updateItems(listItems);
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        addItem={addItem}
      />
      <Content
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer footer="Copyright &copy;" />
    </div>
  );
}

export default App;
