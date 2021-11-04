import React from 'react';
import { StyleSheet } from 'react-native';

import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Home: undefined;
  Pokemon: {
    name: string;
  };
};

export type NavigationProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ contentStyle: styles.default, title: 'Pokemons' }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  default: {
    paddingHorizontal: 10,
  },
});
