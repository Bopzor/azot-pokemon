import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { CenteredView } from '../components/CenteredView';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { PokemonButton } from '../components/PokemonButton';
import { NavigationProps } from '../navigation/Navigation';
import { useGetPokemonsPaginatedQuery } from '../redux/app/services/pokemonApi';
import { selectPokemons } from '../redux/feature/pokemon/pokemonSlice';

export default function HomeScreen({ navigation }: NavigationProps<'Home'>) {
  // TODO: prevent to increase page up to max available pokemons
  const [page, setPage] = useState(1);
  const { error, isLoading } = useGetPokemonsPaginatedQuery(page);
  const pokemons = useSelector(selectPokemons);

  if (isLoading) {
    return (
      <CenteredView>
        <Loader />
      </CenteredView>
    );
  }

  if (error) {
    return (
      <CenteredView>
        <ErrorMessage />
      </CenteredView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(name) => name}
        onEndReached={() => setPage(page + 1)}
        onEndReachedThreshold={0.5}
        renderItem={({ item }: { item: string }) => (
          <PokemonButton name={item} onPress={() => navigation.navigate('Pokemon', { name: item })} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
