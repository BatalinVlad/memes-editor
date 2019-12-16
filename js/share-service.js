function uploadMemeClick(elForm, ev) {
    ev.preventDefault();
    debugger

    gIsShare = true;
    renderCanvas(() => {
        uploadMeme(elForm);
    })
}


// on submit call to this function
function uploadMeme(elForm) {
    document.getElementById('imgData').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <a id="upload-meme" class="btn hidden" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
        document.querySelector('#upload-meme').click();

    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
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
            console.error(err)
        })
}





// function uploadMeme() {

//     document.getElementById('meme-data').value = gCanvas.toDataURL("Meme/jpeg");
//     elForm = document.querySelector('#upload');

//     function onSuccess(uploadedImgUrl) {
//         uploadedImgUrl = encodeURIComponent(uploadedImgUrl)

//         // document.querySelector('.share-container').innerHTML = `
//         // <a id="upload-meme" class="btn hidden" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
//         //    Share   
//         // </a>`

//         // document.querySelector('#upload-meme').click();

//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}`);
//         gIsShare = false;
//     }

//     doUploadMeme(elForm, onSuccess);
// }



// function doUploadMeme(elForm, onSuccess) {
//     var formData = new FormData(elForm);
//     fetch('http://ca-upload.com/here/upload.php', {
//             method: 'POST',
//             body: formData
//         })
//         .then(function (res) {
//             return res.text()
//         })
//         .then(onSuccess)
//         .catch(function (err) {})
// }