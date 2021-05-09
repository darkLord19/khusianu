function encodeImageFileAsURL(element) {
    const file = element.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        uploadPaste(reader.result);
    }
    reader.readAsDataURL(file);
}

function uploadPaste(uri) {
    const request = new XMLHttpRequest();
    request.open("POST", "http://upaste.herokuapp.com/", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`{paste=${uri}}`);
}

