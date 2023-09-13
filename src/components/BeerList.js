import React, { useState, useEffect } from "react";
import axios from "axios";

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search beers by name"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{height: "40px", width: "300px", textAlign: "center", borderWidth: "4px", borderColor: "#70d7ba"}}
      />
      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <h2 style={{color:"#468573"}}>{beer.name}</h2>
            <p>{beer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeerList;
