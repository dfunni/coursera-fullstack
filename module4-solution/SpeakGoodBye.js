(function (window){
  var byeSpeaker = {};
  var speakWord = "Good Bye"; // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window);
