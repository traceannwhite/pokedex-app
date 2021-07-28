import React, { useState, useEffect } from "react";
import AllPokemon from "../components/AllPokemon";
import SinglePokemon from "../components/SinglePokemon";

const PokedexMain = (props) => {
  return (
    <div className="main">
      <div className="pokedex">
        <AllPokemon pokedex={props.pokedex} />
      </div>
      <div>
        <h1>Aside</h1>
        <SinglePokemon />
      </div>
    </div>
  );
};

export default PokedexMain;
