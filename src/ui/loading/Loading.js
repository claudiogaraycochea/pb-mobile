import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Bg from "../../../assets/loading.svg";
import { ProgressBar, Colors } from 'react-native-paper';

export default function Loading(props) {
  const { progress } = props;
  return (
    <View style={styles.container}>
      <Bg width={"48px"} height={"48px"} />
      <ProgressBar progress={progress} />
      <Text style={[styles.setFontSize,styles.setColorWhite]}>Loading... {parseFloat(progress).toFixed(2)*100+"%"}</Text>
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