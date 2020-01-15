'use strict'

let areasMoscow = ['Академический',  'Бабушкинский',  'Вешняки', 'Дмитровский', 'Лосиноостровский', 'Ростокино'];
let wasINareas = []; //список посещенных районов
let tobeAreasMoscow = [];//куда нужно сходить


function arrayRandElement(arr) { //
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
if (storageAvailable('localStorage')) {
  randomB.addEventListener("click", pushBut);// Yippee! We can use localStorage awesomeness
}
else {
  alert("нет у тебя сториджа")// Too bad, no localStorage for us
}

function runAreas(str){
    tobeAreasMoscow =str.split(",");
    document.getElementById('textAreas').value = arrayRandElement(tobeAreasMoscow);
    wasINareas.push(document.getElementById('textAreas').value);
    tobeAreasMoscow.splice(tobeAreasMoscow.indexOf(document.getElementById('textAreas').value),1);
}

function pushBut(){
    if (localStorage.getItem("areasMoscowStorage")) {
        if (localStorage["areasMoscowStorage"].length >1){
            runAreas(localStorage["areasMoscowStorage"]);
            if (tobeAreasMoscow.length == 0)
                localStorage.setItem("areasMoscowStorage", "1");
            else
                localStorage.setItem("areasMoscowStorage", tobeAreasMoscow);
        }   else {
                document.getElementById('textAreas').value = "Молодец";
                alert("Ты уже везде побывал");
            }
    } else {
        runAreas(areasMoscow.toString());
        localStorage.setItem("areasMoscowStorage", tobeAreasMoscow);

    }
    console.log(localStorage["areasMoscowStorage"]);
    // console.log(localStorage.getItem("areasMoscowStorage"));
}


randomB.oncontextmenu = function(){
    alert("Выдает случайный район Москвы");
}

console.log(localStorage);
