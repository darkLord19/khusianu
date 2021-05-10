function encodeImageFileAsURL(element) {
    const file = element.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        uploadPaste(reader.result);
    }
    reader.readAsDataURL(file);
}

function uploadPaste(uri) {
    const body = {
        data: uri
    }
    const request = new XMLHttpRequest();
    request.open("POST", "https://3b1twu5u9j.execute-api.ap-south-1.amazonaws.com/default/createPaste");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(body));
}

