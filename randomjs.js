'use strict'

let areasMoscow = ['Академический',  'Бабушкинский',  'Вешняки', 'Дмитровский', 'Лосиноостровский', 'Ростокино'];
let wasINareas = []; //список посещенных районов
let tobeAreasMoscow = [];//куда нужно сходить


function arrayRandElement(arr) { //
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function pushBut(){
    let x = document.getElementById('textAreas').value;
    x = arrayRandElement(areasMoscow);
    document.getElementById('textAreas').value = x;
    wasINareas.push(x);
    areasMoscow.splice(areasMoscow.indexOf(x),1);
    console.log(wasINareas);
}
randomB.addEventListener("click", pushBut);

randomB.oncontextmenu = function(){
    alert("Выдает случайный район Москвы");
}
