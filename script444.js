
var imgPhoto = document.getElementById("file-upload-avatar");
var photo = localStorage["photoKey"];
if (photo) {
    imgPhoto.src = photo;
    console.log("аватар: ", photo);    
}
    
 
var nickLabel = document.getElementsByClassName("text")[0];

var nick = localStorage["nickKey"];
nickLabel.innerHTML = nick;