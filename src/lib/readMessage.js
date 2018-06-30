import sirenSound from "../assets/siren.mp3";

const defaults = {
  volume: 1,
  rate: 1,
  pitch: 1,
  lang: "pt-PT",
};

/* eslint-disable */
const siren = new Audio(sirenSound);
/* eslint-enable */

const readMessage = text => {
  const messageDefinition = { ...defaults, text };

  /* eslint-disable */
  const speech = new SpeechSynthesisUtterance();
  /* eslint-enable */

  Object.assign(speech, messageDefinition);

  siren.play();

  return setTimeout(() => {
    window.speechSynthesis.speak(speech);
  }, 7000);
};

export default readMessage;
