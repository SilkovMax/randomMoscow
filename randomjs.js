'use strict'

let areasMoscow = ['Академический', 'Алексеевский', 'Алтуфьевский', 'Арбат', 'Аэропорт', 'Бабушкинский', 'Басманный', 'Беговой', 'Бескудниковский', 'Бибирево', 'Бирюлёво Восточное', 'Бирюлёво Западное', 'Богородское', 'Братеево', 'Бутырский', 'Вешняки', 'Внуково', 'Внуковское', 'Войковский', 'Вороновское', 'Воскресенское', 'Восточное Дегунино', 'Восточное Измайлово', 'Восточный', 'Выхино-Жулебино', 'Гагаринский', 'Головинский', 'Гольяново', 'Даниловский', 'Десёновское', 'Дмитровский', 'Донской', 'Дорогомилово', 'Замоскворечье', 'Западное Дегунино', 'Зюзино', 'Зябликово', 'Ивановское', 'Измайлово', 'Капотня', 'Киевский', 'Клёновское', 'Кокошкино', 'Коньково', 'Коптево', 'Косино-Ухтомский', 'Котловка', 'Краснопахорское', 'Красносельский', 'Крылатское', 'Крюково', 'Кузьминки', 'Кунцево', 'Куркино', 'Левобережный', 'Лефортово', 'Лианозово', 'Ломоносовский', 'Лосиноостровский', 'Люблино', 'Марушкинское', 'Марфино', 'Марьина Роща', 'Марьино', 'Матушкино', 'Метрогородок', 'Мещанский', 'Митино', 'Михайлово-Ярцевское', 'Можайский', 'Молжаниновский', 'Москворечье-Сабурово', 'Московский', 'Мосрентген', 'Нагатино-Садовники', 'Нагатинский Затон', 'Нагорный', 'Некрасовка', 'Нижегородский', 'Ново-Переделкино', 'Новогиреево', 'Новокосино', 'Новофёдоровское', 'Обручевский', 'Орехово-Борисово Северное', 'Орехово-Борисово Южное', 'Останкинский', 'Отрадное', 'Очаково-Матвеевское', 'Первомайское', 'Перово', 'Печатники', 'Покровское-Стрешнево', 'Преображенское', 'Пресненский', 'Проспект Вернадского', 'Раменки', 'Роговское', 'Ростокино', 'Рязановское', 'Рязанский', 'Савёлки', 'Савёловский', 'Свиблово', 'Северное Бутово', 'Северное Измайлово', 'Северное Медведково', 'Северное Тушино', 'Северный', 'Силино', 'Сокол', 'Соколиная Гора', 'Сокольники', 'Солнцево', 'Сосенское', 'Старое Крюково', 'Строгино', 'Таганский', 'Тверской', 'Текстильщики', 'Тёплый Стан', 'Тимирязевский', 'Троицк', 'Тропарёво-Никулино', 'Филёвский Парк', 'Фили-Давыдково', 'Филимонковское', 'Хамовники', 'Ховрино', 'Хорошёво-Мнёвники', 'Хорошёвский', 'Царицыно', 'Черёмушки', 'Чертаново Северное', 'Чертаново Центральное', 'Чертаново Южное', 'Щаповское', 'Щербинка', 'Щукино', 'Южное Бутово', 'Южное Медведково', 'Южное Тушино', 'Южнопортовый', 'Якиманка', 'Ярославский', 'Ясенево'];
let wasINareas = []; //список посещенных районов
let tobeAreasMoscow = [];//куда нужно сходить

function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
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
            lettersMove();
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
    // console.log(localStorage["areasMoscowStorage"]);
    // console.log(localStorage.getItem("areasMoscowStorage"));
}


randomB.oncontextmenu = function(){
    alert("Выдает случайный район Москвы");
}

console.log(localStorage);

//красивое появление текста
function lettersMove(){
let theLetters = "абвгдеёжзийклмнопрстуфхцчщъыьэюя#%&^+=-"; //You can customize what letters it will cycle through
let ctnt = document.getElementById('textAreas').value; // Your text goes here
console.log(ctnt);
let speed = 50; // ms per frame
let increment = 8; // frames per step. Must be >2


let clen = ctnt.length;
let si = 0;
let stri = 0;
let block = "";
let fixed = "";
//Call self x times, whole function wrapped in setTimeout
(function rustle (i) {
setTimeout(function () {
  if (--i){rustle(i);}
  nextFrame(i);
  si = si + 1;
}, speed);
})(clen*increment+1);
function nextFrame(pos){
  for (let i=0; i<clen-stri; i++) {
    //Random number
    let num = Math.floor(theLetters.length * Math.random());
    //Get random letter
    let letter = theLetters.charAt(num);
    block = block + letter;
  }
  if (si == (increment-1)){
    stri++;
  }
  if (si == increment){
  // Add a letter;
  // every speed*10 ms
  fixed = fixed +  ctnt.charAt(stri - 1);
  si = 0;
  }
  $("#textAreas").html(fixed + block);
  block = "";
}
};



// $(document).ready(function(){
// let theLetters = "абвгдеёжзийклмнопрстуфхцчщъыьэюя#%&^+=-"; //You can customize what letters it will cycle through
// let ctnt = document.getElementById('textAreas').value"; // Your text goes here
// console.log(ctnt);
// let speed = 50; // ms per frame
// let increment = 8; // frames per step. Must be >2
//
//
// let clen = ctnt.length;
// let si = 0;
// let stri = 0;
// let block = "";
// let fixed = "";
// //Call self x times, whole function wrapped in setTimeout
// (function rustle (i) {
// setTimeout(function () {
//   if (--i){rustle(i);}
//   nextFrame(i);
//   si = si + 1;
// }, speed);
// })(clen*increment+1);
// function nextFrame(pos){
//   for (let i=0; i<clen-stri; i++) {
//     //Random number
//     let num = Math.floor(theLetters.length * Math.random());
//     //Get random letter
//     let letter = theLetters.charAt(num);
//     block = block + letter;
//   }
//   if (si == (increment-1)){
//     stri++;
//   }
//   if (si == increment){
//   // Add a letter;
//   // every speed*10 ms
//   fixed = fixed +  ctnt.charAt(stri - 1);
//   si = 0;
//   }
//   $("#textAreas").html(fixed + block);
//   block = "";
// }
// });
