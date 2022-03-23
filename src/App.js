import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SearchItem from "./components/SearchItem";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Fetch failed");
        const listItems = await response.json();
        setItems(listItems);
        setFetchErr(null);
      } catch (err) {
        setFetchErr(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const listItems = [...items, { id, checked: false, name: item }];
    setItems(listItems);
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
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
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
      <section>
        {isLoading && <p>Loading...</p>}
        {fetchErr && <h3 style={{ color: "red" }}>Error: {fetchErr}</h3>}
        {!fetchErr && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )}
            handleChange={handleChange}
            handleDelete={handleDelete}
          />
        )}
      </section>
      <Footer items={items} />
    </div>
  );
}

export default App;
