import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Groceries" />
      <Content />
      <Footer footer="Copyright &copy;" />
    </div>
  );
}

export default App;
