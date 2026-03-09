import './App.css';
import useFetchCharacters from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemon = useFetchCharacters(urlPokemon);
  const rick = useFetchCharacters(urlRick);
  
  return (
    <>
      <h2>Pokemon</h2>
      <p>{pokemon?.name}</p>
      <img src={pokemon?.sprites?.front_default}/>

      <h2>Personaje Rick & Morty</h2>
      <p>{rick?.name}</p>
      <img src={rick?.image}/>
    </>
  );
}

export default App;
