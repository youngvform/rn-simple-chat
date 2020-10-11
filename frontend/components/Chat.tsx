import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
}

function Chat({name}: Props) {
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingLeft: 10,
    borderTopColor: 'black',
    borderWidth: 1,
  },
});

export default Chat;
