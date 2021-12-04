// Аудиоплеер - аудиоконтейнер

var notesContainer7 = document.getElementsByClassName("notes")[0];
        notesContainer7.innerHTML = "";

var arrAudioLink = localStorage.getItem("TextareaKey") ? 
    JSON.parse(localStorage.getItem("TextareaKey")) : [];

var arrDateAudioValue = localStorage.getItem("DateKey") ? 
    JSON.parse(localStorage.getItem("DateKey")) : [];

var arrTimeAudioValue = localStorage.getItem("TimeKey") ? 
    JSON.parse(localStorage.getItem("TimeKey")) : [];  

// функция Показать записи Текстом

var arrTextareaValue = localStorage.getItem("TextareaKey") ? 
JSON.parse(localStorage.getItem("TextareaKey")) : [];

var arrDateValue = localStorage.getItem("DateKey") ? 
JSON.parse(localStorage.getItem("DateKey")) : [];

var arrTimeValue = localStorage.getItem("TimeKey") ? 
JSON.parse(localStorage.getItem("TimeKey")) : [];


function showMemory() {
           
    for (let i=0; i<arrTextareaValue.length; i++) {

        if (arrAudioLink[i].slice(0, 11) === "data:audio/") {
            
            var trek = arrAudioLink[i];
            var memoryAudioDate = arrDateAudioValue[i];
            var memoryAudioTime = arrTimeAudioValue[i];
            
            
            var htmlAadioTrek = `
            <div class="container-9_audio_memory">
                <div class="memory-date memory-audio-date">${memoryAudioDate}
                    <a id="anchor_date-link" name="anchor_date-link_${i + 1}"></a>
                </div>
                <div class="memory-time memory-audio-time">${memoryAudioTime}</div>
            
                <div class="audio-memory player">
                    <a class="anchor_audio-memory" name="anchor_audio-memory">
                    </a>

                    <audio preload="metadata" id="player-trek" class="player-trek" type="audio/mpeg" src="${trek}">
                    </audio>

                    <button id="button-delit_trek" class="button-delit_trek">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class='delit_trek-path' d="M0 2.12134L1.41421 0.707124L16.2635 15.5564L14.8492 16.9706L0 2.12134Z" fill="rgb(250, 53, 79)"/>
                            <rect class='delit_trek-rect' x="14.8492" y="1" width="2" height="21" transform="rotate(45 14.8492 1)" fill="rgb(250, 53, 79)"/>
                        </svg>                    
                    </button>
                    
                    <button id="button-play_audio" class="button-play_audio">
                        <svg width="19" height="21" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 7.13398C13.1667 7.51888 13.1667 8.48113 12.5 8.86603L2 14.9282C1.33333 15.3131 0.5 14.832 0.5 14.0622L0.5 1.93782C0.5 1.16802 1.33333 0.686897 2 1.0718L12.5 7.13398Z" fill="#3B3B3C"/>
                        </svg>
                    </button>
                        
                    <button id="button-download_audio" class="button-download_audio">
                        <svg width="19" height="24" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" width="5" height="15" rx="1" fill="#3B3B3C"/>
                            <rect y="20" width="2" height="15" rx="1" transform="rotate(-90 0 20)" fill="#3B3B3C"/>
                            <path d="M8.26194 17.1036C7.86261 17.5734 7.13739 17.5734 6.73806 17.1036L0.4005 9.64765C-0.151563 8.99816 0.310029 8 1.16244 8L13.8376 8C14.69 8 15.1516 8.99816 14.5995 9.64765L8.26194 17.1036Z" fill="#3B3B3C"/>
                        </svg>
                        <a class='download-trek' href="${trek}" download="мои Мысли ${memoryAudioDate} ${memoryAudioTime}.mp3"></a>
                    </button>
                        
                    <div id="current-time-trek" class="current-time-trek">00:00</div>
                    <div id="duration-trek" class="duration-trek">00:00</div>
                        
                    <button id="button-buckward" class="button-buckward">
                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class='buckward-rect' y="4" width="4" height="18" rx="1" transform="rotate(-90 0 4)" fill="#fcdb82"/>
                        </svg>                                
                    </button>

                    <button id="button-speed-normal" class="button-speed-normal">
                        скорость_Normal
                    </button>
                    
                    <button id="forward" class="forward">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class='forward-rect1' x="7" width="4" height="18" rx="1" fill="#fcdb82"/>
                        <rect class='forward-rect2' y="11" width="4" height="18" rx="1" transform="rotate(-90 0 11)" fill="#fcdb82"/>
                        </svg>                                               
                    </button>
                </div>
            </div> `;       
                        
            notesContainer7.innerHTML += htmlAadioTrek;  

        } else {
            var value = arrTextareaValue[i];
            var memoryDate = arrDateValue[i];
            var memoryTime = arrTimeValue[i];
            
            var htmlNote = `
            <div class="container-7_text_memory">
                <div class="memory-date">${memoryDate}
                    <a id="anchor_date-link" name="anchor_date-link_${i + 1}"></a>
                </div>
                <div class="memory-time">${memoryTime}</div>
                <textarea class="text-memory__textarea" value="" type="text" name="text-memory" readonly contenteditable="false">${value}</textarea>
            </div>
            `;

            notesContainer7.innerHTML += htmlNote;
        };     

    };
    console.log(value);
};
showMemory();

