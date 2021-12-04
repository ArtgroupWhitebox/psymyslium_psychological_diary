async function asyncFunc() {

    const start = document.querySelector('.button__start');
    const stop = document.querySelector('.button__stop');
    const pause1 = document.querySelector('.button__pause1');
    const resume = document.querySelector('.button__resume');
    const soundClips = document.querySelector('.sound-clips');
    const timeRecording = document.querySelector('.time-recording');
    
    stop.disabled = true;

    if (navigator.mediaDevices.getUserMedia) {
    
        const constraints = { audio: true };

        let onSuccess = function(stream) {
            const mediaRecorder = new MediaRecorder(stream);
            let voice = [];

            function add0 (x, y) {var s = '00' + x; return s.substr (s.length - y)}
           
            function clockRun () {
               
               var ms = Date.now () - startTime;
               //    if (ms >= 3.6e6) {alert ('прошло больше часа!'); return;}
               var S = Math.floor (ms / 1000);
               ms = ms % 1000;
               var M = Math.floor (S / 60);
               S = S % 60;
               var H = Math.floor (M / 60);
               H = H % 60;
               timeRecording.textContent = [add0 (H, 2), add0 (M, 2), add0 (S, 2)].join (':');
               
               RAF = requestAnimationFrame (clockRun);
            }

            var startTime;
            var RAF;

            start.addEventListener('click', function(){
                mediaRecorder.start();
                console.log(mediaRecorder.state);
                console.log("идет запись");
                stop.disabled = false;
                start.disabled = true;
                pause1.disabled = false;
                resume.disabled = false;
                start.style.display = "none";
                pause1.style.display = "flex";
                timeRecording.style.display = "flex";
                timeRecording.style.color = "rgb(250, 53, 79)";
                startTime = Date.now ();
                clockRun ();
            });

            pause1.addEventListener('click', function(){
                mediaRecorder.pause();
                console.log(mediaRecorder.state);
                console.log("преостановлена запись");
                stop.disabled = false;
                start.disabled = false;
                pause1.disabled = true;
                resume.disabled = false;
                start.style.display = "none";
                pause1.style.display = "none";
                resume.style.display = "flex";
                cancelAnimationFrame (RAF);
                timeRecording.style.color = "rgb(252, 225, 150)";
            });

            resume.addEventListener('click', function(){    
                mediaRecorder.resume();
                console.log(mediaRecorder.state);
                console.log("возобновлена запись");
                stop.disabled = false;
                start.disabled = false;
                pause1.disabled = false;
                resume.disabled = true;
                start.style.display = "none";
                pause1.style.display = "flex";
                resume.style.display = "none";
                timeRecording.style.color = "rgb(250, 53, 79)";
                clockRun ();
            });

            stop.addEventListener('click', function(){
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
                console.log("завершилась запись");
                stop.disabled = true;
                start.disabled = false;
                pause1.disabled = false;
                resume.disabled = false;
                stop.style.display = "none";
                start.style.display = "none";
                pause1.style.display = "none";
                resume.style.display = "none";
                cancelAnimationFrame (RAF);
            });

            mediaRecorder.addEventListener("stop", function() {

                 
                console.log('VOICE = ', voice)
                console.log("recorder stopped");

                // 1. Превратить в блоб

                const voiceBlob = new Blob(voice, {
                    type : 'audio/ogg; codecs=opus'
                });

                const voiceBlob2 = new Blob(voice, {
                    type : 'audio/mpeg'
                });

                console.log(voiceBlob);
                console.log(voiceBlob2);

                // 2. Вытащить из блоба байты

                let linkTrek = document.getElementsByClassName('link_download')[0];

                let reader = new FileReader(); 

                reader.readAsDataURL(voiceBlob2);  // конвертирует Blob в base64 и вызывает onload 
                                                                                
                reader.onload = function() {
                    console.log('reader.result = ', reader.result)
                    linkTrek.href = reader.result; // url с данными
                };
                
                // 4. Достать байты из лок стордж
                // 5. Достанные байты воспроизвести в аудио


                const clipContainer = document.createElement('article');
                const audio = document.createElement('audio');
                const source1 = document.createElement('source');
                const source2 = document.createElement('source');
                const deleteButton = document.createElement('button');
                const playButton = document.createElement('button');
                const pause2Button = document.createElement('button');
                                
                clipContainer.classList.add('clip');
                audio.setAttribute('preload', 'metadata');
                audio.className = 'audio_play';
                source1.className = 'audio/ogg';
                source2.className = 'audio/mpeg';
                deleteButton.textContent = 'Очистить';
                deleteButton.className = 'delete';
                playButton.className = 'button__play';
                pause2Button.className = 'button__pause2';
                        
                playButton.innerHTML = `
                <svg width="19" height="21" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="arrow" d="M14 8L0.5 15.7942L0.5 0.205771L14 8Z" fill="#3B3B3C"/>
                </svg>
                `;
                pause2Button.innerHTML = `
                <svg width="15" height="17" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect class="pause" width="5" height="15" rx="1" fill="#3B3B3C"/>
                    <rect class="pause" x="8" width="5" height="15" rx="1" fill="#3B3B3C"/>
                </svg>
                `;
                                
                clipContainer.appendChild(audio);
                audio.appendChild(source1);
                audio.appendChild(source2);
                clipContainer.appendChild(playButton);
                clipContainer.appendChild(pause2Button);
                clipContainer.appendChild(deleteButton);
                soundClips.appendChild(clipContainer);

                soundClips.style.display = "flex";
                timeRecording.textContent = '00:00:00';
                timeRecording.style.display = "none";
                audio.controls = false;

                                                                                                            
                const audioURL = window.URL.createObjectURL(voiceBlob);
                source1.src = audioURL;
                source1.type = "audio/ogg; codecs=opus";

                const audioURL2 = window.URL.createObjectURL(voiceBlob2);
                source2.src = audioURL2;
                source2.type = "audio/mpeg";
    
                                
                            
                const play = document.querySelector(".button__play");
                const pause2 = document.querySelector(".button__pause2");
                let myAudio = document.getElementsByTagName('audio')[0];
                                
                play.style.display = "flex"; 
                
                play.addEventListener('click', function(){
                    myAudio.play();
                    console.log(myAudio.state);
                    console.log("воспроизведение записи");
                    play.disabled = true;
                    pause2.disabled = false;
                    play.style.display = "none";
                    pause2.style.display = "flex";
                    pause2Button.innerHTML =`
                    <svg width="15" height="17" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect class="pause" width="5" height="15" rx="1" fill="#3B3B3C"/>
                        <rect class="pause" x="8" width="5" height="15" rx="1" fill="#3B3B3C"/>
                    </svg>
                    `;
                    pause2Button.style.backgroundColor = "rgb(250, 53, 79)";
                    
                });
                    
                pause2.addEventListener('click', function(){
                    myAudio.pause();
                    console.log(myAudio.state);
                    console.log("пауза");
                    play.disabled = false;
                    pause2.disabled = true;
                    play.style.display = "flex";
                    pause2.style.display = "none";
                });
                
                myAudio.addEventListener("ended", function(){
                    console.log(myAudio.state);
                    console.log("проигрывание завершено");
                    pause2Button.innerHTML = `
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
                    pause2Button.style.backgroundColor = "#07F0FF";
                    
                });

                

                const modal555 = document.getElementsByClassName("modal555")[0];
                const textRedao555 = document.getElementsByClassName("textRedao555")[0];
                            
                deleteButton.onclick = function() {
                    textRedao555.style.display = "flex";
                    modal555.style.display = "flex";

                    const submitDelete555 = document.getElementsByClassName("submit_delete555")[0];
                    
                    submitDelete555.onclick = function() {
                        stop.style.display = "flex";
                        start.style.display = "flex";
                        timeRecording.style.display = "flex";
                        timeRecording.style.color = "rgb(252, 225, 150)";
                        timeRecording.textContent = '00:00:00';
                        soundClips.style.display = "none";
                        textRedao555.style.display = "none";
                        modal555.style.display = "none";

                        source1.parentNode.removeChild(source1);
                        source2.parentNode.removeChild(source2);
                        audio.parentNode.removeChild(audio);
                        playButton.parentNode.removeChild(playButton);
                        pause2Button.parentNode.removeChild(pause2Button);
                        deleteButton.parentNode.removeChild(deleteButton);
                        clipContainer.parentNode.removeChild(clipContainer);

                    };

                    const submitCancel555 = document.getElementsByClassName("submit_cancel555")[0];

                    submitCancel555.onclick = function() {
                        textRedao555.style.display = "none";
                        modal555.style.display = "none";
                    };
                };

                voice = [];
            });  
            
            mediaRecorder.addEventListener("dataavailable",function(event) {
                console.log(event);
                voice.push(event.data);

            });
        }; 
     
        let onError = function(err) {
            console.log('Произошла следующая ошибка: ' + err);
        };
    
        navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    
    } else  {
       console.log('Диктофон такого типа не поддерживается в вашем браузере!');
    };

}
asyncFunc()


// кнопка УДАЛИТЬ (аудио)

var buttonDeleteAudio = document.getElementsByClassName("button__delete")[1];
buttonDeleteAudio.onclick = showDeleteAudio;   
    
function showDeleteAudio() {

    var soundClips = document.getElementsByClassName("sound-clips")[0];
    
    // container8.classList.add("allGrey_AudioWrite_8");     
      
    textRedao222.style.display = "flex";
    modal222.style.display = "flex";

        // кнопка подтверждения - да_Удалить запись навсегда 

    submitDelete222.onclick = function() {
             
        container8.style.display = "none";
        soundClips.innerHTML = "";

        textRedao222.style.display = "none";
        modal222.style.display = "none";
        location.reload();
        window.location.hash = "anchor__diary-title";

        var writeAudioTime = document.getElementsByClassName("write-audio-time")[0];
        writeAudioTime.classList.remove("write-time-audio_2");
    };

    // кнопка отменить удаление (не удалять запись)

    submitCancel222.onclick = function() {

        // container8.classList.remove("allGrey_AudioWrite_8");
        
        textRedao222.style.display = "none";
        modal222.style.display = "none";
        window.location.hash = "anchor__diary-title";
    };
};


