var dateMy = new Date();

var dateNow = Date.now();

var weekDay = dateMy.getDay(); 

// ДАТА сейчас в динамике в Формате (18 апреля 2020 г.)

let dateFormat = new Date().toLocaleString('ru', {
    year: 'numeric',       
    month: 'long',
    day: 'numeric',      
});

var writeDate = document.getElementsByClassName("write-date");
for (i=0; i<=1; i++) {
    writeDate[i].innerHTML = dateFormat;
}

// ВРЕМЯ в Формате (14:03:24) меняется при обновлении страницы

var timeMemory = new Date().toLocaleTimeString();
console.log(timeMemory);

// функция - ВРЕМЯ каждую секунду в динамике в Формате (14.03.04)

function updateWriteTime() { 

    var writeTime = document.getElementsByClassName("write-time")[0];
    writeTime.classList.add("write-time-text_2");   

    var writeAudioTime = document.getElementsByClassName("write-audio-time")[0];
    writeAudioTime.classList.add("write-time-audio_2");
        
    (function () {
        now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        minute = (minute < 10) ? '0' + minute : minute;
        second = (second < 10) ? '0' + second : second;
        hour = (hour < 10) ? '0' + hour : hour;
        var time = hour+':'+minute+':'+second;
        
        var writeTimeText = document.getElementsByClassName("write-time-text_2")[0];
        writeTimeText.innerHTML = time;

        var writeTimeAudio = document.getElementsByClassName("write-time-audio_2")[0];
        writeTimeAudio.innerHTML = time;

        window.setTimeout(arguments.callee, 1000);
    }) ()
};

// функция - ОЧИСТИТЬ ДАТЫ в календаре

function clearDate() {
    var dateClear = document.getElementsByClassName("date-link");
    for (let i=0; i<dateClear.length; i++) {

    dateClear[i].innerHTML = "";
    };
    return dateClear[i];
};


// Кнопки - выбрать ГОД

var numberDateLink = document.getElementsByClassName("number__date-link");
var dateLink = document.getElementsByClassName("date-link");
var buttonIndicateYear = document.getElementsByClassName("button__indicate-year")[0];
var arrowMinusYear = document.getElementsByClassName("button__arrow-minus-year")[0];
    arrowMinusYear.onclick = minusYear;
function minusYear() {    
    buttonIndicateYear.innerHTML = yearValue--;
    for (let i=0; i<dateLink.length; i++) {
        numberDateLink[i].classList.remove("number__date-link_class");
        dateLink[i].classList.remove("date-link_class");
        dateLink[i].href = "#";
        numberDateLink[i].classList.remove("date-today");
        dateLink[i].classList.remove("link_date-today");
    };
    return showStartDate(monthValue, yearValue);
};        
   
var arrowPlusYear = document.getElementsByClassName("button__arrow-plus-year")[0];
    arrowPlusYear.onclick = plusYear;
function plusYear() {
    buttonIndicateYear.innerHTML = yearValue++;
    for (let i=0; i<dateLink.length; i++) {
        numberDateLink[i].classList.remove("number__date-link_class");
        dateLink[i].classList.remove("date-link_class");
        dateLink[i].href = "#";
        numberDateLink[i].classList.remove("date-today");
        dateLink[i].classList.remove("link_date-today");
    };
    return showStartDate(monthValue, yearValue);
};  

// Кнопки - выбрать МЕСЯЦ

var buttonIndicateMonth = document.getElementsByClassName("button__indicate-month")[0];
var arrowMinusMonth = document.getElementsByClassName("button__arrow-minus-month")[0];
    arrowMinusMonth.onclick = minusMonth;
function minusMonth() {
    buttonIndicateMonth.innerHTML = monthValue--;
    for (let i=0; i<dateLink.length; i++) {
        numberDateLink[i].classList.remove("number__date-link_class");
        dateLink[i].classList.remove("date-link_class");
        dateLink[i].href = "#";
        numberDateLink[i].classList.remove("date-today");
        dateLink[i].classList.remove("link_date-today");
    };
    return showStartDate(monthValue, yearValue);
}; 

var arrowPlusMonth = document.getElementsByClassName("button__arrow-plus-month")[0];
    arrowPlusMonth.onclick = plusMonth;
function plusMonth() {
    buttonIndicateMonth.innerHTML = monthValue++; 
    for (let i=0; i<dateLink.length; i++) {
        numberDateLink[i].classList.remove("number__date-link_class");
        dateLink[i].classList.remove("date-link_class");
        dateLink[i].href = "#";
        numberDateLink[i].classList.remove("date-today");
        dateLink[i].classList.remove("link_date-today");
    };   
    return showStartDate(monthValue, yearValue);    
};


