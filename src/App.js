import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import EpisodeList from "./components/EpisodeList.js";
import CharacterList from "./components/CharacterList.js";
import LocationList from "./components/LocationsList.js";
import Navigation from "./components/Navigation.js";


export default function App() {
  return (
    <main>
    <Header /><Navigation className="nav" />
      
      <Route exact path="/" component={WelcomePage} />
      <Route path="/episodes" component={EpisodeList} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/locations" component={LocationList} />
   </main>
  );
}
