(function (window){
  var helloSpeaker = {};
  var speakWord = "Hello"; // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.helloSpeaker = helloSpeaker;
})(window);

