import { useGetPokemonByNameQuery } from 'redux/pokemon';
import { useState } from 'react';
import Loader from 'components/Loader';

export default function PokemonPage() {
  const [pokemonName, setPokemonName] = useState('');
  const { data, error, isFetching, isError } = useGetPokemonByNameQuery(
    pokemonName,
    {
      skip: pokemonName === '',
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    setPokemonName(e.currentTarget.elements.pokemonName.value);
    e.currentTarget.reset();
    console.dir(e.currentTarget);
  };

  const showNotFoundError = isError && error.originalStatus === 404;
  const showPokemonData = data && !isFetching && !isError;

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="pokemonName" />
        <button type="submit">Search</button>
      </form>
      {isFetching && <Loader />}
      {showNotFoundError && (
        <p>
          {error.data} {pokemonName}
        </p>
      )}
      {showPokemonData && <h1>{data.name}</h1>}
    </>
  );
}
