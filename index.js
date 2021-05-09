function encodeImageFileAsURL(element) {
    const file = element.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
        uploadPaste(reader.result);
    }
    reader.readAsDataURL(file);
}

function uploadPaste(uri) {
    const data = {
        'api_dev_key': 'qX_9wbFXNbyBcMtXFTq2CkUwzZpGlQd4',
        'api_paste_code': uri,
        'api_option': 'paste',
        'api_paste_private': 2,
        'api_folder_key': 'khusi'
    };
    axios.post('https://pastebin.com/api/api_post.php', data)
}

