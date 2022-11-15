import "./style.css";

async function AllQuoteInABCorder() {
  let response = await fetch("/quotes.json");
  let vals = await response.json();
  let adatok = vals.quotes.sort(function (a, b) {
    if (a.author < b.author) {
      return -1;
    }
    if (a.author > b.author) {
      return 1;
    }
    return 0;
  });
  let elemek = document.getElementById("thelist");
  elemek.textContent = "";
  for (let q of adatok) {
    let li = document.createElement("li");
    li.innerHTML = q.author + "<br /> <blockquote>" + q.quote+"</blockquote>";
    elemek.appendChild(li);
  }
}

function eraser() {
    document.getElementById("thelist").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("allquote")
    .addEventListener("click", () => AllQuoteInABCorder());
});
