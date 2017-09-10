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