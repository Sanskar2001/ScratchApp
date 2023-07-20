import { moveToOrigin } from "../TweenOptions/CustomTweens"

export const updateSayHelloSprite=(demo)=>{


    demo.current.updateSprite({value:1})
}

export const sayHelloOneSecond=(demo)=>{

    demo.current.updateSprite({value:1})
    // console.log("SayHello 1sec")
    // setTimeout(()=>{
    //     demo.current.updateSprite({value:0})
    //     console.log("5 sec over")
    // },1000);

}