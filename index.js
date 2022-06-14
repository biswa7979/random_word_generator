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
var myInterval;

function one_timer(){
    timer = 15000;
}
function second_timer(){
    timer = 15000;
}
function third_timer(){
    timer = 15000;
}


function word_gen(){
    var x = Math.floor((Math.random() *len ) + 1);
    document.getElementById("word").innerHTML = stickyWords[x];
}

function start(){
    myInterval = setInterval(word_gen, timer);
    
}
function stop(){
    clearInterval(myInterval);
}
