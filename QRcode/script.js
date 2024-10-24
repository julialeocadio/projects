let URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText")

function generateQR(){
    qrImage.src = URL + qrText.value;
}