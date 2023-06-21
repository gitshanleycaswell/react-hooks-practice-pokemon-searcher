import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemons(data))
  }, [])

  function figureOutSearch(string){
    setSearch(string)
  }
  function handleSubmittedPoke(newPokemon){
    setPokemons(prevPokemons => [...prevPokemons, newPokemon])
  }

  const filteredPokemons = pokemons.filter((pokemon) => {
    const lowerCaseName = pokemon.name.toLowerCase()
    const lowerCaseSearch = search.toLowerCase()
    return lowerCaseName.includes(lowerCaseSearch)
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmittedPoke={handleSubmittedPoke}/>
      <br />
      <Search figureOutSearch={figureOutSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
