import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type SafeAreaViewWrapperProps = {
  children?: ReactNode;
};

export const SafeAreaViewWrapper: React.FC<SafeAreaViewWrapperProps> = ({
  children,
}) => {
  const insets = useSafeAreaInsets();

  const containerStyle = StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center',
      alignItems: 'center',
      paddingTop: insets.top,
      paddingLeft: insets.left,
      justifyContent: 'center',
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
  });

  return <View style={containerStyle.container}>{children}</View>;
};
