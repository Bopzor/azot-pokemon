import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Text } from './Text';

export function PokemonButton({ name, onPress }: { name: string; onPress: () => void }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Text color="light" styles={styles.text}>
          {name}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0103',
    padding: 32,
    marginVertical: 8,
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
  },
});
