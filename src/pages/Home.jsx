import pikachu from "../pikachu.png";

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido Maestro Pokemón</h1>
      <div className="main-img-container">
        <img className="main-img" src={pikachu} alt="" />
      </div>
    </div>
  );
}

export default Home;
