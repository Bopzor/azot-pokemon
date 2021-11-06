import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { Text } from './Text';

export function PokemonButton({ name, onPress }: { name: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}>
      <View style={styles.container}>
        <Text color="light" style={styles.text}>
          {name}
        </Text>
      </View>
    </Pressable>
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
