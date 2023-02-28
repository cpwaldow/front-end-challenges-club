import axios from 'axios';

const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/ditto',
});

export default pokeApi;
