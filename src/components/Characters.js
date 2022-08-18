import React from "react";
import { useQuery } from "react-query"; //5. install and import react query
import Character from "./Character";
export default function Characters() {
  const fetchCharecters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=2");
    return response.json();
  };
  //6. "characters" is a unique key we provided, fetchCharacters is the function we want to call
  //7. status - status of the fetch - is it loading, error etc..
  const { data, status } = useQuery("characters", fetchCharecters);
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div className="characters">
      {data.results.map(
        (
          character //8. if no error and loading
        ) => (
          <Character character={character} />
        )
      )}
    </div>
  );
}

/*
import React, { useState, useEffect } from 'react'

export default function Characters() {
    const [characters, setCharecters] = useState([]); //2. to get the characters into component

    const fetchCharecters = async() => { //1. to fetch data from API
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        console.log(data);
        setCharecters(data.results);
    };

    useEffect(() => { //3. to call the function on initial load
        fetchCharecters();
    }, []);
  return (
    <div>
      { 4. here we are going to iterate over the characters}
      {characters.map(character => (
        <div>{character.name}</div>
      ))}
    </div>
  )
}

*/
