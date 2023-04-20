import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Pokemones() {
  const [pokemon, setPokemon] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    consultarInformacion();
  }, []);

  const consultarInformacion = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data.results);
  };

  const navigate = useNavigate();
  const irAPokemones = () => {
    navigate(`/pokemones/${name}`);
  };

  return (
    <div className="contacto-container">
      <h1>Selecciona tu Pokemón</h1>

      <div className="form-container">
        <select onChange={({ target }) => setName(target.value)}>
          <option>Pokemones</option>
          {pokemon.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
        <button onClick={irAPokemones}>!Yo Te Elijo!</button>
      </div>
    </div>
  );
}

export default Pokemones;
