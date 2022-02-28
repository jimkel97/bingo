let spots = [];
let words = ['cardinal','sloth','raccoon','lizard','spider','tiger','colorbird','deer','bunny'];
let runningearwords;
let wordup = [];
let clickedword;
let xwords = words.sort(() => Math.random() - 0.5);
console.log('value of xwords array is ' + xwords);
for (var i = 0; i < xwords.length; i++) {
    spots[i] = xwords[i];
}
console.log('value of spots array is ' + spots);
$('#topleft').addClass('bg'+spots[0]+'word');
$('#topleft').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#topleft').removeClass('bg'+spots[0]+'word');
    $('#topleft').removeClass('bgblank');
    $('#topleft').addClass('bg'+spots[0]);
});
$('#topcenter').addClass('bg'+spots[1]+'word');
$('#topcenter').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#topcenter').removeClass('bg'+spots[1]+'word');
    $('#topcenter').removeClass('bgblank');
    $('#topcenter').addClass('bg'+spots[1]);
});
$('#topright').addClass('bg'+spots[2]+'word');
$('#topright').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#topright').removeClass('bg'+spots[2]+'word');
    $('#topright').removeClass('bgblank');
    $('#topright').addClass('bg'+spots[2]);
});
$('#midleft').addClass('bg'+spots[3]+'word');
$('#midleft').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#midleft').removeClass('bg'+spots[3]+'word');
    $('#midleft').removeClass('bgblank');
    $('#midleft').addClass('bg'+spots[3]);
});
$('#midcenter').addClass('bg'+spots[4]+'word');
$('#midcenter').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#midcenter').removeClass('bg'+spots[4]+'word');
    $('#midcenter').removeClass('bgblank');
    $('#midcenter').addClass('bg'+spots[4]);
});
$('#midright').addClass('bg'+spots[5]+'word');
$('#midright').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#midright').removeClass('bg'+spots[5]+'word');
    $('#midright').removeClass('bgblank');
    $('#midright').addClass('bg'+spots[5]);
});
$('#bottleft').addClass('bg'+spots[6]+'word');
$('#bottleft').on('click', function () {
    //$('#topleft').switchClass('bgbirdword', 'bgbird', 0);
    $('#bottleft').removeClass('bg'+spots[6]+'word');
    $('#bottleft').removeClass('bgblank');
    $('#bottleft').addClass('bg'+spots[6]);
});
$('#bottcenter').addClass('bg'+spots[7]+'word');
$('#bottcenter').on('click', function () {
    //$('#topcenter').switchClass('bgbirdword', 'bgbird', 0);
    $('#bottcenter').removeClass('bg'+spots[7]+'word');
    $('#bottcenter').removeClass('bgblank');
    $('#bottcenter').addClass('bg'+spots[7]);
});
$('#bottright').addClass('bg'+spots[8]+'word');
$('#bottright').on('click', function () {
    //$('#topright').switchClass('bgbirdword', 'bgbird', 0);
    $('#bottright').removeClass('bg'+spots[8]+'word');
    $('#bottright').removeClass('bgblank');
    $('#bottright').addClass('bg'+spots[8]);
});
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
        wordup = [];
    } else {
        console.log('you got it wrong');
    }
}
