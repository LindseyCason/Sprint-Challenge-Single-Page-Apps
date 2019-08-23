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
font-family: "impact";
opacity: 1.;
border-bottom: 2px solid white;
font-size: 2rem;

`;

const H2 = styled.h2`
color: #000000;
font-family: "impact";
opacity 1.;

`;

const P = styled.p`
color: #00000080;`












//this page to design the layout
export default function CharacterCard(props) {

  // console.log(props.name);
  return (
    <Div>
      <img src={`${props.image}`} />
    <H2>{props.name}</H2>
    <H2>{props.species}, {props.status}</H2>
    <P>Location: {props.location}</P>
    <P>Origin: {props.origin}</P>
    <P>Episodes: {props.episodes}</P> YOU NEED TO MAKE THIS A LINK TO THE EPISODES PAGE
    </Div>
  );
}
