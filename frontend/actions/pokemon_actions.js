export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_NEW_POKEMON = "RECEIVE_NEW_POKEMON";
export const REQUEST_POKEMON = "REQUEST_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const requestAllPokemon = () => ({
    type: REQUEST_ALL_POKEMON
});

export const receivePokemon = (pokemon) => ({
    type: RECEIVE_POKEMON,
    pokemon
});

export const receiveNewPokemon = (pokemon) => ({
    type: RECEIVE_NEW_POKEMON,
    pokemon
});

export const requestPokemon = (id) => ({
    type: REQUEST_POKEMON,
    id
});

export const createPokemon = (pokemon) => ({
  type: CREATE_POKEMON,
  pokemon
});

export const receivePokemonErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});
