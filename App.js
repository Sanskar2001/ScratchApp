import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Canvas from './Components/Canvas';
import { Image } from 'react-native';
import logo from "./assets/logo.png"
import InfoCard from './Components/InfoCard';
import SlidesCarousel from './Components/SlidesCarousel';
import { FAB } from 'react-native-elements';
export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
      <Canvas/>
      <SlidesCarousel/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  

});
