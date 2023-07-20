import { Text, View, StyleSheet } from "react-native";
import Draggable from "../Draggable/Draggable";
import { color } from "react-native-elements/dist/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
export default AddAction = () => {
  const [activeTab, setActiveTab] = useState("Action1");

  const selectedActions = [];
  return (
    <View style={styles.container}>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>Code</Text>

        <View style={styles.box}>
          <Draggable text="Move X by 50" activeTab={activeTab} />
          <Draggable text="Move Y by 50" activeTab={activeTab} />
          <Draggable text="go to (0,0)" activeTab={activeTab} />
          <Draggable text="Move X=50,Y=50" activeTab={activeTab} />
          <Draggable text="Move X by 50 & Y by 50" activeTab={activeTab} />
          <Draggable text="go to random position" activeTab={activeTab} />
          <Draggable text="Say Hello" activeTab={activeTab} />
        </View>
      </View>

      <View style={styles.actionContainer}>
        <Text style={styles.actionText}>Action</Text>

        <View style={{ width: "100%", flexDirection: "row" }}>
          <Text
            style={
              activeTab === "Action1"
                ? styles.activeActionTab
                : styles.inactiveActionTab
            }
            onPress={() => {
              setActiveTab("Action1");
            }}
          >
            Action1
          </Text>
          <Text
            style={
              activeTab === "Action2"
                ? styles.activeActionTab
                : styles.inactiveActionTab
            }
            onPress={() => {
              setActiveTab("Action2");
            }}
          >
            Action2
          </Text>
        </View>

        <View style={{ width: "100%", height: "100%" }}>
          <Text style={{ fontSize: 50, color: "black", textAlign: "center" }}>
            Drop Actions here!!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    height: "100%",
  },

  actionContainer: {
    width: "50%",
    height: "100%",
  },

  codeContainer: {
    height: "100%",
    width: "50%",
    alignItems: "center",
  },

  codeText: {
    fontSize: 20,
    alignSelf: "center",
    height: 50,
    color: "#0E86D4",
    fontWeight: "bold",
  },

  actionText: {
    alignSelf: "center",
    height: 50,
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  },

  activeActionTab: {
    backgroundColor: "green",
    height: 50,
    width: "50%",
    color: "white",
    textAlign: "center",
  },

  inactiveActionTab: {
    backgroundColor: "grey",
    width: "50%",
    height: 50,
    color: "white",
    textAlign: "center",
  },

  codeItem: {
    width: "80%",
    backgroundColor: "#0E86D4",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10,
    marginLeft: "10%",
    fontSize: 20,
    marginTop: 5,
  },
  box: {
    width: "80%",
    height: "100%",
    marginTop: "10%",
  },
});
