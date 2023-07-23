import { Text, View, StyleSheet, ScrollView } from "react-native";
import Draggable from "../Draggable/Draggable";
import { color } from "react-native-elements/dist/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useStateValue } from "../ContextApi/State";
import { FAB } from "react-native-elements";
import { SelectList } from "react-native-dropdown-select-list";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  ListItem,
  ThemeProvider,
  theme,
  Text as Text2,
} from "react-native-design-system";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
var data = [];

const hashMap = {
  "Move X by 50": "key1",
  "Move Y by 50": "key2",
  "go to (0,0)": "key3",
  "Move X=50,Y=50": "key4",
  "Move X by 50 & Y by 50": "key5",
  "go to random position": "key6",
  "Say Hello": "key7",
};

const actionsArray = [
  {
    key: "1",
    title: "Move X by 50",
  },
  {
    key: "2",
    title: "Move Y by 50",
  },
  {
    key: "3",
    title: "go to (0,0)",
  },
  {
    key: "4",
    title: "Move X=50,Y=50",
  },
  {
    key: "5",
    title: "Move X by 50 & Y by 50",
  },
  {
    key: "6",
    title: "go to random position",
  },
  {
    key: "7",
    title: "Say Hello",
  },
];

export default AddAction = () => {
  const [activeTab, setActiveTab] = useState("Action1");

  const [state, dispatch] = useStateValue();
  const [choosenActions, setChoosenActions] = useState([]);

  const [listItems, setListItems] = useState([]);

  const handleDelete = (listItem) => {
    // console.log("handle delete "+listItem.title)
    // console.log(state.droppedActions[0])
    const newData = state.droppedActions.filter(
      (item) => item !== listItem.title
    );
    console.log(newData);

    dispatch({ type: "setDroppedActions", payload: newData });
  };

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <View style={{ width: "100%" }}>
        <ScaleDecorator>
          <ListItem
            style={{ marginBottom: 10, width: "100%" }}
            onLongPress={drag}
            rightIcon={
              <Text2
                size="sm"
                color="red500"
                onPress={() => {
                  console.log("delete pressed");
                  handleDelete(item);
                }}
              >
                Delete
              </Text2>
            }
          >
            {item.title}
          </ListItem>
        </ScaleDecorator>
      </View>
    );
  };

  var arr = [];
  const updateSelectedActions = (arg) => {
    setChoosenActions(arg);
    console.log(arg);
    arr = arg;
  };

  useEffect(() => {
    console.log("Action Added AddAction.js");
    console.log(state.droppedActions);
    

    const arr = [];
    state.animatedSprites.forEach((element) => {
      arr.push({ key: element.id, value: "Action" + element.id });
    });
    data = [{ key: "0", value: "Action0" }, ...arr];
  }, [state.droppedActions]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <View style={styles.container}>
          <View style={styles.codeContainer}>
            <Text style={styles.codeText}>Code</Text>

         

            <View style={styles.box}>
              <Draggable text="Move X by 50"  />
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
              <SelectList
                search={false}
                boxStyles={{ width: "75%" }}
                dropdownStyles={{ width: "75%" }}
                save="Select"
                data={data}
                setSelected={(val) => {
                  console.log("action" + val);
                  dispatch({
                    type: "setSpriteAction",
                    payload: "action" + val,
                  });
                }}
              />
              {/* <Text
            style={
              activeTab === "Action1"
                ? styles.activeActionTab
                : styles.inactiveActionTab
            }
            onPress={() => {
              dispatch({ type: "setSpriteAction", payload: "action1" });
              console.log(state.selectedSprite);
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
              dispatch({ type: "setSpriteAction", payload: "action2" });
              console.log(state.selectedSprite);
              // setSpriteAction
              setActiveTab("Action2");
            }}
          >
            Action2
          </Text> */}
            </View>

            <View style={{ width: "100%", height: "100%" }}>


              <Text
                style={{ fontSize: 50, color: "black", textAlign: "center",position:'absolute' }}
              >
                Drop Actions here!!
              </Text>
              {console.log("inside Add action screen " + state.droppedActions)}

              {/* {state.droppedActions.length != 0
            ? state.droppedActions.map((item) => {
                console.log("inside Add action screen " + item);
                return (
                  <View style={styles.listItem}>
                    <FAB
                      style={styles.floatingContainer2}
                      color="red"
                      size="small"
                      icon={{ name: "delete", color: "white" }}
                      onPress={() => {
                        const arr = state.droppedActions.filter(
                          (i) => i !== item
                        );
                        dispatch({ type: "setDroppedActions", payload: arr });

                        console.log(state.droppedActions);

                        // dispatch({"type":"deleteAction",payload:item})

                        console.log(item + " clicked");
                      }}
                    ></FAB>
                    <Text style={styles.codeItem}>{item}</Text>
                  </View>
                );
              })
            : null} */}

              <DraggableFlatList
                containerStyle={{ width: "80%", height: "100%" }}
                data={state.droppedActions.map((item) => {
                  return {
                    key: hashMap[item],
                    title: item,
                  };
                })}
                keyExtractor={(item) => item.key}
                renderItem={renderItem}
                onDragBegin={()=>{
                  console.log("Drag Begin")
                }}
                onDragEnd={({ data }) => {
                  console.log("Selected Action=" + state.selectedSprite)
                  dispatch({
                    type: "setDroppedActions",
                    payload: data.map((item) => item.title),
                  });
                }}
              ></DraggableFlatList>
            </View>
          </View>
        </View>
      </ThemeProvider>
    </GestureHandlerRootView>
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
    position: "absolute",
  },
  listItem: {
    backgroundColor: "#0E86D4",
    width: "80%",
    height: 60,
    marginTop: 10,
  },
  codeItem: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
  floatingContainer2: {
    position: "absolute",
    marginLeft: "95%",
    marginBottom: "100%",
    zIndex: 100,
  },
});
