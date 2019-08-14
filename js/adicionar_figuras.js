let soma = document.getElementsByClassName("mais");

for(let i = 0; i < soma.length; i++) {
    soma[i].innerHTML = "<img src=" + "'img/plus.png'" + " id='soma" + i + "' onclick=" + "'aumenta(" + i + ")'>";
}

let visual = document.getElementsByClassName("visual");

for(let i = 0; i < visual.length; i++) {
    visual[i].innerHTML = "<h3 id=visual" + i + " >0</h3>";
}

let subtracao = document.getElementsByClassName("menos");

for(let i = 0; i < subtracao.length; i++) {
    subtracao[i].innerHTML = "<img src=" + "'img/minus.png'" + " id='subtracao" + i + "' onclick=" + "'diminui(" + i + ")'>";
}