import './style.css'

async function AllQuoteInABCorder() {
    let response = await fetch('/quotes.json')
    let vals = await response.json();
    eraser();
    let adatok = vals.quotes.sort(function (a, b) {
        if (a.author < b.author) {
            return -1
        }
        if (a.author > b.author) {
            return 1
        }
        return 0
    })
    let elemek = document.getElementById('thelist');
    for (let q of adatok) {
        let li = document.createElement('li');
        li.innerHTML = q.author + '<br /> <blockquote>' + q.quote + '</blockquote>';
        elemek.appendChild(li);
    }
}

async function The() {
    let response = await fetch('/quotes.json')
    let vals = await response.json();
    let adatok = vals.quotes;
    eraser();
    let StringTomb = [];
    for (let q of adatok) {
        StringTomb.push(q.quote);
    }
    let elemek = document.getElementById('theorderedlist');
    for (let i = 0; i < StringTomb.length; i++) {
        let li = document.createElement('li');
        li.textContent = StringTomb[i];
        li.innerHTML = li.innerHTML.replace(/\bThe\b/g,"<b>The</b>");
        li.innerHTML = li.innerHTML.replace(/\bthe\b/g,"<b>the</b>");
        elemek.appendChild(li);
    }
}


function eraser() {
    document.getElementById('thelist').textContent = "";
    document.getElementById('theorderedlist').textContent = "";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allquote').addEventListener('click', () => AllQuoteInABCorder());
    document.getElementById('the').addEventListener('click', () => The());
})
