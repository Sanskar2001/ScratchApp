import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, PanResponder, Animated, Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useStateValue } from "../ContextApi/State";
import 'react-native-get-random-values';
import { v4 as uuidv4, v4 } from 'uuid';
var selectedActions = [];

const Draggable = (props) => {

  const [state, dispatch] = useStateValue();
  const [pan, setPan] = useState(new Animated.ValueXY());
  const [showDraggable, setShowDraggable] = useState(true);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: pan.x, dy: pan.y },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (isDropArea(gesture)) {
          setShowDraggable(false);
          console.log("Dropped");

          // selectedActions.push(props.text);
          dispatch({
            type: "actionDropped",
            payload: {key: v4(),title:props.text},
          })

          console.log("Draggable "+state)

         

          console.log("State of dropped Actions="+state.droppedActions);

          console.log(selectedActions);

          Animated.timing(pan, {
            toValue: { x: 0, y: 0 }, 
            duration: 10, 
          
          }).start();
        }
        else
        {   Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
           }).start();

        }

         
          
          {console.log("ok")}
       
      },
    })
  ).current;

  const isDropArea = (gesture) => {
    console.log("Called" + gesture.moveX);
    const windowWidth = Dimensions.get("window").width;
    return gesture.moveX > windowWidth * 0.6;
  };

  const panStyle = {
    transform: pan.getTranslateTransform(),
  };

  return (
    <View >
      <Animated.View
        {...panResponder.panHandlers}
      
        // style={
        //   showDraggable ? [panStyle, styles.draggableBox] : styles.invisible
        // }
        style={
          [panStyle, styles.draggableBox]
        }
      >
        <View style={styles.box}>
        <Text style={styles.codeItem}>{props.text}</Text>

        </View>
      
      </Animated.View>

        <View style={styles.box2}>
        <Text style={styles.codeItem2}>{props.text}</Text>
        
        </View>

      
    </View>
  );
};

export default Draggable;

let styles = StyleSheet.create({
  box: {
    backgroundColor: "#0E86D4",
    width: "100%",
    height: 60,
    marginTop: 10,
    
    zIndex: 100,
    
  },
  draggableBox: {
    backgroundColor: "white",
    width: "100%",
    height: 60,
    marginTop: 10,
    
    zIndex: 100,
    
  },
  box2: {
    backgroundColor: "grey",
    width: "100%",
    height: 60,
    marginTop: 10,
    position:'absolute',

    

  },
  invisible: {
    transform: [{ translateX: 2000 }],
    // display:"none"
    // opacity:0.5
   

  },
  codeItem: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  
  },
  codeItem2: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10
  
  },
});
