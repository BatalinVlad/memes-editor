let gMapKeyWords = {};

let gImgs = [];
let gId = 1;
let gPage = [];

function init() {
    gImgs = createMemesBoard();
    renderMemesBoard();
    gMemes = loadFromStorage('Mems', [])
    if (!gMemes) gMemes = createMemes();
    renderKeys();
    gCanvas = document.querySelector('#memes-canvas');
    gCtx = gCanvas.getContext('2d');
}

function createMemesBoard() {
    var memesImgs = [];
    memesImgs.push(createMemesImgs('memesImg/001.jpg', ['happy']))
    memesImgs.push(createMemesImgs('memesImg/002.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/003.jpg', ['Enjoy']))
    memesImgs.push(createMemesImgs('memesImg/004.jpg', ['happy']))
    memesImgs.push(createMemesImgs('memesImg/005.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg', ['awful']))
    memesImgs.push(createMemesImgs('memesImg/007.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/008.jpg', ['Sad']))
    memesImgs.push(createMemesImgs('memesImg/009.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/010.jpg', ['Sad']))
    memesImgs.push(createMemesImgs('memesImg/011.jpg', ['funny']))
    return memesImgs;
}

function createMemesImgs(url, keyWords) {
    var newImg = {
        id: gId++,
        url,
        keyWords
    };
    updateFilterKeyWords(keyWords)
    return newImg;
}

function updateFilterKeyWords(keyWords) {
    keyWords.forEach((key, idx) => {
        gMapKeyWords[key] = (gMapKeyWords[key] | 0) + 1;
    });
}


function openCanvas(elMemeImg) {
    document.querySelector('.memes-page').style.display = 'none';
    document.querySelector('.filters-container').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';
    document.querySelector('.memes-canvas-page').style.display = 'flex';
    setCanvasBgImg(elMemeImg);
    renderCanvas();
}


function updatePage(elPage) {
    var updatePage = elPage.getAttribute('data-id');
    switch (updatePage) {
        case 'Gallery':

            break;
        case 'About':
            window.open('https://batalinvlad.github.io/portfolio/', '_blank');
            break;
        case 'Memes':

            break;
    }
}

function downloadMeme(el) {
    var image = gCanvas.toDataURL("Meme/jpg");
    el.href = image;
    gIsToShareOrDownload = false;
}