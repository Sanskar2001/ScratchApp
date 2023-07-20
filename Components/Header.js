import { Image } from "react-native";
import { View, Text } from "react-native";
import logo from "../assets/logo.png";
export default header = () => {
  return (
    <View
      style={{
        justifyContent: "space-around",
        flexDirection: "row",
        width: "100%",
        height: "7%",
        backgroundColor: "#0E86D4",
        marginTop: 30,
      }}
    >
      <View style={{ marginStart: 5, alignSelf: "center", width: "80%" }}>
        <Image source={logo}></Image>
      </View>

      <Text
        style={{
          alignSelf: "center",
          fontSize: 18,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Sign In
      </Text>
    </View>
  );
};
