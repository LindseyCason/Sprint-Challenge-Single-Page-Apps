import React from "react";
import styled from 'styled-components';

const Div = styled.div`
color: #fcba03;
    background-color: #ffffff;
    box-shadow: 2px 5px 15px #00000060;
    border-radius:3px;
    margin: 10px;
    padding: 20px;
    // border: 2px solid #00000060
`
;


const H1 = styled.h1`
color: #E39C54;
font-family: "Arial";
opacity: 1.;
border-bottom: 2px solid white;
font-size: 2rem;

`;

const H2 = styled.h2`
color: #000000;
font-family: "Arial";
opacity 1.;

`;
///////////////////////////////


export default function LocationCard(props) {
  return (
  <Div>
    <H1>{props.name}</H1>
    <H2>Type:{props.type}</H2>
    <H2>Dimension: {props.dimension}</H2>
    <H2>Population:{props.residents}</H2>
    {/* <p>Characters: {props.characters}</p> YOU NEED TO MAKE THIS A LINK TO THE Characters PAGE */}
    </Div>
  
    );
}

