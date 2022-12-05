import "./App.css";
import Card from "./modules/Card/Card";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards">
        <Card title="To-do" />
        <Card title="Doing" />
        <Card title="Done" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
