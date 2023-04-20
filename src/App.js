import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Pokemones from "./pages/Pokemones";
import NotFound from "./pages/NotFound";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
