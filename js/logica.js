function aumenta(numero) {
    let id = "visual" + numero;
    let visual = document.getElementById(id);
    if ((numero % 2) == 0) {
        if (visual.innerHTML < 5){
            visual.innerHTML++;
        } else if (visual.innerHTML == 5) {
            visual.innerHTML = 0;
        }
    } else {
        if (visual.innerHTML < 9){
            visual.innerHTML++;
        } else if (visual.innerHTML == 9) {
            visual.innerHTML = 0;
        }
    }
}

function diminui(numero) {
    let id = "visual" + numero;
    let visual = document.getElementById(id);
    if ((numero % 2) == 0) {
        if (visual.innerHTML > 0){
            visual.innerHTML--;
        } else if (visual.innerHTML == 0) {
            visual.innerHTML = 5;
        }
    } else {
        if (visual.innerHTML > 0){
            visual.innerHTML--;
        } else if (visual.innerHTML == 0) {
            visual.innerHTML = 9;
        }
    }
}

function comecar() {
    let visual = document.getElementsByClassName("visual");
    let horario = '';
    let aux = Array([0, 0, 0, 0]);
    for (var i = 0; i < visual.length; i++) {
        horario += document.getElementById("visual" + i).innerHTML;
        aux[i] = document.getElementById("visual" + i).innerHTML;//Pega o valor dentro da tag <h3>
        if (i == 1) {
            horario += ':';
        }
    }
    console.log(horario);

    //Diminui um segundo:
    let flag = 1;
    do {
        if (aux[visual.length] != 0) {
            aux[visual.length]--;
        } else { //caso o ultimo digito dos segundos seja 0
            aux[visual.length] = 9;
            if (aux[visual.length - 1] != 0) {
                aux[visual.length - 1]--;
            } else { //caso o primeiro digito dos segundos seja 
                aux[visual.length - 1] = 5;
            }
        }
    } while(aux != [0, 0, 0, 0]);

    setInterval(comecar(), 1000);
}

function pausar() {

}