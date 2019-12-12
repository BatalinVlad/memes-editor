function renderMemesBoard() {
    var strHTML = '';
    gImgs.forEach(img => {
        strHTML += `<img src="${img.url}" data-id="${img.id}" onclick="openCanvas(this)" class="grid-item">`
    });
    document.querySelector('.memes-imges-container').innerHTML = strHTML;
}

function renderKeys() {
    var strHTML = '';
    for(let word in gMapKeyWords){
        strHTML += `<p style="font-size:${gMapKeyWords[word]*10}px;">${word}</p>`
    }
    document.querySelector('.keys-container').innerHTML = strHTML;
}

// function renderMemesPage(){
// var strHTML = '';
// gMemes.forEach()
// }