// Функционал кнопок Аудиоплеера

var anchorAudioMemory = document.getElementsByClassName('anchor_audio-memory');
var delitTrek = document.getElementsByClassName('button-delit_trek');

var myTrek = document.getElementsByClassName('player-trek');

var playAudio = document.getElementsByClassName('button-play_audio');
var downloadAudio = document.getElementsByClassName('button-download_audio');
var downloadTrek = document.getElementsByClassName('download-trek');

var currentTimeTrek = document.getElementsByClassName('current-time-trek');
var durationTrek = document.getElementsByClassName('duration-trek');

var buckward = document.getElementsByClassName('button-buckward');
var speedNormal = document.getElementsByClassName('button-speed-normal');
var forward = document.getElementsByClassName('forward');

var intervalId;

for (let i=0; i<myTrek.length; i++) {

    playAudio[i].onclick = playOrPauseAudioFu;
    function playOrPauseAudioFu() {
        if (myTrek[i].paused) {
            intervalId = setInterval(updateAudioSlider, 1000);
            myTrek[i].playbackRate = 1;
            myTrek[i].play();
            console.log(myTrek[i].state);
            console.log("воспроизведение записи");
            playAudio[i].style.backgroundColor = "rgb(250, 53, 79)";
            playAudio[i].innerHTML = `
            <svg width="18" height="20" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="15" rx="1" fill="#3B3B3C"/>
            <rect x="9" width="5" height="15" rx="1" fill="#3B3B3C"/>
            </svg>
            `;
            } else {
            myTrek[i].pause();
            clearInterval(intervalId);
            console.log(myTrek[i].state);
            console.log("пауза");
            playAudio[i].style.backgroundColor = "rgb(252, 225, 150)";
            playAudio[i].innerHTML = `
            <svg width="19" height="21" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 7.13398C13.1667 7.51888 13.1667 8.48113 12.5 8.86603L2 14.9282C1.33333 15.3131 0.5 14.832 0.5 14.0622L0.5 1.93782C0.5 1.16802 1.33333 0.686897 2 1.0718L12.5 7.13398Z" fill="#3B3B3C"/>
            </svg>
            `;           
        };        
    };

    function updateAudioSlider() {
        var min_ct = Math.floor(myTrek[i].currentTime / 60);
        var sec_ct = Math.floor((myTrek[i].currentTime - min_ct * 60) + 0.8);
        min_ct = (min_ct < 10) ? "0" + min_ct : min_ct;
        sec_ct = (sec_ct < 10) ? "0" + sec_ct : sec_ct;
        // var min_d = Math.floor(myTrek[i].duration / 60);
        // var sec_d = Math.floor(myTrek[i].duration - min_d * 60);
        // min_d = (min_d < 10) ? "0" + min_d : min_d;
        // sec_d = (sec_d < 10) ? "0" + sec_d : sec_d;
        currentTimeTrek[i].innerHTML = min_ct + ":" + sec_ct;
        // if (myTrek[i].duration !== Infinity) {
        //     durationTrek[i].innerHTML = min_d + ":" + sec_d;
        // };           
    };

    
    myTrek[i].onended = function() {
        clearInterval(intervalId);
        console.log(myTrek[i].state);
        console.log("проигрывание завершено");
        playAudio[i].style.backgroundColor = "rgb(252, 225, 150)";
        playAudio[i].innerHTML = `
        <svg width="35" height="35" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36.8149 19.281L17.4596 18.594L34.4181 0.615952L36.8149 19.281Z" fill="#3B3B3C"/>
        <g filter="url(#filter0_i)">
        <mask id="path-2-inside-1" fill="white">
        <path d="M35.8891 28.5939C34.5087 32.2793 31.9495 35.3953 28.5949 37.475C25.2404 39.5547 21.2713 40.4858 17.2828 40.129C13.2942 39.7721 9.50115 38.1464 6.47216 35.4955C3.44316 32.8447 1.34147 29.3115 0.482171 25.4258C-0.377132 21.5401 0.0522532 17.5111 1.70595 13.943C3.35965 10.3748 6.14856 7.45968 9.65457 5.63464C13.1606 3.8096 17.1948 3.17298 21.1524 3.82021C25.11 4.46745 28.7777 6.36367 31.6057 9.22459L27.3793 13.3205C25.4659 11.3849 22.9844 10.1019 20.3068 9.66403C17.6292 9.22613 14.8998 9.65685 12.5277 10.8916C10.1556 12.1264 8.26874 14.0987 7.14989 16.5128C6.03104 18.927 5.74053 21.6528 6.32191 24.2818C6.9033 26.9108 8.32525 29.3012 10.3746 31.0947C12.4239 32.8882 14.9902 33.9881 17.6888 34.2296C20.3873 34.4711 23.0727 33.841 25.3423 32.434C27.6119 31.027 29.3434 28.9187 30.2773 26.4253L35.8891 28.5939Z"/>
        </mask>
        <path d="M35.8891 28.5939C34.5087 32.2793 31.9495 35.3953 28.5949 37.475C25.2404 39.5547 21.2713 40.4858 17.2828 40.129C13.2942 39.7721 9.50115 38.1464 6.47216 35.4955C3.44316 32.8447 1.34147 29.3115 0.482171 25.4258C-0.377132 21.5401 0.0522532 17.5111 1.70595 13.943C3.35965 10.3748 6.14856 7.45968 9.65457 5.63464C13.1606 3.8096 17.1948 3.17298 21.1524 3.82021C25.11 4.46745 28.7777 6.36367 31.6057 9.22459L27.3793 13.3205C25.4659 11.3849 22.9844 10.1019 20.3068 9.66403C17.6292 9.22613 14.8998 9.65685 12.5277 10.8916C10.1556 12.1264 8.26874 14.0987 7.14989 16.5128C6.03104 18.927 5.74053 21.6528 6.32191 24.2818C6.9033 26.9108 8.32525 29.3012 10.3746 31.0947C12.4239 32.8882 14.9902 33.9881 17.6888 34.2296C20.3873 34.4711 23.0727 33.841 25.3423 32.434C27.6119 31.027 29.3434 28.9187 30.2773 26.4253L35.8891 28.5939Z" stroke="#3B3B3C" stroke-width="10" mask="url(#path-2-inside-1)"/>
        </g>
        <defs>
        <filter id="filter0_i" x="0.0499878" y="3.57394" width="35.8391" height="40.6296" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
        </filter>
        </defs>
        </svg>
        `;
    };

    downloadAudio[i].onclick = downloadAudioFu;
    function downloadAudioFu() {
        onload = downloadTrek[i].click();
    };

    buckward[i].onclick = buckwardFu;
    function buckwardFu() {
        myTrek[i].playbackRate -= 0.5;
    };

    speedNormal[i].onclick = speedNormalFu;
    function speedNormalFu() {
        myTrek[i].playbackRate = 1;
    };

    forward[i].onclick = forwardFu;
    function forwardFu() {
        myTrek[i].playbackRate += 0.5;
    };

};

