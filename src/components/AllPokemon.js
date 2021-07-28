import React from "react";

const AllPokemon = (props) => {
  const loaded = () => {
    return (
      <div>
        {props.pokedex.map((pokemon, index) => {
          return <h1>{pokemon.name}</h1>;
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>No List to Display</h1>;
  };

  return props ? loaded() : loading();
};

export default AllPokemon;
