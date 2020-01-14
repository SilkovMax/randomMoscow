'use strict'

let areasMoscow = ['Академический',  'Бабушкинский',  'Вешняки', 'Дмитровский', 'Лосиноостровский', 'Ростокино'];
let wasINareas = []; //список посещенных районов
let tobeAreasMoscow = [];//куда нужно сходить


function arrayRandElement(arr) { //
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function pushBut(){

    if (localStorage["areasMoscowStorage"] = !null ){
        localStorage["areasMoscowStorage"] = areasMoscow;
        if (areasMoscow.length>0){
            let x = document.getElementById('textAreas').value;
            x = arrayRandElement(areasMoscow);
            document.getElementById('textAreas').value = x;
            wasINareas.push(x);
            areasMoscow.splice(areasMoscow.indexOf(x),1);
            localStorage.removeItem("areasMoscowStorage");
            localStorage["areasMoscowStorage"] = areasMoscow;
        } else {
            alert("Ты уже везде побывал");
        }
    } else {
        if (areasMoscow.length>0){
            let x = document.getElementById('textAreas').value;
            x = arrayRandElement(areasMoscow);
            document.getElementById('textAreas').value = x;
            wasINareas.push(x);
            areasMoscow.splice(areasMoscow.indexOf(x),1);
            localStorage.removeItem("areasMoscowStorage");
            localStorage["areasMoscowStorage"] = areasMoscow;
        } else {
            alert("Ты уже везде побывал");
        }
    }
    console.log(localStorage);


    //
    // localStorage["areasMoscowStorage"] = areasMoscow;
    // console.log(wasINareas);
    // // localStorage["areasMoscowStorage"] = areasMoscow;
    // console.log(areasMoscow);
    console.log(localStorage["areasMoscowStorage"]);
    // console.log(localStorage.getItem("areasMoscowStorage"));
}
randomB.addEventListener("click", pushBut);

randomB.oncontextmenu = function(){
    alert("Выдает случайный район Москвы");
}

// localStorage["username"] = "Silkov Maxim";
// localStorage.setItem("age","27");

console.log(localStorage);