// (Модалка) Редактировать или Удалить сохраненный текст

var containerS7 = document.getElementsByClassName("container-7_text_memory");   

for (let i=0; i<containerS7.length; i++) {
    
    containerS7[i].onclick = delOrRedactFu;
    function delOrRedactFu() {

        containerS7[i].classList.add("allGrey_TextMemory_7");                      
                    
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
                
                containerS7[i].classList.remove("allGrey_TextMemory_7");

                let notesOld = localStorage.getItem("TextareaKey") ? 
                            JSON.parse(localStorage.getItem("TextareaKey")) : [];
                
                for (let x=0; x<notesOld.length; x++) {

                    if (notesOld[x] === oldValue) {

                        let newValue = textRedactInput.value;

                        notesOld.splice(x, 1, newValue);

                        localStorage.setItem("TextareaKey", JSON.stringify(notesOld));

                        location.reload(); 
                        window.location.hash = `anchor_date-link_` + i; 
                    };
                };  
            };
            
            // кнопка отменить редактирование

            submitCancel444.onclick = function () {

                containerS7[i].classList.remove("allGrey_TextMemory_7");

                textRedao444.style.display = "none";
                modal444.style.display = "none";

                window.location.hash = `anchor_date-link_` + i;
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

                var notesText = localStorage.getItem("TextareaKey") ? 
                            JSON.parse(localStorage.getItem("TextareaKey")) : [];

                var notesDateText = localStorage.getItem("DateKey") ? 
                            JSON.parse(localStorage.getItem("DateKey")) : [];

                var notesTimeText = localStorage.getItem("TimeKey") ? 
                            JSON.parse(localStorage.getItem("TimeKey")) : [];

                let thisValue = document.getElementsByClassName("text-memory__textarea")[i].value;                        
                 
                for (let it=0; it<notesText.length; it++) {

                    if (notesText[it] === thisValue) {
               
                        notesText.splice(it, 1);
                        notesDateText.splice(it, 1);
                        notesTimeText.splice(it, 1);

                        localStorage.setItem("TextareaKey", JSON.stringify(notesText));
                        localStorage.setItem("DateKey", JSON.stringify(notesDateText));
                        localStorage.setItem("TimeKey", JSON.stringify(notesTimeText));

                        textRedao222.style.display = "none";
                        modal222.style.display = "none";

                        location.reload();
                        window.location.hash = `anchor_date-link_` + i;
                    };
                };
            };

            // кнопка отменить удаление (не удалять запись)

            submitCancel222.onclick = function() {

                containerS7[i].classList.remove("allGrey_TextMemory_7");

                textRedao222.style.display = "none";
                modal222.style.display = "none";

                window.location.hash = `anchor_date-link_` + i;
            };
        };
                
        // кнопка Оставить запись без изменений 
        
        submitWithoutRedact.onclick = function() {

            containerS7[i].classList.remove("allGrey_TextMemory_7");

            textRedao.style.display = "none";
            modal.style.display = "none";

            window.location.hash = `anchor_date-link_` + i;
        };
    }; 
    
};

