import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  moveToOrigin,
  moveToRandomPos,
  moveXBy50,
  moveXto50Yto50,
  moveXby50Yby50,
  moveYBy50,
} from "../TweenOptions/CustomTweens";
import { sayHelloOneSecond, updateSayHelloSprite } from "../Actions/SayHello";

export const executeActions = async (
  demo,
  actionName,
  actionToBePerformed,
  droppedActions
) => {
  // if(actionName!==actionToBePerformed)
  // return
  console.log("Actions Checking"+actionName + " " + actionToBePerformed);
  // console.log((actionName!==actionToBePerformed))
  if (actionName !== actionToBePerformed) return;

  console.log("Actions Checking"+actionName + " " + actionToBePerformed);

  console.log("Execute Actions" + droppedActions);
  // const data = await AsyncStorage.getItem(actionName);
  // console.log("data="+data);

  // if (data == null || data.length == 0) return;

  console.log("Here");

  const actionArray = droppedActions;
  console.log(actionArray + " " + actionArray.length);

  if (actionArray.length == 0) return;

  for (let i = 0; i < actionArray.length; i++) {
    console.log("Here");
    await performAction(actionArray[i], demo);

    console.log("next");
  }

  return new Promise((resolve) => {
    resolve("Executed Actions!");
  });
};

function performAction(actionName, demo) {
  switch (actionName) {
    case "Move X by 50":
      return moveXBy50(demo);
      break;

    case "Move Y by 50":
      return moveYBy50(demo);
      break;

    case "go to (0,0)":
      return moveToOrigin(demo);
      break;

    case "Move X=50,Y=50":
      return moveXto50Yto50(demo);
      break;

    case "Move X by 50 & Y by 50":
      return moveXby50Yby50(demo);
      break;

    case "go to random position":
      return moveToRandomPos(demo);
      break;

    case "Say Hello":
      return updateSayHelloSprite(demo);
      break;

    case "Say Hello For 1 sec":
      return sayHelloOneSecond(demo);
      break;

    default:
      break;
  }
}
