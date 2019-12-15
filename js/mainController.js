function renderMemesBoard() {
    var strHTML = '';

    filterImgs()

    gImgs.forEach(img => {
        strHTML += `<img src="${img.url}" data-id="${img.id}" onclick="openCanvas(this)" class="grid-item">`
    });
    document.querySelector('.memes-imges-container').innerHTML = strHTML;

    defaultFilterValue();
}

function renderKeys() {
    var strHTML = '';
    var maxLength = 0;
    for (let word in gMapKeyWords) {
        gCtx.save();
        var wordFontSize = 12 + gMapKeyWords[word];
        var font = wordFontSize + 'px Arial';
        gCtx.font = font;
        var wordLength = gCtx.measureText(word).width;
        maxLength += wordLength;
        gCtx.restore();
        if (maxLength <= 200)
            strHTML += `<p style="font-size:${wordFontSize}px; opacity:1; cursor:pointer;" onclick="clickedFilter(this)">${word}</p>`
        else
            strHTML += `<p class="hidden" style="font-size:${wordFontSize}px; opacity:1; cursor:pointer;"  onclick="clickedFilter(this)>${word}</p>`
    }
    document.querySelector('.keys-container').innerHTML = strHTML;
    document.querySelector('.more-btn').innerText = 'More';
}


function moreButton() {
    var strHTML = '';
    var btnName = document.querySelector('.more-btn').innerText;

    if (btnName === 'Less') {
        renderKeys();
        return;
    }

    for (let word in gMapKeyWords) {
        var wordFontSize = 12 + gMapKeyWords[word];
        strHTML += `<p style="font-size:${wordFontSize}px; opacity:1; cursor:pointer;" onclick="clickedFilter(this)">${word}</p>`
    }

    document.querySelector('.keys-container').innerHTML = strHTML;
    document.querySelector('.more-btn').innerText = 'Less';
}