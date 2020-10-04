import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

interface Props {
  children: JSX.Element[];
}

function AppLayout({children}: Props) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 30,
    // paddingLeft: 20,
    // paddingRight: 20,
    flexDirection: 'column',
  },
});

export default AppLayout;
