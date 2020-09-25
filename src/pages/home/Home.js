import React, { useRef, useState } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';
import Loading from '../../ui/loading/Loading';

export default function Home() {
  const [visible, setVisible] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const webViewRef = useRef(null);
  // console.log('Home: webViewRef:', webViewRef);
  function processHeader(e, loadProgress) {
    console.log(e);
    const { url } = e;
    if((url==='https://test.projectbloc.io/login')&& loadProgress===1) {
      console.log('open loading', loadProgress);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {visible ? (
        <Loading progress={loadProgress}/>
      ) : null}
      <WebView
        style={visible ? styles.containerA : styles.containerB}
        height={0}
        ref={webViewRef}
        scrollEnabled={true}
        onLoad={() => setVisible(false)}
        onLoadProgress={e => setLoadProgress(e.nativeEvent.progress)}
        onNavigationStateChange={e => processHeader(e, loadProgress)}
        // overScrollMode="never"
        source={{
          //uri: `https://projectbloc.io/login/app`,
          uri: `http://7bfc18279c72.ngrok.io/login/app`
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerA: {
    width: 0,
    height: 0,
    backgroundColor: '#192744',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerB: {
    flex: 1,
    width: '100%',
    backgroundColor: '#192744',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
