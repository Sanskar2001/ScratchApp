import catIcon from "../assets/cat.png";
import ballIcon from "../assets/ball.png";
import { StyleSheet, View, Image, Text } from "react-native";
import { FAB } from "react-native-elements";
import { useStateValue } from "../ContextApi/State";
export const DefaultSlideCard = ({ navigation }) => {
  return (
    <View style={styles.card}>
      <Image
        source={catIcon}
        style={{ height: "40%", width: "30%", marginTop: "20%" }}
      ></Image>
      <Text
        style={styles.addActionLabel}
        onPress={() => navigation.navigate("ActionScreen")}
      >
        Add Action
      </Text>
    </View>
  );
};

export const AdditionalCard = ({ navigation, id }) => {
  const [state, dispatch] = useStateValue();
  return (
    <View>
      <FAB
        size="small"
        style={{
          position: "absolute",
          bottom: "80%",
          left: "80%",
          zIndex: 100,
        }}
        icon={{ name: "delete", color: "white" }}
        color="#0E86D4"
        onPress={() => {
          //   dispatch({ type: "deleteIconClicked" });

          console.log("delete clicked");
          dispatch({ type: "removeCard", payload: id });
          dispatch({ type: "removeAnimatedSprite", payload: id });
          // console.log(state.cards)
        }}
      ></FAB>
      <View style={styles.card}>
        <Image
          source={ballIcon}
          style={{ height: "40%", width: "30%", marginTop: "20%" }}
        ></Image>
        <Text
          style={styles.addActionLabel}
          onPress={() => navigation.navigate("ActionScreen")}
        >
          Add Action
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80%",
    width: 150,
    margin: 10,
  },
  addActionLabel: {
    flexDirection: "column",
    backgroundColor: "#0E86D4",
    color: "white",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    height: "40%",
    padding: "5%",
  },
});
