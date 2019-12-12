function uploadMeme(elForm, ev) {
    ev.preventDefault();
    
    document.getElementById('meme-data').value = gCanvas.toDataURL("Meme/jpeg");

    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}`);
    }

    doUploadMeme(elForm, onSuccess);
}

function doUploadMeme(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
    .then(function (res) {
        return res.text()
    })
    .then(onSuccess)
    .catch(function (err) {
    })
}