import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type CenterViewProps = {
  style?: StyleProp<ViewStyle>;
};

export function CenteredView({ style = [], children }: PropsWithChildren<CenterViewProps>) {
  const viewStyles = Array.isArray(style) ? style : [style];

  return <View style={[defaultStyles.container, ...viewStyles]}>{children}</View>;
}

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
