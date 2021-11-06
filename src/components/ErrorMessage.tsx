import React from 'react';
import { StyleSheet } from 'react-native';

import { Text } from './Text';

export function ErrorMessage() {
  return <Text style={styles.color}>Ooops, something wrong happened :o</Text>;
}

const styles = StyleSheet.create({
  color: {
    color: '#ff0103',
  },
});
