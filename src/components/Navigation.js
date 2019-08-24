import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/characters">Characters</Link>
        </div>
        <div>
          <Link to="/episodes">Episodes</Link>
        </div>
        <div>
          <Link to="/locations">Locations</Link>
        </div>
      </div>
    
  );
};

export default Navigation;