// (Модалка) Удалить сохраненный Aудиo трек 

var containerS_9 = document.getElementsByClassName("container-9_audio_memory");   

for (let i=0; i<containerS_9.length; i++) {

        
    // Локальная функция - Показывает Длительность Аудио трека (исправляет баг в гугл хроме) 

    myTrek[i].onloadedmetadata = function() {
        
        if (myTrek[i].duration === Infinity) {
            // set it to bigger than the actual duration
            myTrek[i].currentTime = 100000000000;

            myTrek[i].ontimeupdate = function() {

                this.ontimeupdate = () => {
                    return;
                };

                var min_d = Math.floor(myTrek[i].duration / 60);
                var sec_d = Math.floor(myTrek[i].duration - min_d * 60);
                min_d = (min_d < 10) ? "0" + min_d : min_d;
                sec_d = (sec_d < 10) ? "0" + sec_d : sec_d;
                
                durationTrek[i].innerHTML = min_d + ":" + sec_d;

                var trekSec = Math.floor(myTrek[i].duration);
                trekSec = (trekSec < 10) ? "0" + trekSec : trekSec;
                               
                var trekIndex = containerS_9.length - i;
                anchorAudioMemory[i].innerHTML = "Mысли__" + trekIndex + "_trak__" + trekSec + "_sec.";
                
                myTrek[i].currentTime = 0; 
            };
        };
    };
    
      
    
    delitTrek[i].onclick = delitTrekFunc;
    function delitTrekFunc() {

        containerS_9[i].classList.add("allGrey_AudioMemory_9");
        playAudio[i].style.backgroundColor = "#C4C4C4";
                                
        textRedao222.style.display = "flex";
        modal222.style.display = "flex";

        
        // кнопка подтверждения - да_Удалить запись навсегда 

        submitDelete222.onclick = function() {

            var notesAudio = localStorage.getItem("TextareaKey") ? 
                        JSON.parse(localStorage.getItem("TextareaKey")) : [];

            var notesDateAudio = localStorage.getItem("DateKey") ? 
                        JSON.parse(localStorage.getItem("DateKey")) : [];

            var notesTimeAudio = localStorage.getItem("TimeKey") ? 
                        JSON.parse(localStorage.getItem("TimeKey")) : [];

            let thisTrek = document.getElementsByClassName('player-trek')[i].src;                        
                
            for (let it=0; it<notesAudio.length; it++) {

                if (notesAudio[it] === thisTrek) {                       
            
                    notesAudio.splice(it, 1);
                    notesDateAudio.splice(it, 1);
                    notesTimeAudio.splice(it, 1);

                    localStorage.setItem("TextareaKey", JSON.stringify(notesAudio));
                    localStorage.setItem("DateKey", JSON.stringify(notesDateAudio));
                    localStorage.setItem("TimeKey", JSON.stringify(notesTimeAudio));

                    textRedao222.style.display = "none";
                    modal222.style.display = "none";
                    
                    location.reload();
                    window.location.hash = `anchor_date-link_` + i;
                };
            };
        };

        // кнопка отменить удаление (не удалять запись)

        submitCancel222.onclick = function() {

            containerS_9[i].classList.remove("allGrey_AudioMemory_9");

            if (myTrek[i].paused) {
                playAudio[i].style.backgroundColor = "rgb(252, 225, 150)";
            } else {
                playAudio[i].style.backgroundColor = "rgb(250, 53, 79)";
            };
            
            textRedao222.style.display = "none";
            modal222.style.display = "none";

            window.location.hash = `anchor_date-link_` + i;
        };     
                
    }; 
    
};


