import { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SearchItem from "./components/SearchItem";

function App() {
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shopping list"))
  );

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
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer footer="Copyright &copy;" />
    </div>
  );
}

export default App;
