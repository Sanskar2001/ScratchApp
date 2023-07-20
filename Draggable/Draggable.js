import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
var selectedActions = [];
export default class Draggable extends Component {
  constructor(props) {
    super();
    selectedActions = [];
    this.state = {
      pan: new Animated.ValueXY(),
      text: props.text,
      showDraggable: true,
    };
  }

  isDropArea(gesture) {
    console.log("Called" + gesture.moveX);
    const windowWidth = Dimensions.get("window").width;
    return gesture.moveX > windowWidth * 0.6;
  }

  componentWillMount() {
    // Add a listener for the delta value change
    this._val = { x: 0, y: 0 };
    this.state.pan.addListener((value) => (this._val = value));
    // Initialize PanResponder with move handling
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),
      // adjusting delta value
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          this.setState({ showDraggable: false });
          console.log("Dropped");

          this.state.showDraggable = false;

          selectedActions.push(this.props.text);
          this.props.activeTab === "Action1"
            ? AsyncStorage.setItem(
                "action1",
                JSON.stringify({ selectedActions })
              )
            : AsyncStorage.setItem(
                "action2",
                JSON.stringify({ selectedActions })
              );

          console.log(this.state.showDraggable);

          console.log(selectedActions);
        } else {
          Animated.spring(this.state.pan, {
            toValue: { x: 0, y: 0 },
            friction: 5,
          }).start();
        }
      },
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
    };

    const { showDraggable } = this.state.showDraggable;
    console.log(this.state.showDraggable);
    return (
      <Animated.View
        {...this.panResponder.panHandlers}
        style={
          this.state.showDraggable ? [panStyle, styles.box] : styles.invisible
        }
      >
        <Text style={styles.codeItem}>{this.state.text}</Text>
      </Animated.View>
    );
  }
}

let styles = StyleSheet.create({
  box: {
    backgroundColor: "#0E86D4",
    width: "100%",
    height: 60,
    marginTop: 10,
    zIndex: 100,
  },
  invisible: {
    transform: [{ translateX: 2000 }],
  },
  codeItem: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: 10,
  },
});
