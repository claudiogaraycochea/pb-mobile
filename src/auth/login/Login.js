import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#192744',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setColorWhite : {
    color: '#FFFFFF'
  },
});