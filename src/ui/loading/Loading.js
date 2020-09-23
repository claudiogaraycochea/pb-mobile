import React from 'react';
import { Text, View } from 'react-native';
// import styled from 'styled-components';

export default function Loading(props) {
  return (
    <View
      style={{
        backgroundColor: 'red'
      }}
    >
      <Text>Loading..............</Text>
    </View>
  );
}