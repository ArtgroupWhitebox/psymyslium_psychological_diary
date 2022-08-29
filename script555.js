var dateMy = new Date();
// new Date().toLocaleString('ru', {       
//     month: 'long'       
// });

var dateNow = Date.now();

var weekDay = dateMy.getDay(); 


// функция - ДАТА сейчас в динамике в Формате (18.03.2020)

function showDateFormat() {
    var dateFormat = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    
    return (new Date().toLocaleString("ru", dateFormat));
}
console.log(showDateFormat())

var writeDate = document.getElementsByClassName("write-date");
for (i=0; i<=1; i++) {
    writeDate[i].innerHTML = showDateFormat();
}


// функция - ВРЕМЯ каждую секунду в динамике в Формате (14.03.24)

window.onload = function() {
    (function() {
        var date = new Date();
        var time = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        var writeTime = document.getElementsByClassName("write-time");
            for (i=0; i<=1; i++) {
            writeTime[i].innerHTML = time;
            }
        window.setTimeout(arguments.callee, 1000);
    })();
};


// ВРЕМЯ в Формате (14:03:24) меняется при обновлении страницы

var timeMemory = new Date().toLocaleTimeString();
console.log(timeMemory);


// функция - ОЧИСТИТЬ ДАТЫ в календаре

function clearDate() {
    var dateClear = document.getElementsByClassName("date-link");
    for (var i=0; i<dateClear.length; i++) {

    dateClear[i].innerHTML = " ";
    }
    return dateClear[i];
}

// функция - СТАРТОВАЯ ДАТА для календаря

function showStartDate(monthValue, yearValue) {

    var yearValue = new Date().getFullYear();
    var monthValue = new Date().getMonth();
 
    // var dateStart = new Date();
    // console.log(dateStart);

    // dateStart.setFullYear(yearValue);
    // var yearStart = dateStart.getFullYear();
    // console.log(yearStart);

    var yearButton = document.getElementsByClassName("button__indicate-year")[0];
    // yearButton.innerHTML = yearStart;
    yearButton.innerHTML = yearValue;

    // dateStart.setMonth(monthValue);
    // var monthStart1 = dateStart.getMonth();
    // console.log(monthStart1);

    dateStart.setDate(1);
    var weekDayStart = dateStart.getDay();
    console.log(weekDayStart);

    var monthButton = document.getElementsByClassName("button__indicate-month")[0];
    // var monthStart = dateStart.toLocaleString('ru', {month: 'long'});
    var monthStart = new Date().toLocaleString('ru', {month: 'long'});
    monthButton.innerHTML = monthStart;
    


    
    function getDaysInMonth(month, year) {
        return new Date(year, month+1, 0).getDate();
    };

    // console.log(getDaysInMonth(monthStart1, yearStart));
    console.log(getDaysInMonth(monthValue, yearValue));
        

    function indStart() {
        // if (weekDayStart !== 0) {
        //     var stInd = weekDayStart - 1;
        // } else {
        //     var stInd = 6;
        // }
        // return stInd;
        return weekDayStart !== 0 ? weekDayStart - 1 : 6;
    }
    var start = indStart();
    console.log(start);

    // var DaysInMonth = getDaysInMonth(monthStart1, yearStart);
    var DaysInMonth = getDaysInMonth(monthValue, yearValue);
    var endInd = DaysInMonth+start;

    clearDate();

    var dateLink = document.getElementsByClassName("date-link");

    for (var ind=start; ind<endInd; ind++) {

        var number = (ind - start + 1);
        dateLink[ind].innerHTML = number;

        console.log(dateLink[ind]);
        console.log([ind]);
    }

    function todayColor() {
                
        var numberDateLink = document.getElementsByClassName("number__date-link");
    
        for (var ind2=start; ind2<endInd; ind2++) {
    
            var number2 = (ind2 - start + 1);
            var dateMy = new Date();
            var today = dateMy.getDate();
            var year3 = dateMy.getFullYear();
            var month3 = dateMy.getMonth();
                            
            // if (today==number2 && month3==monthStart1 && year3==yearStart) {
            if (today==number2 && month3==monthValue && year3==yearValue) {
                numberDateLink[ind2].style.backgroundColor = "#71F6FF";
            } else {
                numberDateLink[ind2].style.backgroundColor = "#C4C4C4";
            }
            console.log(today);
        }
    } 
    todayColor()

}
showStartDate(monthValue, yearValue);

// Кнопки - выбрать ГОД

