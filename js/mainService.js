let gKeyWords = {
    'happy': 12,
    'funny': 1
};

let gImgs = [];
let gId = 1;
let gPage = [];

// let gShareOrDownload = 'none';
// let gEl;

function createMemesBoard() {
    var memesImgs = [];
    memesImgs.push(createMemesImgs('memesImg/001.jpg', ['happy']))
    memesImgs.push(createMemesImgs('memesImg/002.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/003.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/004.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/005.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/007.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/008.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/009.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/010.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/011.jpg', ['funny']))
    return memesImgs;
}

function createMemesImgs(url, keyWords) {
    var newImg = {
        id: gId++,
        url,
        keyWords
    };
    // updateFilterKeyWords(keWords)
    return newImg;
}

function openCanvas(elMemeImg) {
    console.log('open canvas !')
    document.querySelector('.memes-page').style.display = 'none';
    document.querySelector('.filters-container').style.display = 'none';
    document.querySelector('.memes-canvas-page').style.display = 'flex';
    setCanvasBgImg(elMemeImg);
    renderCanvas();
}


function updatePage() {}

// function beforeDownloadMeme(el){
//     debugger
//     gShareOrDownload = 'download';
//     gEl = el;
//     renderCanvas();
// }

function downloadMeme(el) {
    var image = gCanvas.toDataURL("Meme/jpg");
    el.href = image;
    gIsToShareOrDownload = false;
}