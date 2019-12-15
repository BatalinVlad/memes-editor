function renderSavedMemes() {
    gSavedMemes = loadFromStorage('saved memes', []);
    if (gSavedMemes) {
        var strHTML = '';
        gSavedMemes.forEach((img, idx) => {
            strHTML += `<img src = "${img}" class="saved-img grid-item">`
        });
        document.querySelector('.grid-container-saved-memes').innerHTML = strHTML;
    }
}