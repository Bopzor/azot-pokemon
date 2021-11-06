import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '../components/Text';
import { LoaderIcon } from '../icons/LoaderIcon';
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
    return <LoaderIcon fill="#ff0103" />;
  }

  if (!data) {
    return null;
  }

  if (error) {
    <Text>Ooops, something wrong happened</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text styles={styles.text}>{capitalizeFirstLetter(data.name)}</Text>

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
