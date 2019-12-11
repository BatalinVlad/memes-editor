function init(){
    console.log('load page!')
    gImgs = createMemesBoard();
    renderMemesBoard();
    gMemes = createMemes();

    gCanvas = document.querySelector('#memes-canvas');
    gCtx = gCanvas.getContext('2d');
    document.querySelector('#meme-txt-1').addEventListener('keyup',updateText); 
}

function renderMemesBoard(){
    var strHTML = '';
    gImgs.forEach(img => {
        strHTML += `<img src="${img.url}" data-id="${img.id}" onclick="openCanvas(this)">`
    });
    document.querySelector('.memes-imges-container').innerHTML = strHTML;
}

