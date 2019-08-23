import React from "react";
import styled from 'styled-components';

// const Div = styled.div`
// color: #fcba03;
//     width: 25%;
//     background-color: #E6D8CA;
//     box-shadow: 5px 5px 5px #8B831260;
//     opacity: .95;
//     padding: 10px;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     margin: 10px;
//     border-radius:3px;
// `
// ;

// const H1 = styled.h1`
// color: #E39C54;
// font-family: "Shadows Into Light";
// opacity: 1.;
// border-bottom: 2px solid white;
// font-size: 2rem;

// `;

// const H2 = styled.h2`
// color: #8B8312;
// font-family: "Walter Turncoat";
// opacity 1.;

// `;

// import EpisodeList from "./EpisodeList"

//this page to design the layout
export default function EpisodeCard(props) {

  // console.log(props.name);
  return (
    <Div>
    <h2>{props.name}</h2>
    <h3>Aired:{props.air_date}</h3>
    <h3>{props.episode}</h3>
    <p>Characters: {props.characters}</p> YOU NEED TO MAKE THIS A LINK TO THE Characters PAGE
    </Div>
  );
}
