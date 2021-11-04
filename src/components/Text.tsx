import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text as NativeText, TextStyle } from 'react-native';

type TextProps = {
  color?: 'dark' | 'light';
  styles?: StyleProp<TextStyle>;
};

export const Text = ({ color = 'dark', styles = [], children }: PropsWithChildren<TextProps>) => {
  const textStyles = Array.isArray(styles) ? styles : [styles];

  return <NativeText style={[defaultStyles.base, defaultStyles[color], ...textStyles]}>{children}</NativeText>;
};

const defaultStyles = StyleSheet.create({
  base: {
    fontFamily: 'synchronizer',
  },
  light: {
    color: '#fff',
  },
  dark: {
    color: '#000',
  },
});
