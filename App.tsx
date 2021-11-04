import React, { useState } from 'react';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import Navigation from './src/navigation/Navigation';
import { store } from './src/redux/app/store';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} onError={console.warn} />;
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
          <StatusBar style="auto" />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const loadFont = async () =>
  Font.loadAsync({
    synchronizer: require('./assets/fonts/synchronizer.ttf'),
  });
