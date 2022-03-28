import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SearchItem from "./components/SearchItem";
import apiReq from "./components/apiReq";

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

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, name: item };
    const listItems = [...items, newItem];
    setItems(listItems);
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    };
    const response = await apiReq(API_URL, postOptions);
    if (response) setFetchErr(response);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const handleChange = async (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
    const item = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: item[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const response = await apiReq(reqUrl, updateOptions);
    if (response) setFetchErr("Update failed");
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const delOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const response = await apiReq(reqUrl, delOptions);
    if (response) setFetchErr(response);
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
      {/* <Footer items={items} /> */}
    </div>
  );
}

export default App;
