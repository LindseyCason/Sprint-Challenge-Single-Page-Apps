import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";




//this page to bring in the characters
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  //the data might be "results" here according to api info 

  const [char, setChar] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          const char = (response.data.results)
          // console.log(char) //
          setChar(char);
        })
        .catch(error => {
          console.error('Error: ', error);
        });
    
    
    // getChar();
  }, []);

  return (
    <section className="character-list grid-view">
        {char.map(chars => (
        <CharacterCard
         key={chars.id}
         name={chars.name}
         status={chars.status}
         species={chars.species}
         gender={chars.gender}
         origin={chars.origin.name} //This one has an additional URL but not necessary
         image={chars.image} //this one is a URL
         episodes={chars.episedes} //this is a URL
          />
      ))}
    </section>
  );
}
