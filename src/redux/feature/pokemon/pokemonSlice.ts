import { createSlice } from '@reduxjs/toolkit';

import { pokemonApi } from '../../app/services/pokemonApi';
import { RootState } from '../../app/store';

export type PokemonsState = {
  names: string[];
  page: number;
  total: number;
};

const initialState: PokemonsState = {
  names: [],
  page: 1,
  total: 0,
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(pokemonApi.endpoints.getPokemonsPaginated.matchFulfilled, (state, { payload }) => {
      state.names.push(...payload.results);
      state.total = payload.count;
      state.page++;
    });
  },
});

export default pokemonSlice.reducer;

export const selectPokemons = (state: RootState) => state.pokemons.names;
