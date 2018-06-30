const defaults = {
  volume: 1,
  rate: 1,
  pitch: 1,
  lang: "pt-PT",
};

const readMessage = text => {
  const messageDefinition = { ...defaults, text };

  /* eslint-disable */
  const speech = new SpeechSynthesisUtterance();
  /* eslint-enable */

  Object.assign(speech, messageDefinition);

  window.speechSynthesis.speak(speech);
};

export default readMessage;
