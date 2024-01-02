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
var subButton = document.getElementsByClassName("submit-upload")[0];
var hrefButton = document.getElementsByClassName("ssilka_2")[0];
 
nickInput.onclick = showRuleNick;
logInput.onclick = showRuleLog;
pasInput.onclick = showRulePas;
subButton.onclick = submitShow;

photoInput.onchange = showPhoto;

nickInput.onblur = validationNick;
logInput.onblur = validationLog;
pasInput.onblur = validationPas;

let userId = localStorage["userId"];

if (userId) {
    fetch(`${API_URL}/users/${userId}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(user => { 
        nickInput.value = user.nick; 
        logInput.value = user.email; 
        pasInput.value = user.password;
        avatarImag.src = user.avatar;
        headerSub.innerHTML = 'Редактировать данные:';  
        photoLabel.innerHTML = 'заменить_аватар';                      
    })
}

function showPhoto() { 
    let file = photoInput.files[0];    
    if (file) {
        console.log(file); 
        let blobFile = new Blob([file], {type: "image/jpeg/png"});
        let photoURL = URL.createObjectURL(blobFile);
        console.log('photoURL =', photoURL);
        avatarImag.src = photoURL;
    } 
}

async function userAvatarUrl() {
    let file = photoInput.files[0];
    console.log('file =', file);
    const formData = new FormData()
    formData.append('image', file)
        
    if (file) {
        return fetch(`${API_URL}/upload`, {
            method: 'POST',
            body: formData 
        })
        .then(res => res.json())
        .then(json => {
            console.log('avatarUrl =', json.imageUrl);
            return json.imageUrl;          
        })  
    } else {
        return Promise.resolve(avatarImag.src);
    } 
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

function validationNick() {
    if (nickInput.value.length < 1 || nickInput.value.length > 10) {
        nickInput.className = 'text-upload error';
        nickInput.value = '';
        nickInput.placeholder = 'введите корректное имя';
        console.log('не корректное или пустое поле: имя_никнейм');
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
        console.log('не корректное или пустое поле: логин_email');
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
        console.log('не корректное или пустое поле: пароль_код');
        return false;
    } else {
        pasInput.className = 'password-upload';
        return true;
    }
}

function changePageView(user) {
    hrefButton.href = "index44.html"; 
    photoLabel.style.display = "none";
    nickInput.style.display = "none";
    logInput.style.display = "none";
    pasInput.style.display = "none"; 
    preventionSub.style.display = "none";
    headerSub.innerHTML = 'Успешно!'; 
    avatarImag.style.border = "1px solid #93FFF8";
    nickname.innerHTML = user.nick; 
    login.innerHTML = user.email; 
    password.innerHTML = user.password;  
}

function createdUser(bodyUser, headersReqUsers) {
    fetch(`${API_URL}/users`, {
        method: 'POST',
        body: bodyUser,
        headers: headersReqUsers
    })
    .then(res => res.json())
    .then(user => {
        localStorage["userId"] = String(user.id); 
        console.log('userId =', localStorage["userId"]); 
        changePageView(user);                                                                                                                      
    }) 
    subButton.innerHTML = '- В Х О Д -'; 
}

function updateUser(bodyUser, headersReqUsers) {
    fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        body: bodyUser,
        headers: headersReqUsers
    })
    .then(res => res.json())
    .then(user => {
        changePageView(user);                                                                                                       
    })
    subButton.innerHTML = '- М Е Н Ю -';  
}

function submitShow() {    
    if (validationNick() && validationLog() && validationPas() && userAvatarUrl()) {

        userAvatarUrl()
        .then(avatarUrl => {
            const bodyUser = JSON.stringify({
                nick: nickInput.value,
                email: logInput.value,
                password: pasInput.value,
                avatar: avatarUrl
            })            
            const headersReqUsers = {
                'Content-Type': 'application/json'
            }            

            if (!userId) {
                createdUser(bodyUser, headersReqUsers)  
            } else {
                updateUser(bodyUser, headersReqUsers)   
            } 
        })                     
    } 
    else {
        if (!validationNick()) return console.log('не корректное или пустое поле: имя_никнейм');
        if (!validationLog()) return console.log('не корректное или пустое поле: логин_email');
        if (!validationPas()) return console.log('не корректное или пустое поле: пароль_код');
        if (!userAvatarUrl()) return console.log('не верный тип файла или размер файла превышает 10МБ, или пустое поле: аватар');
    }
}