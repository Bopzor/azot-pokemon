import { createSlice } from '@reduxjs/toolkit';

import { pokemonApi } from '../../app/services/pokemonApi';
import { RootState } from '../../app/store';

export type PokemonsState = {
  names: string[];
  total: number | null;
};

const initialState: PokemonsState = {
  names: [],
  total: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(pokemonApi.endpoints.getPokemonsPaginated.matchFulfilled, (state, { payload }) => {
      state.names.push(...payload.results);
      state.total = payload.count;
    });
  },
});

export default pokemonSlice.reducer;

const selectPokemonsTotal = (state: RootState) => state.pokemons.total;

export const selectPokemons = (state: RootState) => state.pokemons.names;

export const selectIsMorePokemons = (state: RootState) => {
  const total = selectPokemonsTotal(state);
  const pokemons = selectPokemons(state);

  if (!total) {
    return true;
  }

  return total > pokemons.length;
};
