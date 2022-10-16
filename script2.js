var headerSub = document.getElementsByClassName("header_sub")[0];
var avatarImag = document.getElementsByClassName("custom-file-upload")[0];
var photoLabel = document.getElementsByClassName("custom-label-upload")[0];
var photoInput = document.querySelector('input[type="file"]');
var nickInput = document.getElementsByClassName("text-upload")[0];
var nickname = document.getElementsByClassName("nickname")[0];
var logInput = document.getElementsByClassName("email-upload")[0];
var login = document.getElementsByClassName("login")[0];
var pasInput = document.getElementsByClassName("password-upload")[0];
var password = document.getElementsByClassName("password")[0];
var preventionSub = document.getElementsByClassName("prevention_sub")[0];
 
nickInput.onclick = showRuleNick;
logInput.onclick = showRuleLog;
pasInput.onclick = showRulePas;
photoInput.onchange = showPhoto;

function showPhoto() { 
    let file = photoInput.files[0];
    console.log(file);   
    let blobFile = new Blob([file], {type: "image/jpeg/png"});
    let photoURL = URL.createObjectURL(blobFile);
    console.log('photoURL =', photoURL);
    avatarImag.src = photoURL;
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

var hrefButton = document.getElementsByClassName("ssilka_2")[0];

function submitShow() {
    
    if ( validationNick() && (validationLog() == true) && validationPas() ) {
        var nick = nickInput.value;
        var log = logInput.value;
        var pas = document.getElementsByClassName("password-upload")[0].value;
        
        let file = photoInput.files[0];
        const formData = new FormData()
        formData.append('image', file)
        
        fetch(`http://localhost:7000/upload`, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(json => {
            let avatarUrl = json.imageUrl
            console.log('avatarUrl =', avatarUrl);

            fetch(`http://localhost:7000/users`, {
                method: 'POST',
                body: JSON.stringify({
                    nick: nick,
                    email: log,
                    password: pas,
                    avatar: avatarUrl
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(user => {
                localStorage["userId"] = String(user.id);
                console.log('userId =', localStorage["userId"]);                
                hrefButton.href = "index44.html"; 
                photoLabel.style.display = "none";
                nickInput.style.display = "none";
                logInput.style.display = "none";
                pasInput.style.display = "none"; 
                preventionSub.style.display = "none";
                headerSub.innerHTML = 'Успешно!'; 
                avatarImag.style.border = "1px solid #93FFF8";
                nickname.innerHTML = `${user.nick}`; 
                login.innerHTML = `${user.email}`; 
                password.innerHTML = `${user.password}`;                                                                                                       
            })                               
        })
        subButton.innerHTML = '- В Х О Д -';                       
    } else {
        validationNick();
        validationLog();
        validationPas();
    }
}