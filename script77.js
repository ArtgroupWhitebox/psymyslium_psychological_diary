let sliderLine = document.querySelectorAll(".slider-line");
console.log(sliderLine);

let arrSliderLine = [];

for (let i=0; i<sliderLine.length; i++) {
    arrSliderLine[i] = sliderLine[i].src;
    sliderLine[i].remove();
};
console.log(arrSliderLine);

let step = 0;
let offset = 0;

function showCard() {
    let card = document.createElement('img');
    card.classList.add('slider-line');
    card.src = arrSliderLine[step];
    card.style.top = offset*278 + 'px';
    let slider = document.querySelector('.slider');
    slider.appendChild(card);
    if (step + 1 == arrSliderLine.length) {
        step=0;
    } else {
        step++;
    };    
    offset = 1;
};

let buttonMixCards = document.querySelector('.button__mix-cards');
buttonMixCards.onclick = topMixCardsFu;

var startMix; 

function topMixCardsFu() {

    startMix = setInterval(function startMixFu() {
        buttonMixCards.onclick = null;
        let arrSliderLine_2 = document.querySelectorAll('.slider-line');
        let offset_2 = 0;
        for (i=0; i<arrSliderLine_2.length; i++) {
            arrSliderLine_2[i].style.top = offset_2*278 - 278 + 'px';
            offset_2++;
        };
        arrSliderLine_2[0].remove();
        showCard();            
    }, 25);
};
showCard(); 
showCard();

let buttonSelectCard = document.querySelector('.button__select-card');
buttonSelectCard.onclick = selectCardFu;

function selectCardFu() {
    clearInterval(startMix);
    buttonMixCards.onclick = topMixCardsFu;
};

// записать МЫСЛИ Audio

var buttonAudioWrite2 = document.getElementsByClassName("button__audio-write2")[0];
buttonAudioWrite2.onclick = showAudioWrite2;

function showAudioWrite2() {
    window.location.href = "index5577.html";       
};
