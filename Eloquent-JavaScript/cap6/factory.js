// Factory
function createMicrofone(color = "black") {
  let isOn = true;
  return {
    color,
    isOn,

    toggleOnOff: function () {
      if (isOn) {
        console.log("desligar");
      } else {
        console.log("ligar");
      }
      isOn = !isOn;
    },
  };
}

const microfone = createMicrofone();
