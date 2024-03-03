import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets  } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

const HomeScreen = () => { 
  const insets = useSafeAreaInsets();

  const [fontsLoaded, fontError] = useFonts({
    'PoppinsReg': require('./assets/fonts/Poppins-Regular.ttf'),
    'PoppinsBlack': require('./assets/fonts/Poppins-Black.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return(
    <View style={{ flex: 1, paddingTop: insets.top, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'PoppinsReg', fontSize: 40,}}>Hello World!</Text>
        <Text style={styles.container}>Hello World!</Text>
        <StatusBar style="auto" />
    </View>  
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'PoppinsBlack',  
    fontSize: 40,
    flex: 1,
    backgroundColor: '#fff',
  },
});
