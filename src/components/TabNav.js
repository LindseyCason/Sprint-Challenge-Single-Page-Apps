
import React from 'react'
import { Tab } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList.js";
import EpisodeList from "./EpisodeList.js"
import WelcomePage from "./WelcomePage.js"


const panes = [
  { menuItem: 'Home', render: () => <Tab.Pane>
        <Link to="/"><WelcomePage /></Link>
                    </Tab.Pane> },

  { menuItem: 'Characters', render: () => 
           <Tab.Pane><NavLink to ="/characters"><CharacterList /></NavLink></Tab.Pane>
                     },

  { menuItem: 'Locations', render: () => <Tab.Pane>
             <NavLink to="/locations"><LocationsList /></NavLink>
  </Tab.Pane> },
  { menuItem: 'Episodes', render: () => <Tab.Pane>
            <NavLink to="/episodes"><EpisodeList /></NavLink>
</Tab.Pane> },
]

const TabNav = () => <Tab panes={panes} />

export default TabNav;
