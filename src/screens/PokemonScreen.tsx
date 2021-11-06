import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { CenteredView } from '../components/CenteredView';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Text } from '../components/Text';
import { RotateIcon } from '../icons/RotateIcon';
import { NavigationProps } from '../navigation/Navigation';
import { useGetPokemonByNameQuery } from '../redux/app/services/pokemonApi';

export default function PokemonScreen({ route }: NavigationProps<'Pokemon'>) {
  const [currentImage, setCurrentImage] = useState<'front' | 'back'>('front');
  const { data, error, isLoading } = useGetPokemonByNameQuery(route.params.name);

  const capitalizeFirstLetter = (str: string): string => {
    const firstLetter = str[0].toUpperCase();

    return firstLetter + str.slice(1);
  };

  const rotatePokemon = () => {
    if (currentImage === 'front') {
      setCurrentImage('back');
    } else {
      setCurrentImage('front');
    }
  };

  if (isLoading) {
    return (
      <CenteredView>
        <Loader />
      </CenteredView>
    );
  }

  if (!data) {
    return <Text>This pokemon doesn't exist.</Text>;
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
      <Text style={styles.text}>{capitalizeFirstLetter(data.name)}</Text>

      {/* TODO: Check loadingIndicatorSource */}
      <Image source={{ uri: data.images[currentImage] }} style={styles.image} resizeMode="contain" />

      <Pressable onPress={rotatePokemon} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}>
        <View style={styles.rotateButton}>
          <RotateIcon fill="#fff" />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
  },
  image: {
    width: 250,
    height: 250,
    marginVertical: 24,
  },
  rotateButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0103',
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});
