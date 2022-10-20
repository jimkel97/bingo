let spots = [];
let words = ['cardinal', 'sloth', 'raccoon', 'lizard', 'spider', 'tiger', 'colorbird', 'deer', 'bunny'];
let runningearwords;
let wordup = [];
let clickedword;
let xwords = words.sort(() => Math.random() - 0.5);
console.log('value of xwords array is ' + xwords);
for (var i = 0; i < xwords.length; i++) {
  spots[i] = xwords[i];
}
console.log('value of spots array is ' + spots);
$('#topleft').addClass('bg' + spots[0] + 'word');
$('#topcenter').addClass('bg' + spots[1] + 'word');
$('#topright').addClass('bg' + spots[2] + 'word');
$('#midleft').addClass('bg' + spots[3] + 'word');
$('#midcenter').addClass('bg' + spots[4] + 'word');
$('#midright').addClass('bg' + spots[5] + 'word');
$('#bottleft').addClass('bg' + spots[6] + 'word');
$('#bottcenter').addClass('bg' + spots[7] + 'word');
$('#bottright').addClass('bg' + spots[8] + 'word');
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
    for (var i = 0; i < spots.length; i++) {
      if (spots[i] === wordup) {
        // spots[i] = "correct"; this line was interfering.  not sure how to fix, if needed
        console.log(spots[i]);
      }
    }
    //  then use an if to see if spot 0 1 and 2 include 'correct' or 1, 4 7 , etc....
    if (spots[0] === wordup) {
      $('#topleft').removeClass('bg' + spots[0] + 'word');
      $('#topleft').removeClass('bgblank');
      $('#topleft').addClass('bg' + spots[0]);
    } else if (spots[1] === wordup) {
      $('#topcenter').removeClass('bg' + spots[1] + 'word');
      $('#topcenter').removeClass('bgblank');
      $('#topcenter').addClass('bg' + spots[1]);
    } else if (spots[2] === wordup) {
      $('#topright').removeClass('bg' + spots[2] + 'word');
      $('#topright').removeClass('bgblank');
      $('#topright').addClass('bg' + spots[2]);
    } else if (spots[3] === wordup) {
      $('#midleft').removeClass('bg' + spots[3] + 'word');
      $('#midleft').removeClass('bgblank');
      $('#midleft').addClass('bg' + spots[3]);
    } else if (spots[4] === wordup) {
      $('#midcenter').removeClass('bg' + spots[4] + 'word');
      $('#midcenter').removeClass('bgblank');
      $('#midcenter').addClass('bg' + spots[4]);
    } else if (spots[5] === wordup) {
      $('#midright').removeClass('bg' + spots[5] + 'word');
      $('#midright').removeClass('bgblank');
      $('#midright').addClass('bg' + spots[5]);
    } else if (spots[6] === wordup) {
      $('#bottleft').removeClass('bg' + spots[6] + 'word');
      $('#bottleft').removeClass('bgblank');
      $('#bottleft').addClass('bg' + spots[6]);
    } else if (spots[7] === wordup) {
      $('#bottcenter').removeClass('bg' + spots[7] + 'word');
      $('#bottcenter').removeClass('bgblank');
      $('#bottcenter').addClass('bg' + spots[7]);
    } else if (spots[8] === wordup) {
      $('#bottright').removeClass('bg' + spots[8] + 'word');
      $('#bottright').removeClass('bgblank');
      $('#bottright').addClass('bg' + spots[8]);
    }
    wordup = [];
  } else {
    console.log('you got it wrong');
  }
}
