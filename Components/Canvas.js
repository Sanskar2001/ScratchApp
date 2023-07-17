import { View, StyleSheet } from "react-native";
import { useRef, useEffect, useState } from "react";
import AnimatedSprite from "react-native-animated-sprite";
import { FAB } from "react-native-elements";
import InfoCard from "./InfoCard";
import logo from "../assets/cat.png";
export default Canvas = () => {
  const demo = useRef();

  useEffect(() => {
    console.log(demo.current.getCoordinates());
  }, [demo]);

  const [coordinates, setCoordinates] = useState({
    x: 100,
    y: 100,
  });

  return (
    <View style={styles.container}>
      <FAB
        style={styles.floatingContainer}
        color="green"
        icon={{ name: "redo", color: "white" }}

        onPress={() => {
         console.log("reset pressed")

      
         demo.current.mystartTween(tweenOptions);
        
          setCoordinates({
            x: 100,
            y: 100,
          })

        }}
    
      ></FAB>
      <View style={styles.draggableArea}>
        <AnimatedSprite
          sprite={{
            name: "demo",
            size: { width: 10, height: 10 },
            animationTypes: ["demo"],
            frames: [logo],
            animationIndex: () => {
              0;
            },
          }}
          tweenStart='fromMethod'
          tweenOptions={tweenOption2}
          coordinates={{
            top: 100,
            left: 100,
          }}
          size={{
            width: 50,
            height: 50,
          }}
          animationFrameIndex={[0]}
          draggable={true}
          ref={demo}
          onPress={() => {
            console.log("press");
            setCoordinates({
              x: demo.current.getCoordinates().left,
              y: demo.current.getCoordinates().top,
            });
          }}
          onPressOut={() => {
            console.log("press out");
            setCoordinates({
              x: demo.current.getCoordinates().left,
              y: demo.current.getCoordinates().top,
            });
          }}
      
        />
      </View>
      <InfoCard x={coordinates.x} y={coordinates.y}></InfoCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
    backgroundColor: "black",
    margin: 5,
  },

  draggableArea: {
    width: "100%",
    height: "90%",
    margin: 5,
    backgroundColor: "blue",
  },

  floatingContainer: {
    position: "absolute",
    marginLeft: "85%",
    marginTop: "5%",
    zIndex: 100,
  },
});

const tweenOptions = {
      
      tweenType: 'sine-wave',
      startXY: [100, 100],
      xTo: [100, 100],
      yTo: [100,100],
      duration: 1000,
      loop: false,
    }
    

    const tweenOption2 = {
      tweenType: 'sine-wave',
      startXY: [100,100],
      xTo: [300,300],
      yTo: [300,300],
      duration: 1000,
      loop: false,
    }
  
   
