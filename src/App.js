import React, { useState, useEffect } from "react";
import Frase from "./Components/Frase";
import styled from "@emotion/styled";

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007D35 0%, #007D35 40%, #0F574E 100%);
  background-size: 300px;
  font-family: Arial, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

function App() {
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
  const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = await api.json();
  guardarFrase(frase[0]);
  }

  useEffect(() => {
    consultarAPI();
  }, [])
  

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
