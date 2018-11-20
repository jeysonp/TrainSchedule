$(document).ready(function () {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9NVzOhZYxCytoXS-laDJYjjk2pHpbhzo",
    authDomain: "trainscheduler-1b32e.firebaseapp.com",
    databaseURL: "https://trainscheduler-1b32e.firebaseio.com",
    projectId: "trainscheduler-1b32e",
    storageBucket: "trainscheduler-1b32e.appspot.com",
    messagingSenderId: "849841190738"
  };

  firebase.initializeApp(config);

  var database = firebase.database();

  $("#submitBtn").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTime = $("#firstTime").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push(
      {
      trainName: trainName,
      destination: destination,
      firstTime: firstTime,
      frequency: frequency,
      }
    );
      
    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTime").val("");
    $("#frequency").val("");   
  });

  database.ref().on("child_added", function(childSnapshot) {
    var newTrain = childSnapshot.val().trainName;
    var newDest = childSnapshot.val().destination;
    var newTime = childSnapshot.val().firstTime;
    var newFrequency = childSnapshot.val().frequency;

    //Need to study up on moment.js I don't want to rush this. I want to understand it. 

    //Need to addend data coming out of firebase to the table.


  });
});
