let phrases = ["Not the Sharpest Tool in the Shed", "Hard Pill to Swallow", "Up In Arms",'A Bite at the Cherry','Money Doesn\'t Grow On Trees','Down To The Wire','Playing For Keeps','A Leg Up','Close But No Cigar'];
let randnum = Math.floor(Math.random() * phrases.length);


let btn = document.querySelector('button');

function changePhrase() {
    document.querySelector('h1').innerHTML = phrases[randnum];
}

btn.onclick = changePhrase