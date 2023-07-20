export const moveXBy50 = (demo) => {
  console.log("Moving x by 50");
  var x = demo.current.getCoordinates().left;
  var y = demo.current.getCoordinates().top;

  const tOption = {
    tweenType: "linear-move",
    startXY: [x, y],
    xTo: [x + 50, x + 50],
    yTo: [y, y],
    duration: 1000,
    loop: false,
  };

  return new Promise((resolve, reject) => {
    demo.current.mystartTween(tOption, () => {
      resolve("ok");
    });
  });
};

export const moveYBy50 = async (demo) => {
  console.log("Moving y by 50");
  const x = demo.current.getCoordinates().left;
  const y = demo.current.getCoordinates().top;
  const tOption = {
    tweenType: "linear-move",
    startXY: [x, y],
    xTo: [x, x],
    yTo: [y + 50, y + 50],
    duration: 1000,
    loop: false,
  };

  return new Promise((resolve, reject) => {
    demo.current.mystartTween(tOption, () => {
      resolve("ok");
    });
  });
};

export const rotate360 = (demo) => {
  console.log("360 Rotated");
  const x = demo.current.getCoordinates().left;
  const y = demo.current.getCoordinates().top;
  const tOption = {
    tweenType: "spin",
    startXY: [x, y],
    xTo: [x + 150, x + 150],
    yTo: [y + 50, y + 50],
    duration: 2000,
    loop: false,
  };

  return new Promise((resolve, reject) => {
    demo.current.mystartTween(tOption, () => {
      resolve("ok");
    });
  });
};

export const moveXby50Yby50 = (demo) => {
  console.log("Moving x by 50");
  var x = demo.current.getCoordinates().left;
  var y = demo.current.getCoordinates().top;

  const tOption = {
    tweenType: "linear-move",
    startXY: [x, y],
    xTo: [x + 50, x + 50],
    yTo: [y, y],
    duration: 1000,
    loop: false,
  };

  demo.current.mystartTween(tOption, () => {
    return new Promise((resolve, reject) => {
      const tOption2 = {
        tweenType: "linear-move",
        startXY: [demo.current.getCoordinates().left, demo.current.getCoordinates().top],
        xTo: [demo.current.getCoordinates().left, demo.current.getCoordinates().top],
        yTo: [y + 50, y + 50],
        duration: 1000,
        loop: false,
      };
      demo.current.mystartTween(tOption2, () => {
        resolve("ok");
      });
    });
  });
};

export const moveXto50Yto50 = (demo) => {
  console.log("Moving x by 50");
  var x = demo.current.getCoordinates().left;
  var y = demo.current.getCoordinates().top;

  const tOption = {
    tweenType: "linear-move",
    startXY: [x, y],
    xTo: [50, 50],
    yTo: [50, 50],
    duration: 1000,
    loop: false,
  };
 
 
    return new Promise((resolve, reject) => {
      demo.current.mystartTween(tOption, () => {
        resolve("ok");
      });
    });

};

export const moveToOrigin = (demo) => {
  const x = demo.current.getCoordinates().left;
  const y = demo.current.getCoordinates().top;
  const tOption = {
    tweenType: "linear-move",
    startXY: [x, y],
    xTo: [0, 0],
    yTo: [0, 0],
    duration: 1000,
    loop: false,
  };

  return new Promise((resolve, reject) => {
    demo.current.mystartTween(tOption, () => {
      resolve("ok");
    });
  });
};

export const moveToRandomPos = (demo) => {
  const xRandom = Math.floor(Math.random() * 301);
  const yRandom = Math.floor(Math.random() * 301);

  const x = demo.current.getCoordinates().left;
  const y = demo.current.getCoordinates().top;
  const tOption = {
    tweenType: "linear-move",
    startXY: [x, y],
    xTo: [xRandom, xRandom],
    yTo: [yRandom, yRandom],
    duration: 1000,
    loop: false,
  };

  return new Promise((resolve, reject) => {
    demo.current.mystartTween(tOption, () => {
      resolve("ok");
    });
  });
};

export const resetToOrigin = (demo) => {
  const tweenOptions = {
    tweenType: "sine-wave",
    startXY: [100, 100],
    xTo: [0, 0],
    yTo: [0, 0],
    duration: 1000,
    loop: false,
  };

  return new Promise((resolve, reject) => {
    demo.current.mystartTween(tweenOptions, () => {
      resolve("ok");
    });
  });
};
