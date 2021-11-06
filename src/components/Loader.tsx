import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';

import { LoaderIcon } from '../icons/LoaderIcon';

export function Loader() {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.View style={[{ transform: [{ rotate }] }, styles.size]}>
      <LoaderIcon fill="#ff0103" width={48} height={48} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  size: {
    width: 48,
    height: 48,
  },
});
