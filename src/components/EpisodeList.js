import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";

import EpisodeCard from "./EpisodeCard";

import axios from "axios";

export default function EpisodeList() {

  const [episode, setEpisode] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    
      axios
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          const episode = (response.data.results)
          // console.log(episode) //This works
          setEpisode(episode);
        })
        .catch(error => {
          console.error('Error: ', error);
        });
    
  }, []); //Dependecy array in place

  return (




    <section className="episode-list grid-view">
    
        {episode.map(epi => (

          <EpisodeCard
         key={epi.id}
         name={epi.name}
         type={epi.type}
         aired={epi.air_date}
         episode={epi.episode}
         dimension={epi.dimension}
         residents={epi.residents} //this is an array of URLs
          />
      ))}
    </section>
  );







}
