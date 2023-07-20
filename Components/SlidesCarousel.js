import { View, StyleSheet, Image, Text } from "react-native";
import { FAB } from "react-native-elements";
import { Icon } from "react-native-elements";
import catIcon from "../assets/cat.png";
import ballIcon from "../assets/ball.png"
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStateValue } from "../ContextApi/State";


export default SlidesCarousel = ({ navigation }) => {

  const [iconPressed, setIconPressed] = useState(false);
  const[state,dispatch]=useStateValue();
  const[firstCardVisible,setFirstCardVisible]=useState(true)

 

  return (
    <View style={styles.container}>
{/* 
      <FAB
        size="small"
        style={styles.deleteFab}
        icon={{ name: "delete", color: "white" }}
        color="#0E86D4"
        onPress={()=>{

        }}
      ></FAB> */}
      <View style={styles.card}>
        <Image
          source={catIcon}
          style={{ height: "40%", width: "30%", marginTop: "20%" }}
        ></Image>
        <Text
          style={styles.addActionLabel}
          onPress={() => {
            console.log("Add Action");
            navigation.navigate("ActionScreen");
          }}
        >
          Add Action
        </Text>
      </View>

 

      {iconPressed ? (
        <View style={{ width: "100%" }}>
          <FAB
            size="small"
            style={{
              position: "absolute",
              bottom: "80%",
              left: "30%",
              zIndex: 100,
            }}
            icon={{ name: "delete", color: "white" }}
            color="#0E86D4"
            onPress={()=>{
              setIconPressed(false);
              dispatch({type:"deleteIconClicked"})
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
      ) : (
        <View style={styles.card}>
          <Icon
            name="add"
            size={100}
            color="black"
            onPress={() => {
              setIconPressed(true);
              dispatch({ type: "addIconClicked" });
            }}
          ></Icon>
        </View>
      )}
      {/* <FAB
        size="small"
        style={{
          position: "absolute",
          bottom: "80%",
          left: "60%",
          zIndex: 100,
        }}
        icon={{ name: "delete", color: "white" }}
        color="#0E86D4"
      ></FAB>
      <View style={styles.card}>
        <Image
          source={ballIcon}
          style={{ height: "40%", width: "30%", marginTop: "20%" }}
        ></Image>
        <Text style={styles.addActionLabel} onPress={() => navigation.navigate("ActionScreen") }>Add Action</Text>
      </View> */}
    </View>
  );
      

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "20%",
    width: "95%",
    marginTop:"5%",
    margin:10,
    flexDirection: "row",
  },

  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80%",
    width: "30%",
    margin: 10,
  },

  card2:{
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "30%",
    margin: 10,
   
  
  },

  deleteFab2:{
    position: "absolute",
    bottom: "80%",
    left: "80%",
    zIndex: 100,
  },

  deleteFab: {
    position: "absolute",
    bottom: "80%",
    left: "25%",
    zIndex: 100,
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
