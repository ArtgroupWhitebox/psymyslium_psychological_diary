var avatarFile = document.getElementById("file-upload-avatar");
var nickLabel = document.getElementsByClassName("text")[0];

let userId = localStorage["userId"];

if (userId) {
    fetch(`${API_URL}/users/${userId}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(user => { 
        nickLabel.innerHTML = user.nick;
        avatarFile.src = user.avatar;                       
    }) 
} else {
    console.log('Пользователь не найден, userId is not defined')
}

 