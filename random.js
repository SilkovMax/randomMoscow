'use strict'

let areasMoscow = ['Академический', 'Алексеевский', 'Алтуфьевский', 'Арбат', 'Аэропорт', 'Бабушкинский', 'Басманный', 'Беговой', 'Бескудниковский', 'Бибирево', 'Бирюлёво Восточное', 'Бирюлёво Западное', 'Богородское', 'Братеево', 'Бутырский', 'Вешняки', 'Внуково', 'Внуковское, поселение', 'Войковский', 'Вороновское, поселение', 'Воскресенское, поселение', 'Восточное Дегунино', 'Восточное Измайлово', 'Восточный', 'Выхино-Жулебино', 'Гагаринский', 'Головинский', 'Гольяново', 'Даниловский', 'Десёновское, поселение', 'Дмитровский', 'Донской', 'Дорогомилово', 'Замоскворечье', 'Западное Дегунино', 'Зюзино', 'Зябликово', 'Ивановское', 'Измайлово', 'Капотня', 'Киевский, поселение', 'Клёновское, поселение', 'Кокошкино, поселение', 'Коньково', 'Коптево', 'Косино-Ухтомский', 'Котловка', 'Краснопахорское, поселение', 'Красносельский', 'Крылатское', 'Крюково', 'Кузьминки', 'Кунцево', 'Куркино', 'Левобережный', 'Лефортово', 'Лианозово', 'Ломоносовский', 'Лосиноостровский', 'Люблино', 'Марушкинское, поселение', 'Марфино', 'Марьина Роща', 'Марьино', 'Матушкино', 'Метрогородок', 'Мещанский', 'Митино', 'Михайлово-Ярцевское, поселение', 'Можайский', 'Молжаниновский', 'Москворечье-Сабурово', 'Московский, поселение', 'Мосрентген, поселение', 'Нагатино-Садовники', 'Нагатинский Затон', 'Нагорный', 'Некрасовка', 'Нижегородский', 'Ново-Переделкино', 'Новогиреево', 'Новокосино', 'Новофёдоровское, поселение', 'Обручевский', 'Орехово-Борисово Северное', 'Орехово-Борисово Южное', 'Останкинский', 'Отрадное', 'Очаково-Матвеевское', 'Первомайское, поселение', 'Перово', 'Печатники', 'Покровское-Стрешнево', 'Преображенское', 'Пресненский', 'Проспект Вернадского', 'Раменки', 'Роговское, поселение', 'Ростокино', 'Рязановское, поселение', 'Рязанский', 'Савёлки', 'Савёловский', 'Свиблово', 'Северное Бутово', 'Северное Измайлово', 'Северное Медведково', 'Северное Тушино', 'Северный', 'Силино', 'Сокол', 'Соколиная Гора', 'Сокольники', 'Солнцево', 'Сосенское, поселение', 'Старое Крюково', 'Строгино', 'Таганский', 'Тверской', 'Текстильщики', 'Тёплый Стан', 'Тимирязевский', 'Троицк, поселение', 'Тропарёво-Никулино', 'Филёвский Парк', 'Фили-Давыдково', 'Филимонковское, поселение', 'Хамовники', 'Ховрино', 'Хорошёво-Мнёвники', 'Хорошёвский', 'Царицыно', 'Черёмушки', 'Чертаново Северное', 'Чертаново Центральное', 'Чертаново Южное', 'Щаповское, поселение', 'Щербинка, поселение', 'Щукино', 'Южное Бутово', 'Южное Медведково', 'Южное Тушино', 'Южнопортовый', 'Якиманка', 'Ярославский', 'Ясенево'];

let areas = ['a', 'b', 'c', 'd', 'e', 'f'];
let areasRand = Math.floor(Math.random() * areas.length);
//areas.splice(areasRand);
//console.log(areas.splice(areasRand));
/*for (let i = 0; i < areas.length; i++) {
	console.log(areas[Math.floor(Math.random() * areas.length)]);
};*/
//console.log(areas.length);
//console.log(areasRand);
//console.log(areas[areasRand]);
let areasChoosed = [];

