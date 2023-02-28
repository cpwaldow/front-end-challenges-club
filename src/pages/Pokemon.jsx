import React from 'react';
import pokeApi from '../services/pokeApi';

const Pokemon = () => {
  const [pokemons, setPokemons] = React.useState();
  React.useEffect(() => {
    pokeApi
      .get('?limit=50&offset=0')
      .then((response) => setPokemons(response.data.results))
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  if (!pokemons) return null;

  return (
    <div>
      <section>
        {pokemons.map((pokemon) => {
          return <h3 key={pokemon.name}>{pokemon.name}</h3>;
        })}
      </section>
    </div>
  );
};

export default Pokemon;
