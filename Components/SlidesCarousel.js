import { View, StyleSheet, Image, Text } from "react-native";
import { Icon } from "react-native-elements";
import { useEffect, useRef, useState } from "react";
import { useStateValue } from "../ContextApi/State";
import { ScrollView } from "react-native";
import { DefaultSlideCard, AdditionalCard } from "./SlideCard";
import AnimatedSprite from "../AnimatedSprite/components/AnimatedSprite";
import ball from "../assets/ball.png";
import ballHello from "../assets/ballHello.png";

export default SlidesCarousel = ({ navigation }) => {
  const [iconPressed, setIconPressed] = useState(false);
  const [state, dispatch] = useStateValue();
  const [firstCardVisible, setFirstCardVisible] = useState(true);

  const [spriteArr, setSpriteArr] = useState([]);
  const [cards, setCards] = useState([
    <DefaultSlideCard navigation={navigation} />,
  ]);

  const addCard = () => {
    console.log("add card");
    setCards([...cards, <AdditionalCard navigation={navigation} />]);
    // console.log(cards);
  };

  const generateSpriteRef = () => {
    var ref = null;

    dispatch({
      type: "addSprite",
      payload: ref,
    });

    console.log("inside generate sprite ref " + state.spriteRefArr.length);

    return ref;
  };

  useEffect(() => {
    console.log("Card added");
    // console.log(state.cards[0].card);

    // state.cards.forEach(element => {

    // console.log(element.card)
    // });

    //   const arr=state.cards.map((item) => item.card)

    // console.log(arr)
  }, [cards]);

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <DefaultSlideCard navigation={navigation} />
        {/* {
          console.log(state.cards)
    
      } */}
        {state.cards.map((item, index) => item.card)}

        <View style={styles.card}>
          <Icon
            name="add"
            size={100}
            color="black"
            onPress={() => {
              // setIconPressed(true);
              spriteArr.push(spriteArr.length);
              setSpriteArr(spriteArr);
              dispatch({
                type: "addCard",
                payload: {
                  id: spriteArr.length,
                  card: (
                    <AdditionalCard
                      navigation={navigation}
                      id={spriteArr.length}
                    />
                  ),
                },
              });

              const ref = generateSpriteRef();
              dispatch({
                type: "addAnimatedSprite",
                payload: {
                  id: spriteArr.length,
                  sprite: (
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
                      ref={ref}
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
                  ),
                },
              });

              addCard();
              console.log(cards);
              console.log("Add clicked");
              dispatch({ type: "addIconClicked" });
            }}
          ></Icon>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "20%",
    width: "95%",
    marginTop: "5%",
    margin: 10,
    flexDirection: "row",
  },

  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "80%",
    width: 150,
    margin: 10,
  },

  card2: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "30%",
    margin: 10,
  },

  deleteFab2: {
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

const initialTweenOptions = {
  tweenType: "sine-wave",
  startXY: [0, 0],
  xTo: [300, 300],
  yTo: [300, 300],
  endXY: [0, 0],
  duration: 1000,
  loop: false,
};
