$(document).ready(function() {
  $("form#blanks").submit(function(event) {
    var sentenceInput = $("input#sentence").val();
    var re = /\s* \s*/;

    var splitSentences = sentenceInput.split(re);
    var sentenceContainers = splitSentences.filter(function(splitSentence) {

      return splitSentence.length > 2;
    });
    var sentenceOutput = sentenceContainers.map(function(sentenceContainer) {
      return sentenceContainer.split("").reverse().join("");
    });

    $(".output").empty();
    $(".output").append("<li>"+sentenceOutput+"</li>");
        event.preventDefault();
  });
});