// функция - СТАРТОВАЯ ДАТА для календаря


function showStartDate(monthValue, yearValue) {
 
    var dateStart = new Date();
    console.log(dateStart);

    dateStart.setFullYear(yearValue);
    var yearStart = dateStart.getFullYear();
    console.log(yearStart);

    var yearButton = document.getElementsByClassName("button__indicate-year")[0];
    yearButton.innerHTML = yearStart;


    dateStart.setMonth(monthValue);
    var monthStart1 = dateStart.getMonth();
    console.log(monthStart1);

    dateStart.setDate(1);
    var weekDayStart = dateStart.getDay();
    console.log(weekDayStart);

    var monthButton = document.getElementsByClassName("button__indicate-month")[0];
    var monthStart = dateStart.toLocaleString('ru', {month: 'long'});
    monthButton.innerHTML = monthStart;

    function getDaysInMonth(month, year) {
        return new Date(year, month+1, 0).getDate();
    };

    console.log(getDaysInMonth(monthStart1, yearStart));
    console.log(getDaysInMonth(3, 2020));
    console.log(getDaysInMonth(4, 2020));
    console.log(getDaysInMonth(5, 2020));

    function indStart() {
        return weekDayStart !== 0 ? weekDayStart - 1 : 6;
    }
    var start = indStart();
    console.log(start);

    var DaysInMonth = getDaysInMonth(monthStart1, yearStart);
    var endInd = DaysInMonth+start;

    clearDate();

    var dateLink = document.getElementsByClassName("date-link");

    for (let ind=start; ind<endInd; ind++) {

        var number = (ind - start + 1);
        dateLink[ind].innerHTML = number;

        console.log(dateLink[ind]);
        console.log([ind]);
    }

    var numberDateLink;
    var dateLink;
    var buttonIndicateYear;
    var buttonIndicateMonth;

    var numberDate; // '24'
    var indicateYear;

    var indicateMonth;
    var indicateMonthValue; // 'мая'

    var month3;
    
    var today; // '23'
    var year3;

    arrDateValue = localStorage.getItem("DateKey") ? 
    JSON.parse(localStorage.getItem("DateKey")) : [];

    var itemDate; // '4'
    var itemMonth; // 'мая'
    var itemYear; // '2020'

    var itemDateValue;  // "24 мая 2020 г." 

    function show() {

        for (let i=0; i<arrDateValue.length; i++) {

            itemDate = arrDateValue[i].split(' ')[0].toString(); // '4'
            itemMonth = arrDateValue[i].split(' ')[1]; // 'мая'
            itemYear = arrDateValue[i].split(' ')[2].toString(); // '2020'

            itemDateValue = arrDateValue[i];  // "24 мая 2020 г." 

            function todayColor() {        

                numberDateLink = document.getElementsByClassName("number__date-link");
                dateLink = document.getElementsByClassName("date-link");
                buttonIndicateYear = document.getElementsByClassName("button__indicate-year")[0];
                buttonIndicateMonth = document.getElementsByClassName("button__indicate-month")[0];
        
                for (let x=0; x<dateLink.length; x++) {
        
                    numberDate = dateLink[x].innerHTML; // '24'
                    indicateYear = buttonIndicateYear.innerHTML; // '2020'
                    
                    indicateMonth = buttonIndicateMonth.innerHTML;
                    if (indicateMonth=='январь') {
                        indicateMonthValue='января';
                    } else if (indicateMonth=='февраль') {
                        indicateMonthValue='февраля';
                    } else if (indicateMonth=='март') {
                        indicateMonthValue='марта';
                    } else if (indicateMonth=='апрель') {
                        indicateMonthValue='апреля';
                    } else if (indicateMonth=='май') {
                        indicateMonthValue='мая';
                    } else if (indicateMonth=='июнь') {
                        indicateMonthValue='июня';
                    } else if (indicateMonth=='июль') {
                        indicateMonthValue='июля';
                    } else if (indicateMonth=='август') {
                        indicateMonthValue='августа';
                    } else if (indicateMonth=='сентябрь') {
                        indicateMonthValue='сентября';
                    } else if (indicateMonth=='октябрь') {
                        indicateMonthValue='октября';
                    } else if (indicateMonth=='ноябрь') {
                        indicateMonthValue='ноября';
                    } else {
                        indicateMonthValue='декабря';
                    };
        
                    month3 = new Date().toLocaleString('ru', {
                        month: 'long'}); // 'май' - 'мая'          
                    today = new Date().getDate().toString(); // '23'
                    year3 = new Date().getFullYear().toString(); // '2020' 
                    
                    if (numberDate===today && indicateMonth===month3 && indicateYear===year3) {
                        
                        numberDateLink[x].classList.add("date-today");
                        dateLink[x].classList.add("link_date-today");
                                            
                    } else if (itemDate!==today && itemMonth===indicateMonthValue && itemYear===indicateYear &&
                        itemDate===numberDate) {

                        numberDateLink[x].classList.add("number__date-link_class");
                        dateLink[x].classList.add("date-link_class");
                        
                        dateLink[x].href = `#anchor_date-link_` + i;
       
                        // Якорная ссылка с даты на событие в календаре
                        
                        dateLink[x].onclick = showDateLink;
                        function showDateLink() {
                            window.location.hash = `anchor_date-link_` + i;
                        };            
                    };                    
                };
                // console.log(today);
                // console.log(numberDate);
                // console.log(indicateYear);
                // console.log(indicateMonthValue);
                // console.log(year3);
                // console.log(month3); 
                // console.log(indicateMonth);

            };
            todayColor();            
        };
        // console.log(itemDate);
        // console.log(itemMonth);
        // console.log(itemYear);
        // console.log(itemDateValue);  
    };
    show();
};
var yearValue = new Date().getFullYear();
var monthValue = new Date().getMonth();
showStartDate(monthValue, yearValue);