function shuffle(array) {// Fisher-Yates (aka Knuth).
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

areas = shuffle(areas);
console.log(areas);

let visitedAreas = [];
visitedAreas.splice(0,0,areas[0]);
areas.splice(0,1);

console.log(visitedAreas);
console.log(areas);


/*areasMoscow.splice(areasRand,1);
console.log(areasRand)
function goMoscow(m) {
    this.areas = a;
  }*/
/*let rand = areasMoscow[Math.floor(Math.random() * areasMoscow.length)];
areasMoscow.splice(areasRand,1);


console.log(rand);
var rand_numbers = [1,2,3];

function my_rand() {
    while (true) {
        var result = Math.floor(1 + Math.random() * 40);
        if (rand_numbers.indexOf(result) == -1) {
            rand_numbers.push(result);
            return result;
        }
    }
}
console.log(my_rand)


/*const palidrom = str => {
	str = str.toLowerCase();
	return str == str.split('').reverse().join('');
}
console.log(palidrom('1assa'))*/

/*let number = Math.ceil(Math.random() * 100);
console.log(number);*/


/*function moveBall() {//функция когда мячик догоняет стрелку

		let topCanvas = canvas.offsetTop + borderDist;
		let leftCanvas = canvas.offsetLeft + borderDist;
		let bottomCanvas = canvas.offsetTop - borderDist + canvas.offsetWidth;
		let rightCanvas	= canvas.offsetLeft - borderDist + canvas.offsetWidth;
		console.log(mX + " " + mY);

		let a = (ballY - mY) / (ballX - mX);
		let b = ballY - a * ballX;
		ballX = (mX - ballX)/(1/speedBall) + ballX;
		ballY = a * ballX + b;
		console.log(ballX + " " + ballY);

		 if (mY < topCanvas) ballY = topCanvas;
		 if (mX < leftCanvas) ballX = leftCanvas;
		 if (mX > rightCanvas - ball.offsetWidth) {
			ballX = rightCanvas- ball.offsetWidth;
			}
		 if (mY > bottomCanvas - ball.offsetWidth) {
			ballY = bottomCanvas - ball.offsetWidth;
		   }
		 ball.style.left = ballX + 'px';
		 ball.style.top = ballY + 'px';

}	*/

/*var person = {}; // Создали пустой объект
//var person.name = prompt('Введите имя', 'name');
var person.lastname = prompt('Введите фамилию', 'lastname');
var person.age = prompt('Введите возраст', 'age');


alert( person.name );
alert( person.lastname );
alert( person.age );

person.name = "John"; // Поменяли значение свойства name
alert( person.name ); // John


function testStr(a,b) {
	let c = a.length + b.length;
	return c;
}
console.log(testStr(3,1))


let ser = prompt('Введите ваше имя', 'superman');
if (confirm("Это ваше настоящее имя?")) {
	alert('Ваше имя ' + ser);
	} else {
		alert('Cancel');
		}*/



function testArray(a,b,c){
  let total = 0, sumA = 0, sumB = 0, sumC = 0;
  for (let i of a) {
	  sumA += i;
  }
  console.log(sumA);


  for (let i=0; i < b.length; i++) {
	  sumB += b[i];
  }
    sumC = c.reduce(
		(accum,currentValue) => accum + currentValue
  );
  console.log(sumC);

	total = sumA + sumB + sumC;
	console.log(total);
}
testArray([10,212,3555,444],[5,6,70],[20,10,100]);

function testArray1(a, b) {
    // a.concat(b).split("").reverse().join("") + "Иванов";
// a = a.concat(b);
a = a.concat(b).toString().split("").reverse().join("").concat("Иванов");

console.log(a);

};
testArray1([1025, 2, 1], [5, 647, 70]);


function testDateTime(a,b) {

    let DateA = Date.parse(a);
    let DateB = Date.parse(b);
    let maxDate = Math.max(DateA,DateB);

    // let DateC = maxDate.toLocaleStri("ru")
    console.log(DateA + ' ' + DateB);
    console.log(maxDate);
    // let test = new Date(maxDate);
    // console.log(test);

    let total = (new Date(maxDate)).getDay();
    console.log(total);
    switch (total) {
        case 1: total = "Понедельник"; break;
        case 2: total = "Вторник"; break;
        case 3: total = "Среда"; break;
        case 4: total = "Четверг"; break;
        case 5: total = "Пятница"; break;
        case 6: total = "Суббота"; break;
        case 0: total = "Воскресенье"; break;
    }
    console.log(total);

}
testDateTime("26 october 2019 11:24", "17 april 1992 20:30");

function testErrorFunc(a, func) {
    try {
        func(a)

    } catch (e) {
        let x =e.name;
        console.log(x);

    }

    // return x;
    // console.log(x);
}
testErrorFunc(9);

function testRegExp(s, sub_s) {
    let y = new RegExp(sub_s, "g");
    console.log(y);
    let x = s.match(y);
    x = x.toString()

    console.log(x);
}
testRegExp("sdssdsds dw dswwdsd", "dw")
