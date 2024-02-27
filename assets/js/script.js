const equal = document.getElementById('equal');
const visor = document.getElementById('visor');
const content = visor.querySelector('#content');
const specialCaracters = ['+', '-', '/', 'x', '.'];
let ans;

function addArgument(button){
    content.innerHTML += button.innerHTML;
}

function addSignArgument(button){
    if(!specialCaracters.includes(content.innerHTML.charAt(content.innerHTML.length-1))){
        content.innerHTML += button.innerHTML;
    }
}

function calculate(){
    if(!specialCaracters.includes(content.innerHTML.charAt(content.innerHTML.length-1))){
        content.innerHTML = content.innerHTML.replace(/x/g, '*');
        const resultado = eval(content.innerHTML);
        content.innerHTML = resultado;
        ans = Number(resultado);
    }
}

function clearAll(){
    content.innerHTML = '';
}

function deleteChar(){
    if(visor.querySelector('#content').innerHTML.length > 0){
    content.innerHTML = content.innerHTML.slice(0, -1);
    }
}

