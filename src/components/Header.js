import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <div>
    //     <img src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pikachu.gif"></img>
    // </div>
    <div className="nav">
      <Link to="/">
        <div>Pokedex</div>
      </Link>
      <img
        src="https://rawcdn.githack.com/jkeohan/pokedex/5f567555602a7702380260e0fa5f300a3e083b26/src/pokemon-logo.png"
        className="Pokemon"
      ></img>
      <Link to="/MyTeam">
        <div>MyTeam</div>
      </Link>
    </div>
  );
};

export default Header;
