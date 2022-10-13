var userId = localStorage["userId"];

var imgPhoto = document.getElementById("file-upload-avatar");
var photo = localStorage["photoKey"];

var nickLabel = document.getElementsByClassName("text")[0];
// var nick = localStorage["nickKey"];

if (!userId) {
    console.log('userId =', 'не определен');
} else {
    fetch(`http://localhost:7000/users/${userId}`, {method: 'GET',
    })
    .then(res => res.json())
    .then(user => {              
        var nick = user.nick;
        console.log('nick =', nick); 
        nickLabel.innerHTML = nick;                                                     
    })  
}

if (photo) {
    imgPhoto.src = photo;
    console.log("аватар: ", photo);    
}