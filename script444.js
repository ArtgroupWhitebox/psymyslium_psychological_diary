var avatarFile = document.getElementById("file-upload-avatar");
var nickLabel = document.getElementsByClassName("text")[0];

let userId = localStorage["userId"];

fetch(`http://localhost:7000/users/${userId}`, {
    method: 'GET',
})
.then(res => res.json())
.then(user => { 
    console.log('nick =',  user.nick); 
    nickLabel.innerHTML = user.nick;
    if (user.avatar) {
        avatarFile.src = user.avatar;  
    }                                                    
})  