// Кнопки - записать МЫСЛИ

var container6 = document.getElementsByClassName("container-6_text_write")[0];
var container8 = document.getElementsByClassName("container-8_audio_write")[0];
var container7 = document.getElementsByClassName("container-7_text_memory")[0];
var container9 = document.getElementsByClassName("container-9_audio_memory")[0];


    // записать МЫСЛИ Текстом

var buttonTextWrite = document.getElementsByClassName("button__text-write")[0];
buttonTextWrite.onclick = showTextWrite;

function showTextWrite() {
    window.location.hash = "anchor__diary-title";
    container6.style.display = "grid";
    container8.style.display = "none"; 
    updateWriteTime();
};

var textWrite2Textarea = document.getElementsByClassName("text-write2__textarea")[0];
textWrite2Textarea.onclick = nonePlaceholder;

function nonePlaceholder() {
    textWrite2Textarea.placeholder = " ";
};

textWrite2Textarea.onblur = showPlaceholder;

function showPlaceholder() {
    textWrite2Textarea.placeholder = "      Нажмите здесь, чтобы записать ваши мысли.   Запись доступна путем простого набора текста с клавиатуры или путем Голосового ввода текста на мобильном телефоне, если нажать на значок микрофона, расположенный на клавиатуре.";
};

// кнопка СОХРАНИТЬ (текст)

var buttonSave = document.getElementsByClassName("button__save")[0];
buttonSave.onclick = showSave; 

var arrTextareaValue = localStorage.getItem("TextareaKey") ? 
    JSON.parse(localStorage.getItem("TextareaKey")) : [];
var arrTextareaKey = arrTextareaValue;

var arrDateValue = localStorage.getItem("DateKey") ? 
    JSON.parse(localStorage.getItem("DateKey")) : [];
var arrDateKey = arrDateValue;

var arrTimeValue = localStorage.getItem("TimeKey") ? 
    JSON.parse(localStorage.getItem("TimeKey")) : [];
var arrTimeKey = arrTimeValue;

function showSave() {
    
    var textWrite2Textarea = document.getElementsByClassName("text-write2__textarea")[0];
    var valueTextarea = textWrite2Textarea.value;

    var writeDate = document.getElementsByClassName("write-date")[0];
    var writeTime = document.getElementsByClassName("write-time")[0];

    var myDateForma = dateFormat;
    var timeMemory4 = new Date().toLocaleTimeString();
                               
    if (valueTextarea.length>=1) {

        arrTextareaKey.unshift(valueTextarea);
        localStorage.setItem("TextareaKey", JSON.stringify(arrTextareaKey));
        
        arrDateKey.unshift(myDateForma);
        localStorage.setItem("DateKey", JSON.stringify(arrDateKey));
        
        arrTimeKey.unshift(timeMemory4);
        localStorage.setItem("TimeKey", JSON.stringify(arrTimeKey));
             
        console.log(arrTextareaKey);
        console.log(arrDateKey);
        console.log(arrTimeKey);

        textWrite2Textarea.value = ''; 
        writeDate.value = '';
        writeTime.value = '';

        container6.style.display = "none";
                
        location.reload();
        window.location.hash = "anchor__diary-title";
    
    };
};
showSave();

