async function asyncFunc() {

    const start = document.querySelector('.button__start');
    const stop = document.querySelector('.button__stop');
    const pause1 = document.querySelector('.button__pause1');
    const resume = document.querySelector('.button__resume');
    const soundClips = document.querySelector('.sound-clips');
    const play = document.querySelector("button__play");
    const pause2 = document.querySelector("button__pause2");
    
    stop.disabled = true;

    if (navigator.mediaDevices.getUserMedia) {
    
        const constraints = { audio: true };

        let onSuccess = function(stream) {
            const mediaRecorder = new MediaRecorder(stream);
            let voice = [];

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
            });

            mediaRecorder.addEventListener("dataavailable",function(event) {
                console.log(event);
                voice.push(event.data);
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
            });

            mediaRecorder.addEventListener("dataavailable",function(event) {
                console.log(event);
                voice.push(event.data);
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
                
            });

            mediaRecorder.addEventListener("stop", function() {
                              
                const clipContainer = document.createElement('article');
                const audio = document.createElement('audio');
                const source = document.createElement('source');
                const source2 = document.createElement('source');
                const deleteButton = document.createElement('button');
                const playButton = document.createElement('button');
                const pause2Button = document.createElement('button');


                clipContainer.classList.add('clip');
                // audio.setAttribute('controls', '');
                audio.setAttribute('preload', 'metadata');
                source.className = 'audio/ogg';
                source2.className = 'audio/mpeg';
                deleteButton.textContent = 'Очистить';
                deleteButton.className = 'delete';
                playButton.className = 'button__play';
                pause2Button.className = 'button__pause2';
                playButton.innerHTML = `
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="play" d="M14 8L0.5 15.7942L0.5 0.205771L14 8Z" fill="#3B3B3C"/>
                </svg>
                `
                pause2Button.innerHTML = `
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect class="pause" width="5" height="15" rx="1" fill="#3B3B3C"/>
                    <rect class="pause" x="8" width="5" height="15" rx="1" fill="#3B3B3C"/>
                </svg>
                `
                clipContainer.appendChild(audio);
                audio.appendChild(source);
                audio.appendChild(source2);
                clipContainer.appendChild(playButton);
                clipContainer.appendChild(pause2Button);
                clipContainer.appendChild(deleteButton);
                soundClips.appendChild(clipContainer);

                soundClips.style.display = "flex";
                // play.style.display = "flex";                
                audio.controls = false;

                const voiceBlob = new Blob(voice, {
                    type : 'audio/ogg; codecs=opus'
                });

                const voiceBlob2 = new Blob(voice, {
                    type : 'audio/mpeg'
                });

                voice = [];

                const audioURL = window.URL.createObjectURL(voiceBlob);
                source.src = audioURL;
                source.type = "audio/ogg; codecs=opus";

                const audioURL2 = window.URL.createObjectURL(voiceBlob2);
                source2.src = audioURL2;
                source2.type = "audio/mpeg";

                console.log("recorder stopped");
                
                console.log(voiceBlob);
                console.log(audioURL);
                console.log(voiceBlob2);
                console.log(audioURL2);

                                
                var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                var myAudio = document.querySelector('audio');
                var mySource = audioCtx.createMediaElementSource(myAudio);
                // var oscillatorNode = audioCtx.createOscillator();
                // oscillatorNode.connect(audioCtx.destination);
                mySource.connect(audioCtx.destination);             
               
                play.addEventListener('click', function(){
                    mySource.start();
                    console.log(mySource[i].state);
                    console.log("воспроизведение записи");
                    play.disabled = true;
                    pause2.disabled = false;
                    play.style.display = "flex";
                    pause2.style.display = "none";
                });
                
                pause2.addEventListener('click', function(){
                    mySource.stop();
                    console.log(mySource[i].state);
                    console.log("пауза");
                    play.disabled = false;
                    pause2.disabled = true;
                    play.style.display = "none";
                    pause2.style.display = "flex";
                });
                
                deleteButton.onclick = function(e) {
                    stop.style.display = "flex";
                    start.style.display = "flex";
                    soundClips.style.display = "none";

                    let evtTgt = e.target;
                    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
                }
                
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
    
    } else {
       console.log('Диктофон такого типа не поддерживается в вашем браузере!');
    };
};
asyncFunc()
