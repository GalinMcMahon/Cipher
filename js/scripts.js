$(document).ready(function() {

// User enters a sentence
	var sentence = prompt("Enter a sentence");
  console.log(sentence);

// 1) we grab the first and last characters and capitalize them
  var grabFirstLast = function(sentence){
  return (sentence.charAt(0) + sentence.charAt(sentence.length-1)).toUpperCase();
  };
  var firstAndLast = grabFirstLast(sentence);

// 2) we reversed the chars of firstAndLast
    var reverseString = function(firstAndLast){
    var char1= firstAndLast.charAt(0);
    var char2=firstAndLast.charAt(1);
    var lastAndFirst = char2 + char1;
    return lastAndFirst;
  };

//3) we use the first two functions to make a new string
    var third = function(sentence) {
    var lastFirst = reverseString(grabFirstLast(sentence));
    var ending = sentence + lastFirst;
    return ending;
  }

    var final = third(sentence);
    console.log(final);

    // 4) counting number in sentence, dividing by two, and output the letter at this index.

    var fourth = function(sentence){
      var count = Math.floor((sentence.length)/2);
      var letter = sentence.charAt(count);
      var concanted = letter + sentence;
      console.log(concanted);
  };
    var count = fourth(sentence);

    var bonus = function(sentence){
      var blah = sentence.split('').reverse().join('');
      return blah;
    };
    console.log(bonus(sentence));

    $("#original").click(function(){
      $("#originalp").empty();
      $("#originalp").append(sentence);
      $("#newp").empty();
    })

    $("#new").click(function(){
      $("#newp").empty();
      $("#newp").append(bonus(sentence));
      $("#originalp").empty();
    })











});
