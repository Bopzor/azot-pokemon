import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text as NativeText, TextStyle } from 'react-native';

type TextProps = {
  color?: 'dark' | 'light';
  style?: StyleProp<TextStyle>;
};

export function Text({ color = 'dark', style = [], children }: PropsWithChildren<TextProps>) {
  const textStyles = Array.isArray(style) ? style : [style];

  return <NativeText style={[defaultStyles.base, defaultStyles[color], ...textStyles]}>{children}</NativeText>;
}

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