// кнопка УДАЛИТЬ (не сохранять текст)

var textRedao = document.getElementsByClassName("textRedao")[0];
var modal = document.getElementsByClassName("modal")[0];
var textRedao222 = document.getElementsByClassName("textRedao222")[0];
var modal222 = document.getElementsByClassName("modal222")[0];
var textRedao444 = document.getElementsByClassName("textRedao444")[0];
var modal444 = document.getElementsByClassName("modal444")[0];
var submitRedact = document.getElementsByClassName("submit_redact")[0];
var submitDeleteForever = document.getElementsByClassName("submit_delete_forever")[0];
var submitWithoutRedact = document.getElementsByClassName("submit_without_redact")[0];
var submitDelete222 = document.getElementsByClassName("submit_delete222")[0];
var submitCancel222 = document.getElementsByClassName("submit_cancel222")[0];
var submitSave444 = document.getElementsByClassName("submit_save444")[0];
var submitCancel444 = document.getElementsByClassName("submit_cancel444")[0];
var textRedactInput = document.getElementsByClassName("text-redact-input")[0];

var buttonDelete = document.getElementsByClassName("button__delete")[0];
buttonDelete.onclick = showDeleteText;  
  
function showDeleteText() {
        
    var textWrite2Textarea = document.getElementsByClassName("text-write2__textarea")[0];
    
    container6.classList.add("allGrey_TextWrite_6");    

    textRedao222.style.display = "flex";
    modal222.style.display = "flex";

    // кнопка подтверждения - да_Удалить запись навсегда 

    submitDelete222.onclick = function() {
             
        container6.style.display = "none";
        textWrite2Textarea.value = "";

        textRedao222.style.display = "none";
        modal222.style.display = "none";
        location.reload();
        window.location.hash = "anchor__diary-title";

        writeTime.classList.remove("write-time-text_2"); 
    };

    // кнопка отменить удаление (не удалять запись)

    submitCancel222.onclick = function() {

        container6.classList.remove("allGrey_TextWrite_6");
        
        textRedao222.style.display = "none";
        modal222.style.display = "none";
        window.location.hash = "anchor__diary-title";
    };
};

// записать МЫСЛИ Audio

var buttonAudioWrite = document.getElementsByClassName("button__audio-write")[0];
buttonAudioWrite.onclick = showAudioWrite;

function showAudioWrite() {
    window.location.hash = "anchor__diary-title";
    container8.style.display = "grid";
    container6.style.display = "none";
    updateWriteTime();
}

// кнопка СОХРАНИТЬ (аудио)
    
// 3. Сохранить байты в локал сторэйдж // Сохранение данных Blob2 в localStorage 
                                
var buttonAudioSave = document.getElementsByClassName("button-audio-save")[0];
buttonAudioSave.onclick = showAudioSave; 

var soundClips = document.getElementsByClassName('sound-clips')[0];

let linkTrek = document.getElementsByClassName('link_download')[0];

var writeAudioDate = document.getElementsByClassName("write-audio-date")[0];
var writeAudioTime = document.getElementsByClassName("write-audio-time")[0];

var arrAudioLink = localStorage.getItem("TextareaKey") ? 
    JSON.parse(localStorage.getItem("TextareaKey")) : [];

var arrDateAudioValue = localStorage.getItem("DateKey") ? 
    JSON.parse(localStorage.getItem("DateKey")) : [];

var arrTimeAudioValue = localStorage.getItem("TimeKey") ? 
    JSON.parse(localStorage.getItem("TimeKey")) : [];

function showAudioSave() {
           
    var myDateForma = dateFormat;
    var timeMemory4 = new Date().toLocaleTimeString();
                            
    if (linkTrek.href.length!==0 && soundClips.style.display=="flex") {

        arrAudioLink.unshift(linkTrek.href);
        localStorage.setItem("TextareaKey", JSON.stringify(arrAudioLink));
        
        arrDateAudioValue.unshift(myDateForma);
        localStorage.setItem("DateKey", JSON.stringify(arrDateAudioValue));
        
        arrTimeAudioValue.unshift(timeMemory4);
        localStorage.setItem("TimeKey", JSON.stringify(arrTimeAudioValue));
            
        console.log(arrAudioLink);
        console.log(arrDateAudioValue);
        console.log(arrTimeAudioValue);
        
        container8.style.display = "none";
                
        location.reload();
        window.location.hash = "anchor__diary-title";                         
    };    
};  
showAudioSave();





