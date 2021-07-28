import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import PokedexMain from "./Pages/PokedexMain";
import MyTeam from "./Pages/MyTeam";
import Footer from "./components/Footer";
import AllPokemon from "./components/AllPokemon";

function App() {
  const [team, setTeam] = useState([]);

  const [pokedex, setPokedex] = useState([]);

  // const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  //function to get the pokemon from the URL
  const getPokedex = async () => {
    //request the data
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    //parsing the data
    const data = await response.json();
    //storing the data in state
    setPokedex(data.results);
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <PokedexMain pokedex={pokedex} />
        </Route>
        <Route path="/MyTeam">
          <MyTeam />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
