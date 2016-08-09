var quotes = [
  "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
  
  "Life just doesn't care about our aspirations, or sadness. It's often random, and it's often stupid and it's often completely unexpected, and the closures and the epiphanies and revelations we end up receiving from life, begrudgingly, rarely turn out to be the ones we thought.",
  
  "It is necessary to fall in love... if only to provide an alibi for all the random despair you are going to feel anyway.",
  
  
];
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

$('.button').click(function(){
  $('#quotes').text(shuffle(quotes));
});