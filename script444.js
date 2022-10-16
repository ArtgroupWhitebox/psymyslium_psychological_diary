var userId = localStorage["userId"];

var avatarFile = document.getElementById("file-upload-avatar");
// var avatar = localStorage["photoKey"];

var nickLabel = document.getElementsByClassName("text")[0];
// var nick = localStorage["nickKey"];

if (!userId) {
    console.log('userId =', 'не определен');
} else {
    fetch(`http://localhost:7000/users/${userId}`, {method: 'GET',
    })
    .then(res => res.json())
    .then(user => { 
        console.log('nick =',  user.nick); 
        nickLabel.innerHTML =  user.nick; 
        if (user.avatar) {
            avatarFile.src = user.avatar;  
        }                                                    
    })  
}