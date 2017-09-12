// Laura Paglione (MENTOR)
// Nanohacker Academy
// Fall 2017: Intro to APIs
// September, 2017
// Introductory challenges - javascript code

//Challenge 3 code
$("button#challenge3").click(() => {
  const name = $("input#challenge3").val();
  $("p#challenge3").html(`Nice to meet you, ${name}! `);
});

//Challenge 4 code
$("button#challenge4").click(() => {
  const name = $("input#challenge4Name").val();
  const food = $("input#challenge4Food").val();
  const color = $("input#challenge4Color").val();
  $("table#challenge4").append(`<tr><td>${name}</td><td>${food}</td><td bgcolor=${color}></td></tr>`);
});

//Challenge 5 code

//Starting values
let myInt = 7;
let myString = "the number 7";
let myNumString = "7";

//Displaying the variables to the user
$("div#challenge5vars").append(`<table>
  <tr><td><strong>myInt:</strong></td><td>${myInt}</td></tr>
  <tr><td><strong>myString:</strong></td><td>${myString}</td></tr>
  <tr><td><strong>myNumString:</strong></td><td>${myNumString}</td></tr>
  </table>`);

//Checking my predictions
$("div#challenge5predictions").append(`<table>
  <tr><td span=2><strong>Addition</strong></td></tr>
  <tr><td>myInt + myInt?</strong></td><td>${myInt + myInt}</td></tr>
  <tr><td>myInt + myString?</strong></td><td>${myInt + myString}</td></tr>
  <tr><td>myInt + myNumString?</strong></td><td>${myInt + myNumString}</td></tr>
  <tr><td>myNumString + myInt?</strong></td><td>${myNumString + myInt}</td></tr>
  <tr><td span=2><strong><br/>Fancier addition</strong></td></tr>
  <tr><td>myInt + myNumString + myString?</strong></td><td>${myInt + myNumString + myString}</td></tr>
  <tr><td>myInt + myInt + myString?</strong></td><td>${myInt + myInt + myString}</td></tr>
  <tr><td>myString + myInt + myInt?</strong></td><td>${myString + myInt + myInt}</td></tr>
  <tr><td span=2><br/><strong>Subtraction</strong></td></tr>
  <tr><td>myInt - myString?</td><td>${myInt - myString}</td></tr>
  <tr><td>myInt - myNumString?</td><td>${myInt - myNumString}</td></tr>
  <tr><td>myString - myNumString?</td><td>${myString - myNumString}</td></tr>
  <tr><td span=2><br/><strong>Comparisons</strong></td></tr>
  <tr><td>myInt == myNumString?</td><td>${myInt == myNumString}</td></tr>
  <tr><td>myInt === myNumString?</td><td>${myInt === myNumString}</td></tr>
  </table>`);