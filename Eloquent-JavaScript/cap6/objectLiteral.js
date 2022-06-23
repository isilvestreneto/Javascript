// Object literal
const microfone = {
  color: "black",
  isOn: true,
  toggleOnOff: function () {
    if (microfone.isOn) {
      console.log("desligar");
    } else {
      console.log("ligar");
    }
    microfone.isOn = !microfone.isOn;
  },
};

microfone.toggleOnOff();
microfone.toggleOnOff();
