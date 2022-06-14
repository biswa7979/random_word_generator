// function fun(){
//     alert("hello bro well come to sb tech talk");
// }

const stickyWords =[
    "the",
    "there",
    "by",
    "at",
    "and",
    "so",
    "if",
    "than",
    "but",
    "about",
    "in",
    "on",
    "the",
    "was",
    "for",
    "that",
    "said",
    "a",
    "or",
    "of",
    "to",
    "there",
    "will",
    "be",
    "what",
    "get",
    "go",
    "think",
    "just",
    "every",
    "are",
    "it",
    "were",
    "had",
    "i",
    "very",
    ];

var timer = 4000;
var len = stickyWords.length;


function one_timer(){
    timer = 15000;
}
function second_timer(){
    timer = 15000;
}
function third_timer(){
    timer = 15000;
}

// function start(){
//     setInterval(word_gen, timer);
// }
const myinterval = setInterval(word_gen, timer);

function word_gen(){
    var x = Math.floor((Math.random() *len ) + 1);
    document.getElementById("word").innerHTML = stickyWords[x];
}
function stop(){
    clearInterval(myinterval);
}