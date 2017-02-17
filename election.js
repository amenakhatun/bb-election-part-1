$(document).ready(function() {

  $.ajax({
    url: bb-election-api.herokuapp.com/
    method:'GET',
    data:
    dataType: 'json',
    }).done(function(data) {
    var name = data.name
    var votes = data.votes
    var candidateDetails - $('#list');
    console.log(data);

    for(var 1=0; i <data.candidates.length; i++) {
      console.log(data.candidate[i].name);
      $('<li></li>').html(data.candidates[i].name).appendTo(candidateDetails);
      $('<li></li>').html(data.candidates[i].votes).appendTo(candidateDetails);
    });
  });
});

//In the .done(function(responseData){}) callback function for the AJAX
//request loop over the candidates in responseData, and append a <li> element
// for each candidate into the DOM at our <ul> from the last step. You'll
// want to show the name and votes count of each candidate.










//request loop over the candidates in responseData, and append a <li> element
//for each candidate into the DOM at our <ul> from the last step. You'll want
// to show the name and votes count of each candidate.
