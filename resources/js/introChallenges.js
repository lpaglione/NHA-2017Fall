// Laura Paglione (MENTOR)
// Nanohacker Academy
// Fall 2017: Intro to APIs
// September, 2017
// Introductory challenges - javascript code

//Challenge 3 code
$("button#challenge3").click(() => {
    let name = $("input#challenge3").val();
    $("p#challenge3").html(`Nice to meet you, ${name}! `);
});

//Challenge 4 code
$("button#challenge4").click(() => {
  let name = $("input#challenge4Name").val();
  let food = $("input#challenge4Food").val();
  let color = $("input#challenge4Color").val();
  $("table#challenge4").append(`<tr><td>${name}</td><td>${food}</td><td bgcolor=${color}></td></tr>`);
});