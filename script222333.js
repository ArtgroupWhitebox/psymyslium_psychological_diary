var nickInput = document.getElementsByClassName("text-upload")[0];
var logInput = document.getElementsByClassName("email-upload")[0];
var pasInput = document.getElementsByClassName("password-upload")[0];


nickInput.onclick = showRuleNick;
logInput.onclick = showRuleLog;
pasInput.onclick = showRulePas;

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

var labelPhoto = document.getElementsByClassName("custom-file-upload")[0];

function submitShow() {

    if ( validationNick() && (validationLog() == true) && validationPas() ) {
        
        var hrefButton = document.getElementsByClassName("ssilka_2")[0];   
        hrefButton.href = "index44.html";

        var photo = document.getElementById("file-upload").value;
        var nick = nickInput.value;
        var log = logInput.value;
        var pas = document.getElementsByClassName("password-upload")[0].value;
        console.log(`
    фото: ${photo} 
    имя: ${nick}
    логин: ${log}
    пароль: ${pas}
    `);

        localStorage["photoKey"] = photo;
        localStorage["nickKey"] = nick;
        localStorage["logKey"] = log;
        localStorage["pasKey"] = pas;
        
        var photo = localStorage["photoKey"];
        console.log("аватар: " + photo);
        var nick = localStorage["nickKey"];
        console.log("имя_никнейм: " + nick);
        var log = localStorage["logKey"];
        console.log("логин_эл_почта: " + log);
        var pas = localStorage["pasKey"];
        console.log("пароль_код: " + pas);

    } else {
        validationNick();
        validationLog();
        validationPas();
    }
}

