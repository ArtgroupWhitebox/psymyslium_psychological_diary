var nickLabel = document.getElementsByClassName("text")[0];
    
var nick = localStorage["nickKey"];
nickLabel.innerHTML = nick;   

var pasInput = document.getElementsByClassName("password-upload_3")[0];
pasInput.onclick = showRulePas;

function showRulePas() {
    pasInput.placeholder = 'введите актуальный пароль';
}

pasInput.onblur = validationPas;

function validationPas() {

    if ( pasInput.value !== localStorage["pasKey"] ) {
        pasInput.className = 'password-upload_3 error';
        pasInput.value = '';
        pasInput.placeholder = `ошибка. неверный пароль`;
        return false;
    } else {
        pasInput.className = 'password-upload_3';
        return true;
    }
}   

var extButton = document.getElementsByClassName("button_3")[0];
extButton.onclick = exitShow;

function exitShow() {

    if ( validationPas() == true ) {
        
        var hrefButton = document.getElementsByClassName("ssilka_3")[0];   
        hrefButton.href = "index44.html";
    
    } else {
        validationPas();
    }
}
