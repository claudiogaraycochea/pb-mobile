import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const webViewRef = useRef(null);
  return (
    <View style={styles.container}>
      <Text>eeeasdfasfafdafds</Text>
      <WebView
        ref={webViewRef}
        //scrollEnabled={false}
        // overScrollMode="never"
        source={{
          uri: `https://test.projectbloc.io`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: '10%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
