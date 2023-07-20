import Canvas from "./Canvas";
import { View, StyleSheet } from "react-native";
import SlidesCarousel from "./SlidesCarousel";
export default Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Canvas />
      <SlidesCarousel navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E8E8",
  },
});
