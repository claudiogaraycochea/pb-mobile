import React, { useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';
import Loading from '../../ui/loading/Loading';

export default function Home() {
  const [visible, setVisible] = useState(true);
  const webViewRef = useRef(null);
  return (
    <View style={{ flex: 1 }}>
      <WebView
        style={styles.container}
        ref={webViewRef}
        scrollEnabled={true}
        onLoad={() => setVisible(false)}
        // overScrollMode="never"
        source={{
          uri: `https://projectbloc.io/login`,
        }}
      />
      {visible ? (
        <Loading/>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    backgroundColor: '#192744',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderStyle:  'dashed',
    borderColor: 'red',
  }
});
