// Массив пси карт

let modalCard = document.querySelector('.modal-card');
let modalSelectCard = document.querySelector('.modal-select-card');

modalCard.style.display = "none";
modalSelectCard.style.display = "none";

let slider = document.querySelector(".slider");
slider.style.display = "none";

let sliderLine = document.querySelectorAll(".slider-line");
console.log(sliderLine);

let arrSliderLine = [];

for (let i=0; i<sliderLine.length; i++) {
    let urlKey = new URL(sliderLine[i].src);
    const str = sliderLine[i].src;
    let numberCut = str.substr(-7, 3);
    arrSliderLine[i] = {
        id: i, 
        href: urlKey,
        "alt": "карта_" + numberCut,
    };
    sliderLine[i].remove();
};
// console.log(arrSliderLine);

// Рандомные числа в заданном количестве

let rand;

function randomInteger(min, max) {
    rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    // console.log(rand);
    return rand;
};

let buttonMixCards2 = document.querySelector('.button__mix-cards');
buttonMixCards2.onclick = topMixCardsFu2;

// Массив заполненный рандомными числами

let arreyResult;

let arreyLenght;
let min;
let max;

let lengthsItem;

let boxCards = document.querySelector('.box-cards');
let arrSliderLine_2 = [];

function topMixCardsFu2() {

    boxCards.innerHTML = '';
    
    arreyLenght = 110;
    min = -10;
    max = 700;

    arreyResult = [];
    for (let x=0; x<arreyLenght; x++) {
        arreyResult.push(randomInteger(min, max));        
    };
    
    // console.log(arreyResult);
    
    // переприсвоить знечениям id рондомные числа
    for (let a=0; a< arreyResult.length; a++) {
        let z = arreyResult[a];
        // console.log(z);
        arrSliderLine[a].id = z;               
    };
    
    // упорядочить объекты в массиве по id
    arrSliderLine.sort((prev, next) => prev.id - next.id);
    for (let i=0; i<arrSliderLine.length; i++) {
        
        arrSliderLine_2[i] = {
            id: arrSliderLine[i].id, 
            href: arrSliderLine[i].href,
            "alt": arrSliderLine[i].alt,
        }; 
    };
    console.log(arrSliderLine_2);
        
    showBoxCardsFn();
    showCardFn();   
};

window.onload = topMixCardsFu2;


// Показать на экране пси_карты (перемешанные рандомным образом)

let cards;

function showBoxCardsFn() {

    for (let i=0; i<arrSliderLine_2.length; i++) {

    cards = document.createElement('img');
    cards.classList.add('slider-line_2');
    cards.src = arrSliderLine_2[i].href;
    cards.alt = arrSliderLine_2[i].alt;
    boxCards.appendChild(cards);
    }; 
    console.log(cards);
};
showBoxCardsFn();
 
// изменить цвет рамки при нажатии на карту (при выборе карты)

var allCards = document.getElementsByClassName("slider-line_2");

function showCardFn() {
    
    for (let i=0; i<allCards.length; i++) {        

        allCards[i].onclick = function() {

            clearRedCardFn();
        
            allCards[i].classList.add("slider-line_red");
        };                   
    };        
};

// очистить от выделения рамок красным цветом (перекрасить все в желтый)

function clearRedCardFn() {

    for (let i=0; i<allCards.length; i++) {
        if (allCards[i].className == "slider-line_2 slider-line_red") {
            allCards[i].classList.remove("slider-line_red");            
        };
    };
};

// Кнопка - смотреть карту

let buttonShowCard = document.querySelector('.button__select-card');
buttonShowCard.onclick = lookCardFn;

let submitModalSelect = document.querySelector('.submit_modal-select');


// function lookCardFn() {

//     for (let i=0; i<allCards.length; i++) {

//         if (allCards[i].className !== "slider-line_2 slider-line_red") {

//             console.log("выбeри карту");
//             modalCard.style.display = "flex";
//             modalSelectCard.style.display = "flex";

                        
//         } else {
//             let lookCard = document.createElement('img');
//             lookCard.classList.add('slider-line');
//             lookCard.src = allCards[i].src;
//             slider.appendChild(lookCard);
//             slider.style.display = "flex";
//             boxCards.style.display = "none";
//             buttonShowCard.style.display = "none";
//             buttonMixCards2.style.display = "none";
//             modalCard.style.display = "none";
//             modalSelectCard.style.display = "none";
            
//         };
//     };
// };

function lookCardFn() {

    for (let i=0; i<allCards.length; i++) {  

        if (allCards[i].className !== "slider-line_2 slider-line_red") {
            console.log("выбeри карту");
            modalCard.style.display = "flex";
            modalSelectCard.style.display = "flex";     
               
        } else {
            let lookCard = document.createElement('img');
            lookCard.classList.add('slider-line');
            lookCard.src = allCards[i].src;
            slider.appendChild(lookCard);
            slider.style.display = "flex";
            boxCards.style.display = "none";
            buttonShowCard.style.display = "none";
            buttonMixCards2.style.display = "none";
            modalCard.style.display = "none";
            modalSelectCard.style.display = "none";   
            break;  
        }; 
    };
};


submitModalSelect.onclick = modalSelectCardFn;
            function modalSelectCardFn() {
                modalCard.style.display = "none";
                modalSelectCard.style.display = "none";
            };


// записать МЫСЛИ Audio

var buttonAudioWrite2 = document.getElementsByClassName("button__audio-write2")[0];
buttonAudioWrite2.onclick = showAudioWrite2;

function showAudioWrite2() {
    window.location.href = "index5577.html";       
};
