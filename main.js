(()=>{"use strict";function e(){document.getElementById("thelist").textContent="",document.getElementById("theorderedlist").textContent=""}document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("allquote").addEventListener("click",(()=>async function(){let t=await fetch("/quotes.json"),n=await t.json();e();let o=n.quotes.sort((function(e,t){return e.author<t.author?-1:e.author>t.author?1:0})),l=document.getElementById("thelist");for(let e of o){let t=document.createElement("li");t.innerHTML=e.author+"<br /> <blockquote>"+e.quote+"</blockquote>",l.appendChild(t)}}())),document.getElementById("the").addEventListener("click",(()=>async function(){let t=await fetch("/quotes.json"),n=(await t.json()).quotes;e();let o=[];for(let e of n)o.push(e.quote);let l=document.getElementById("theorderedlist");for(let e=0;e<o.length;e++){let t=document.createElement("li");t.textContent=o[e],t.innerHTML=t.innerHTML.replace(/\bThe\b/g,"<b>The</b>"),t.innerHTML=t.innerHTML.replace(/\bthe\b/g,"<b>the</b>"),l.appendChild(t)}}()))}))})();