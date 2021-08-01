const dropArea = document.getElementById("dropArea");
var file;
const submitInput=document.getElementById('submitInput');
const pic = document.getElementById('picInput')

function fileShow () {
    var fr = new FileReader;
    fr.onload = () => {
        var fileURL = fr.result;
        console.log(fileURL);
        imgTag = `<img src = ${fileURL}>`
        dropArea.innerHTML = imgTag;
    }
    fr.readAsDataURL(file);
}

dropArea.addEventListener("dragover", (event) => {
        event.preventDefault();

    dropArea.style.borderStyle = "solid";
});

dropArea.addEventListener("dragleave", (event) => {
        event.preventDefault();

    dropArea.style.borderStyle = "dashed";

});

dropArea.addEventListener("drop", (event) => {
    file = event.dataTransfer.files[0];
    // Upload picture to input tag https://stackoverflow.com/questions/47515232/how-to-set-file-input-value-when-dropping-file-on-page
    pic.files = event.dataTransfer.files;
    event.preventDefault();
    fileShow();

});