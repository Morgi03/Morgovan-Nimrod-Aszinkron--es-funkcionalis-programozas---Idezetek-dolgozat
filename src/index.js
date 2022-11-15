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
        li.innerHTML = li.innerHTML.replace(/\bThe\b/g, "<b>The</b>");
        li.innerHTML = li.innerHTML.replace(/\bthe\b/g, "<b>the</b>");
        elemek.appendChild(li);
    }
}


async function LengthsOfQuotes() {
    let response = await fetch('/quotes.json')
    let vals = await response.json();
    let adatok = vals.quotes;
    eraser();
    let LengthOfTheQuotes = [];
    for (let q of adatok) {
        LengthOfTheQuotes.push(q.quote.length);
    }
    let elemLista = LengthOfTheQuotes.join(', ');
    let elem = document.getElementById('thelengthofquotes');
    elem.textContent = elemLista;
}


async function quotesOfAuthor() {
    let response = await fetch('/quotes.json')
    let vals = await response.json();
    let input = document.getElementById('who');
    let adatok = vals.quotes.filter(e => e.author.toUpperCase().includes(input.value.toUpperCase()));
    eraser();
    let ReadonlyInput = document.getElementById('ReadonlyInput');
    ReadonlyInput.value = adatok.length;
}



function eraser() {
    document.getElementById('thelist').textContent = "";
    document.getElementById('theorderedlist').textContent = "";
    document.getElementById('thelengthofquotes').textContent = "";
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('allquote').addEventListener('click', () => AllQuoteInABCorder());
    document.getElementById('the').addEventListener('click', () => The());
    document.getElementById('hossz').addEventListener('click', () => LengthsOfQuotes());
    document.getElementById('who').addEventListener('input', () => quotesOfAuthor());
})
