import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Pokemon = () => {
  const [statNames, setStatNames] = useState([]);
  const [statValues, setStatValues] = useState([]);
  const [sprite, setSprite] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    consultarInformacion();
  }, []);

  const consultarInformacion = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    const Names = data.stats.map((item) => {
      return item.stat.name;
    });
    const Values = data.stats.map((item) => {
      return item.base_stat;
    });
    setStatNames(Names);
    setStatValues(Values);
    setSprite(data.sprites.front_default);
  };

  return (
    <>
      <div className="poke-container">
        <img src={sprite} alt="" />
        <div>
          <h2>{name}</h2>
          <div>
            {statNames.map((name, idx) => {
              return (
                <li key={idx}>
                  {name}: {statValues[idx]}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
