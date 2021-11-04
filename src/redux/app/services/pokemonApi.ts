import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Paginated, Pokemon } from './types';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: (builder) => ({
    getPokemonsPaginated: builder.query<Paginated<string>, number>({
      query: (page) => {
        const limit = 20;
        const offset = limit * (page - 1);

        return `/pokemon?offset=${offset}&limit=${limit}`;
      },
      transformResponse: (response: { count: number; results: { name: string }[] }) => ({
        count: response.count,
        results: response.results.map(({ name }) => name),
      }),
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `/pokemon/${name}`,
      transformResponse: ({ name, sprites }) => ({
        name,
        images: {
          back: sprites.back_default,
          front: sprites.front_default,
        },
      }),
    }),
  }),
});

export const { useGetPokemonsPaginatedQuery, useGetPokemonByNameQuery } = pokemonApi;