var arrowMinusYear = document.getElementsByClassName("button__arrow-minus-year")[0];
    arrowMinusYear.onclick = minusYear;
function minusYear() {
    yearValue--;
    return showStartDate(monthValue, yearValue);
}         
   
var arrowPlusYear = document.getElementsByClassName("button__arrow-plus-year")[0];
    arrowPlusYear.onclick = plusYear;
function plusYear() {
    yearValue++;
    return showStartDate(monthValue, yearValue);
}   

// Кнопки - выбрать МЕСЯЦ

var arrowMinusMonth = document.getElementsByClassName("button__arrow-minus-month")[0];
    arrowMinusMonth.onclick = minusMonth;
function minusMonth() {
    monthValue--;
    return showStartDate(monthValue, yearValue);
} 

var arrowPlusMonth = document.getElementsByClassName("button__arrow-plus-month")[0];
    arrowPlusMonth.onclick = plusMonth;
function plusMonth() {
    monthValue++;
    return showStartDate(monthValue, yearValue);
}
plusMonth() 


// async function asyncNewMont() {
//     let monthNew = new Promise (
        // function monthNew () {
        //     if (new Date().getDate()==1) {
        //         plusMonth();
        //     };
        // }
        // monthNew ()
//     )
//     monthNew.then(function(value) {
//         console.log(value); // Успех!
//       }, function(reason) {
//         console.log(reason); // Ошибка!
//       });
// }
// asyncNewMont()


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
}

var textWrite2Textarea = document.getElementsByClassName("text-write2__textarea")[0];
textWrite2Textarea.onclick = nonePlaceholder;

function nonePlaceholder() {
    textWrite2Textarea.placeholder = " ";
}

textWrite2Textarea.onblur = showPlaceholder;

function showPlaceholder() {
    textWrite2Textarea.placeholder = "      Нажмите здесь, чтобы записать ваши мысли.   Запись доступна путем простого набора текста с клавиатуры или путем Голосового ввода текста на мобильном телефоне, если нажать на значок микрофона, расположенный на клавиатуре.";
}

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

    var myDateForma = showDateFormat();
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
                
        showMemoryTextarea();

        location.reload();
        window.location.hash = "anchor__diary-title";
                            
    } else {
        container6.style.display = "none";
        window.location.hash = "anchor__diary-title";
    };
}

// функция Показать записи Текстом

function showMemoryTextarea() {

    var notesContainer7 = document.getElementsByClassName("notes")[0];
        notesContainer7.innerHTML = "";

    var arrTextareaValue = localStorage.getItem("TextareaKey") ? 
        JSON.parse(localStorage.getItem("TextareaKey")) : [];

    var arrDateValue = localStorage.getItem("DateKey") ? 
        JSON.parse(localStorage.getItem("DateKey")) : [];

    var arrTimeValue = localStorage.getItem("TimeKey") ? 
        JSON.parse(localStorage.getItem("TimeKey")) : [];  

    
    for (i=0; i<arrTextareaValue.length; i++) {

        var value = arrTextareaValue[i];
        var memoryDate = arrDateValue[i];
        var memoryTime = arrTimeValue[i];
        
        var htmlNote = `
        <div class="container-7_text_memory">
            <div class="memory-date">${memoryDate}</div>
            <div class="memory-time">${memoryTime}</div>
            <textarea class="text-memory__textarea" value="" type="text" name="text-memory" contenteditable="false">${value}</textarea>
        </div>
        `;

        notesContainer7.innerHTML += htmlNote;
    };
    console.log(value);
}
showMemoryTextarea();

// кнопка УДАЛИТЬ (не сохранять текст)

var buttonDelete = document.getElementsByClassName("button__delete")[0];
buttonDelete.onclick = showDelete;  
  
function showDelete() {
    container6.style.display = "none";
    // window.location.hash = "anchor__almanac-title";
}
showDelete();

// редактировать или удалить сохраненный текст

