// import fetch from 'node-fetch'

var avatarImag = document.getElementsByClassName("custom-file-upload")[0];
var photoInput = document.querySelector('input[type="file"]');
var nickInput = document.getElementsByClassName("text-upload")[0];
var logInput = document.getElementsByClassName("email-upload")[0];
var pasInput = document.getElementsByClassName("password-upload")[0];

nickInput.onclick = showRuleNick;
logInput.onclick = showRuleLog;
pasInput.onclick = showRulePas;
photoInput.onchange = showPhoto;

function showPhoto() {
    file = photoInput.files[0];
    console.log(file);
    let blobFile = new Blob([file], {type: "image/jpeg/png"});
    let photoURL = URL.createObjectURL(blobFile);
    console.log(photoURL);
    avatarImag.src = photoURL; 
    
    let readerBlobFile = new FileReader();
    readerBlobFile.readAsDataURL(blobFile); // конвертирует Blob в base64 и вызывает onload        
    
    readerBlobFile.onload = async function() {
        localStorage["photoKey"] = readerBlobFile.result; // url с данными
    };
}

function showRuleNick() {
    nickInput.placeholder = 'от 1 до 10 символов';
}

function showRuleLog() {
    logInput.placeholder = 'обязательно @ и . (точка)';
}

function showRulePas() {
    pasInput.placeholder = 'от 4 до 8 символов';
}


nickInput.onblur = validationNick;
logInput.onblur = validationLog;
pasInput.onblur = validationPas;

function validationNick() {
    if (nickInput.value.length < 1 || nickInput.value.length > 10) {
        nickInput.className = 'text-upload error';
        nickInput.value = '';
        nickInput.placeholder = 'введите корректное имя';
        return false;
    } else {
        nickInput.className = 'text-upload';
        return true;
    }
}

function validationLog() {

    var dogSign = logInput.value.indexOf("@");
    var points = logInput.value.indexOf(".");
    
    if ( !(dogSign != -1 && points != -1)) {
        logInput.className = 'email-upload error';
        logInput.value = '';
        logInput.placeholder = 'введите корректный Email';
        return false;
    } else {
        logInput.className = 'email-upload';
        return true;
    }
}
    
function validationPas() {
    if (pasInput.value.length < 4 || pasInput.value.length > 8) {
        pasInput.className = 'password-upload error';
        pasInput.value = "";
        pasInput.placeholder = 'введите корректный пароль';
        return false;
    } else {
        pasInput.className = 'password-upload';
        return true;
    }
}   
    

var subButton = document.getElementsByClassName("submit-upload")[0];
subButton.onclick = submitShow;


function submitShow() {

    if ( validationNick() && (validationLog() == true) && validationPas() ) {
        var nick = nickInput.value;
        var log = logInput.value;
        var pas = document.getElementsByClassName("password-upload")[0].value;

        localStorage["nickKey"] = nick;
        localStorage["logKey"] = log;
        localStorage["pasKey"] = pas;   
        
        var hrefButton = document.getElementsByClassName("ssilka_2")[0];   
        hrefButton.href = "index44.html";
    } else {
        validationNick();
        validationLog();
        validationPas();
    }
}

