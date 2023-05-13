let phrases = ["Not the Sharpest Tool in the Shed", "Hard Pill to Swallow", "Up In Arms",'A Bite at the Cherry','Money Doesn\'t Grow On Trees','Down To The Wire','Playing For Keeps','A Leg Up','Close But No Cigar'];
let prev = ''
let cur = ''
let btn = document.querySelector('button');

function changePhrase() {

    do
    {
    let randnum = Math.floor(Math.random() * phrases.length);
    cur = phrases[randnum]
    console.log(cur)
    }while(prev === cur)
    document.querySelector('h2').innerHTML = cur;
    prev = cur

}

btn.onclick = changePhrase