var container7 = document.getElementsByClassName("container-7_text_memory");   
for (let i=0; i<container7.length; i++) {
    container7[i].onclick = function() {

        document.getElementsByClassName("text-memory__textarea")[i].style.backgroundColor = "#C4C4C4";
        document.getElementsByClassName("memory-date")[i].style.backgroundColor = "#C4C4C4";
        document.getElementsByClassName("memory-time")[i].style.backgroundColor = "#C4C4C4";

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
             
        textRedao.style.display = "flex";
        modal.style.display = "flex";

        // кнопка редактировать

        submitRedact.onclick = function () {

            textRedao.style.display = "none";
            modal.style.display = "none";

            textRedao444.style.display = "flex";
            modal444.style.display = "flex";

            let oldValue = document.getElementsByClassName("text-memory__textarea")[i].value;
                        
            textRedactInput.innerHTML = oldValue; 

            // кнопка сохранить редактирование

            submitSave444.onclick = function () {

                document.getElementsByClassName("text-memory__textarea")[i].style.backgroundColor = "rgb(255, 241, 206)";
                document.getElementsByClassName("memory-date")[i].style.backgroundColor = "#C7FFFC";
                document.getElementsByClassName("memory-time")[i].style.backgroundColor = "#C7FFFC";

                let newValue = textRedactInput.value;

                let notesOld = localStorage.getItem("TextareaKey") ? 
                JSON.parse(localStorage.getItem("TextareaKey")) : [];

                notesOld.splice(i, 1, newValue);

                localStorage.setItem("TextareaKey", JSON.stringify(notesOld));

                // showMemoryTextarea();
                location.reload(); 
                window.location.hash = "anchor__diary-title";   
            };
            
            // кнопка отменить редактирование

            submitCancel444.onclick = function () {
                document.getElementsByClassName("text-memory__textarea")[i].style.backgroundColor = "rgb(255, 241, 206)";
                document.getElementsByClassName("memory-date")[i].style.backgroundColor = "#C7FFFC";
                document.getElementsByClassName("memory-time")[i].style.backgroundColor = "#C7FFFC";
                textRedao444.style.display = "none";
                modal444.style.display = "none";
                window.location.hash = "anchor__diary-title";
            };

        };

        // кнопка Удалить запись навсегда   
        
        submitDeleteForever.onclick = function() {

            textRedao.style.display = "none";
            modal.style.display = "none";

            textRedao222.style.display = "flex";
            modal222.style.display = "flex";

            // кнопка подтверждения - да_Удалить запись навсегда 

            submitDelete222.onclick = function() {

                document.getElementsByClassName("text-memory__textarea")[i].style.backgroundColor = " rgb(255, 241, 206)";
                document.getElementsByClassName("memory-date")[i].style.backgroundColor = "#C7FFFC";
                document.getElementsByClassName("memory-time")[i].style.backgroundColor = "#C7FFFC";

                var notes = localStorage.getItem("TextareaKey") ? 
                    JSON.parse(localStorage.getItem("TextareaKey")) : [];

                notes.splice(i, 1);

                localStorage.setItem("TextareaKey", JSON.stringify(notes));

                // showMemoryTextarea(); 
                textRedao222.style.display = "none";
                modal222.style.display = "none";
                location.reload();
                window.location.hash = "anchor__diary-title";
            };

            // кнопка отменить удаление (не удалять запись)

            submitCancel222.onclick = function() {
                document.getElementsByClassName("text-memory__textarea")[i].style.backgroundColor = " rgb(255, 241, 206)";
                document.getElementsByClassName("memory-date")[i].style.backgroundColor = "#C7FFFC";
                document.getElementsByClassName("memory-time")[i].style.backgroundColor = "#C7FFFC";
                textRedao222.style.display = "none";
                modal222.style.display = "none";
                window.location.hash = "anchor__diary-title";
            };
        };
                
        // кнопка Оставить запись без изменений 
        
        submitWithoutRedact.onclick = function() {
            document.getElementsByClassName("text-memory__textarea")[i].style.backgroundColor = " rgb(255, 241, 206)";
            document.getElementsByClassName("memory-date")[i].style.backgroundColor = "#C7FFFC";
            document.getElementsByClassName("memory-time")[i].style.backgroundColor = "#C7FFFC";
            textRedao.style.display = "none";
            modal.style.display = "none";
            window.location.hash = "anchor__diary-title";
        };
    };  
};


// записать МЫСЛИ Audio

var buttonAudioWrite = document.getElementsByClassName("button__audio-write")[0];
buttonAudioWrite.onclick = showAudioWrite;

function showAudioWrite() {
    window.location.hash = "anchor__diary-title";
    container8.style.display = "grid";
    container6.style.display = "none";
}

   // кнопка УДАЛИТЬ (аудио)

var buttonDelete2 = document.getElementsByClassName("button__delete")[1];
buttonDelete2.onclick = showDelete2;   
    
function showDelete2() {
    
    container8.style.display = "none";
    window.location.hash = "anchor__diary-title";
}

