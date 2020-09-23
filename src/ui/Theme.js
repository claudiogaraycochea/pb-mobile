import React from 'react';
// import { TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';
import styled from 'styled-components';

/* Container */
export const Container = (props) => {
  return (
    <ContainerView
      style={{
        backgroundColor: '#1f347d'
      }}
    >
      {props.children}
    </ContainerView>
  );
}

const ContainerView = styled.View`
  flex: 1;
  width: 100%;
`;
/* / Container */