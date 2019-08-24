import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

import axios from "axios";

export default function LocationsList() {

  const [loc, setLoc] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios
        .get('https://rickandmortyapi.com/api/location/')
        .then(response => {
          const loc = (response.data.results) //This works
          setLoc(loc);
        })
        .catch(error => {
          console.error('Error: ', error);
        });
    
  }, []); //Dependecy array in place

  return (
    
    <section className="location-list grid-view">
        {loc.map(locs => (
            // console.log(locs),
        <LocationCard
         key={locs.id}
         name={locs.name}
         type={locs.type}
         dimension={locs.dimension}
         residents={locs.residents.length} //this is an array of URLs//use LENGTH to get population
          />
      ))}
    </section>
  );







}
