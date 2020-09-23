import React from 'react';
// import { TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';
import styled from 'styled-components';

/* Container */
export const Container = (props) => {
  return (
    <ContainerView>
      {props.children}
    </ContainerView>
  );
}

const ContainerView = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  padding-top: 20px;
  background-color: #192744;
`;
/* / Container */