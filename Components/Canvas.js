import { View, StyleSheet } from "react-native";
import { useRef, useEffect, useState } from "react";
import AnimatedSprite from "../AnimatedSprite/components/AnimatedSprite";
import { FAB } from "react-native-elements";
import InfoCard from "./InfoCard";
import logo from "../assets/cat.png";
import catHello from "../assets/catHello.png";
import ballHello from "../assets/ballHello.png";
import ball from "../assets/ball.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetToOrigin } from "../TweenOptions/CustomTweens";
import { executeActions } from "../Utility/ExecuteActions";
import { useStateValue } from "../ContextApi/State";
import { createRef } from "react";
export default Canvas = () => {
  const demo = useRef();
  const sprite2 = useRef();
  const spriteRef = useRef(logo);

  const spriteRefs = useRef([]);

  const [state, dispatch] = useStateValue();

  const [secondSprite, setSecondSprite] = useState(true);
  useEffect(() => {
    // console.log("State changed in canvas")

    // console.log("SpriteBoard=" + state.isSpriteBoardVisible);

    state.animatedSprites.forEach((element) => {
      spriteRefs.current.push(createRef());
    });

    console.log(spriteRefs);
  }, [state.cards.length]);

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
          console.log("reset pressed");

          resetToOrigin(demo);

          spriteRefs.current.forEach((element, index) => {
            if (element.current !== null) {
              resetToOrigin(spriteRefs.current[index]);
            }
          });

          setSecondSprite(!secondSprite);

          setCoordinates({
            x: 100,
            y: 100,
          });
        }}
      ></FAB>
      <View style={styles.draggableArea}>
        <AnimatedSprite
          sprite={{
            name: "demo",
            size: { width: 10, height: 10 },
            animationTypes: ["demo"],
            frames: [logo, catHello],
            animationIndex: () => {
              0;
            },
          }}
          tweenStart="fromMethod"
          tweenOptions={initialTweenOptions}
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

        {state.animatedSprites.map(
          (item, index) =>
            (item.sprite = (
              <AnimatedSprite
                sprite={{
                  name: "ball",
                  size: { width: 10, height: 10 },
                  animationTypes: ["demo"],
                  frames: [ball, ballHello],
                  animationIndex: () => {
                    0;
                  },
                }}
                ref={spriteRefs.current[index]}
                tweenStart="fromMethod"
                visible={true}
                tweenOptions={initialTweenOptions}
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
                onPress={() => {
                  console.log("press");
                  // setCoordinates({
                  //   x: demo.current.getCoordinates().left,
                  //   y: demo.current.getCoordinates().top,
                  // });
                }}
                onPressOut={() => {
                  console.log("press out");
                  // setCoordinates({
                  //   x: demo.current.getCoordinates().left,
                  //   y: demo.current.getCoordinates().top,
                  // });
                }}
              />
            ))
        )}

        <FAB
          style={styles.floatingContainer2}
          color="#0E86D4"
          icon={{ name: "play-arrow", color: "white" }}
          onPress={() => {
            console.log("play pressed");
            const actionArray = state.droppedActions;

       

            console.log(spriteRefs);

            console.log(state.selectedSprite);
            executeActions(
              demo,
              "action0",
              state.selectedSprite,
              state.droppedActions
            ).then(() => {
              // dispatch({ type: "setDroppedActions", payload: [] });
              console.log("done");
            });

            spriteRefs.current.forEach((element, index) => {
              var startingId = 0;
              if (state.animatedSprites[1] !== undefined)
                startingId = state.animatedSprites[1].id;

              if (element.current !== null) {
                const currentAction =
                  "action" + state.animatedSprites[index].id;
                const actionToBePerformed = state.selectedSprite;
                // console.log("refs->"+element.current)

                executeActions(
                  spriteRefs.current[index],
                  currentAction,
                  state.selectedSprite,
                  actionArray
                ).then(() => {
                  console.log("done 2 ");
                });
              }
            });
            

            setCoordinates({
              x: demo.current.getCoordinates().left,
              y: demo.current.getCoordinates().top,
            });
          }}
        ></FAB>
      </View>
      <InfoCard x={coordinates.x} y={coordinates.y}></InfoCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: "70%",

    margin: 10,
  },

  draggableArea: {
    width: "98%",
    height: "90%",
    margin: 5,
    backgroundColor: "white",
  },

  floatingContainer: {
    position: "absolute",
    marginLeft: "85%",
    marginTop: "5%",
    zIndex: 100,
  },

  floatingContainer2: {
    position: "absolute",
    marginLeft: "85%",
    marginTop: "70%",
    zIndex: 100,
  },
});

const initialTweenOptions = {
  tweenType: "sine-wave",
  startXY: [0, 0],
  xTo: [300, 300],
  yTo: [300, 300],
  endXY: [0, 0],
  duration: 1000,
  loop: false,
};
