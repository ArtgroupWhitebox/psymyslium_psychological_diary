let enterInput = document.querySelector(".enter_input");
enterInput.style.display = "flex";

let enterNumber = document.querySelector(".enter_number");
enterNumber.style.display = "flex";

// Массив пси карт
let slider = document.querySelector(".slider");
slider.style.display = "none";

let sliderLine = document.querySelectorAll(".slider-line");
console.log(sliderLine);

let arrSliderLine = [];

for (let i=0; i<sliderLine.length; i++) {
    arrSliderLine[i] = {
        id: i, 
        name: sliderLine[i].src
    };
    sliderLine[i].remove();
};
console.log(arrSliderLine);

// Рандомные числа в заданном количестве

let rand;

function randomInteger(min, max) {
    rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    console.log(rand);
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

function topMixCardsFu2() {

    arreyLenght = 8;
    min = -10;
    max = 70;

    arreyResult = [];
    for (let x=0; x<arreyLenght; x++) {
        arreyResult.push(randomInteger(min, max));        
    };
    
    console.log(arreyResult);
    
    // переприсвоить знечениям id рондомные числа
    for (let a=0; a< arreyResult.length; a++) {
        let z = arreyResult[a];
        console.log(z);
        arrSliderLine[a].id = z;               
    };
    
    // упорядочить объекты в массиве по id
    arrSliderLine.sort((prev, next) => prev.id - next.id);

    console.log(arrSliderLine);

        
    enterInput.style.display = "flex";
    slider.style.display = "none";
    enterNumber.value = "";
    enterNumber.placeholder = "";    
};

function validationEnterInput() {
    x = enterNumber.value;
    if (x < 0 || x > 107) {
        enterNumber.className = 'enter_number error';
        enterNumber.value = "";
        enterNumber.placeholder = 'Введите корректное число';
        return false;
    } else {
        enterNumber.className = 'enter_number';
        return true;
    };
};
validationEnterInput(); 

let buttonShowCard = document.querySelector('.button__select-card');
buttonShowCard.onclick = showCardFu;

function showCardFu() {

    if (validationEnterInput()===true) {

        enterInput.style.display = "none";
        slider.style.display = "flex";
    };    
};

// let step = 0;
// let offset = 0;

// function showCard() {
//     let card = document.createElement('img');
//     card.classList.add('slider-line');
//     card.src = arrSliderLine[step];
//     card.style.top = offset*278 + 'px';
//     let slider = document.querySelector('.slider');
//     slider.appendChild(card);
//     if (step + 1 == arrSliderLine.length) {
//         step=0;
//     } else {
//         step++;
//     };    
//     offset = 1;
// };

// записать МЫСЛИ Audio

var buttonAudioWrite2 = document.getElementsByClassName("button__audio-write2")[0];
buttonAudioWrite2.onclick = showAudioWrite2;

function showAudioWrite2() {
    window.location.href = "index5577.html";       
};
