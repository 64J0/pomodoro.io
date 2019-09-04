const audio = document.querySelector("audio");
let flag = true;



/*
    Essa função é usada para aumentar o valor mostrado na tela quando for pressionado o botão com o símbolo de mais
*/
function aumenta(numero) {

    if (flag) { //Só vai funcionar a função caso não tenha sido iniciado o timer
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
    
}




/*
    Essa função é usada para diminuir o valor mostrado na tela quando for pressionado o botão com o símbolo de menos
*/
function diminui(numero) {

    if(flag) {
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
}





var auxiliar = 0;
let countdown;

/*
    Essa função é usada para começar o timer, consequentemente decrementando seu valor a partir da contagem do tempo
*/

function comecar() {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + getMilissegundos();

    countdown = setInterval(() => {
        
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        diminui_numero();

        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

    }, 1000);

    flag = false;
}





/*
    Esta função pega os valores que estão contidos nos campos do site e converte em o respectivo valor em milissegundos.
*/

function getMilissegundos() {

    let milisegundos = 0;

    milissegundos = document.getElementById("visual0").innerHTML * 1000 * 600;
    milissegundos += document.getElementById("visual1").innerHTML * 1000 * 60;
    milissegundos += document.getElementById("visual2").innerHTML * 1000 * 10;
    milissegundos += document.getElementById("visual3").innerHTML * 1000;

    return milissegundos;

}





/*
    Essa função é usada para diminuir o número mostrado na tela do usuário
*/
function diminui_numero() {

    let visual = document.getElementsByClassName("visual");
    let horario = '';
    let aux = 0;

    let vetor = [];

    for (let i = 0; i < visual.length; i++) {
        vetor[i] = document.getElementById("visual" + i).innerHTML;
    }

    if (vetor[3] != 0) {
        document.getElementById("visual3").innerHTML = vetor[3] - 1;
    } else if ((vetor[2] != 0) && (vetor[3] == 0)) {
        document.getElementById("visual2").innerHTML = vetor[2] - 1;
        document.getElementById("visual3").innerHTML = 9;
    } else if ((vetor[1] != 0) && (vetor[2] == 0) && (vetor[3] == 0)) {
        document.getElementById("visual1").innerHTML = vetor[1] - 1;
        document.getElementById("visual2").innerHTML = 5;
        document.getElementById("visual3").innerHTML = 9;
    } else if ((vetor[0] != 0) && (vetor[1] == 0) && (vetor[2] == 0) && (vetor[3] == 0)) {
        document.getElementById("visual0").innerHTML = vetor[0] - 1;
        document.getElementById("visual1").innerHTML = 9;
        document.getElementById("visual2").innerHTML = 5;
        document.getElementById("visual3").innerHTML = 9;
    } else {
        pausar();
        audio.currentTime = 1;
        audio.play();
        flag = true;
    }

    muda_titulo();
    
}





/*
    Essa função é usada para pausar o timer
*/
function pausar() {
    clearInterval(countdown);
    audio.pause();
    flag = true;
}





/*
    Essa função é usada para atualizar o título da página com o valor atual do timer
*/
function muda_titulo() {

    let visual = document.getElementsByClassName("visual");
    let horario = "";

    for (let i = 0; i < visual.length; i++) {
        horario += document.getElementById("visual" + i).innerHTML;
        if (i == 1) {
            horario += ":";
        }
    }

    if (horario != "00:00") {
        document.title = "Pomodoro " + horario;
    } else {
        document.title = "Pomodoro";
    }
    
}

//-------------------------------------------------------------------
//Vanilla JS Countdown Timer

/*
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

function timer(seconds) {
    //clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds;
    displayTimeLeft(secondsLeft);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        //creck if we should stop it
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        //display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hours = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back at ${hour}:${minutes}`;
}
*/