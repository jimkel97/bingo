$('#topleft').on('click', function () {
  //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
  $('#topleft').removeClass('bgbirdword');
  $('#topleft').addClass('bgbird');
});
let spot = [];
let words = ['mouse', 'cat', 'dog'];
let runningearwords;
let wordup = [];
let clickedword;
let xwords = words.sort(() => Math.random() - 0.5);
console.log('value of xwords array is ' + xwords);
for (var i = 0; i < xwords.length; i++) {
  spot[i] = xwords[i];
}
console.log('value of spot array is ' + spot);

let earxwords = words.sort(() => Math.random() - 0.5);
console.log('value of earxwords array is ' + earxwords);
for (var i = 0; i < earxwords.length; i++) {
  wordup = earxwords.shift();
  console.log('value of wordup is ' + wordup);
  clickedword = prompt('what is your clicked word?');
  console.log('value of clickedword is ' + clickedword);
  if (clickedword === wordup) {
    //if clicked word matches wordup
    //  then loop through the spots array and change the matched word to 'correct'.  corrects could also bind to cause card to flip.
    for (var i = 0; i < spot.length; i++) {
      if (spot[i] === wordup) {
        spot[i] = "correct";
        console.log(spot[i]);
      }
    }
    //  then use an if to see if spot 0 1 and 2 include 'correct' or 1, 4 7 , etc....
    wordup = [];
  } else {
    console.log('you got it wrong');
  }
}
