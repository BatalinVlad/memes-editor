let gMapKeyWords = {};
let gImgs = [];
let gId = 1;
let gPage = [];
let gFilterWord = '';
let gIsDownload = false;


function init() {
    gImgs = createMemesBoard();
    renderMemesBoard();
    
    gSavedMemes = loadFromStorage('saved memes', []);
    renderSavedMemes()
    gCanvas = document.querySelector('#memes-canvas');
    gCtx = gCanvas.getContext('2d');

    gCanvasOffset = gCanvas.getBoundingClientRect();
    gCanvasWidth = gCanvasOffset.width;
    gCanvasHeight = gCanvasOffset.height;
    gOffsetX = gCanvas.offsetLeft;
    gOffsetY = gCanvas.offsetTop;


    if (!gMemes) gMemes = createMemes();
    renderKeys();

    gCanvas.addEventListener('click', function (ev) {
        checkClick(ev), false
    });
}

function checkClick(ev) {
    clickOffsetX = ev.clientX;
    clickOffsetY = ev.clientY;
    gCurrMeme['txts'].forEach((txt, idx) => {
        if ((clickOffsetX >= txt.posX - gCtx.measureText(txt.line).width / 2 && clickOffsetX <= txt.posX + gCtx.measureText(txt.line).width / 2) &&
            (clickOffsetY >= txt.height && clickOffsetY <= txt.height + txt.size * gLinesCount))
            console.log('MEME : ' + idx + ' CLICKED');
    });
}

function createMemesBoard() {
    var memesImgs = [];
    memesImgs.push(createMemesImgs('memesImg/001.jpg', ['happy', 'funny', 'funny', 'funny']))
    memesImgs.push(createMemesImgs('memesImg/002.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/003.jpg', ['Enjoy']))
    memesImgs.push(createMemesImgs('memesImg/004.jpg', ['happy', 'lovely']))
    memesImgs.push(createMemesImgs('memesImg/005.jpg', ['funny', 'lovely']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg', ['awful']))
    memesImgs.push(createMemesImgs('memesImg/007.jpg', ['funny', 'lovely']))
    memesImgs.push(createMemesImgs('memesImg/008.jpg', ['Sad']))
    memesImgs.push(createMemesImgs('memesImg/009.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/010.jpg', ['Sad']))
    memesImgs.push(createMemesImgs('memesImg/011.jpg', ['funny', 'angry']))
    memesImgs.push(createMemesImgs('memesImg/012.jpg', ['funny', 'kids']))
    memesImgs.push(createMemesImgs('memesImg/013.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/014.jpg', ['awful', 'sexy']))
    memesImgs.push(createMemesImgs('memesImg/015.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/016.jpg', ['funny']))
    memesImgs.push(createMemesImgs('memesImg/017.jpg', ['great']))
    memesImgs.push(createMemesImgs('memesImg/018.jpg', ['funny']))

    return memesImgs;
}

function createMemesImgs(url, keyWords) {
    var newImg = {
        id: gId++,
        url,
        keyWords,
        filterValue: 0
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
    document.querySelector('#memes-page').style.display = 'none';
    document.querySelector('.filters-container').style.display = 'none';
    document.querySelector('.saved-memes-page').style.display = 'none';
    document.querySelector('.memes-canvas-page').style.display = 'flex';
    setCanvasBgImg(elMemeImg);
    renderCanvas();
}


function updatePage(elPage) {
    var updatePage = elPage.getAttribute('data-id');
    switch (updatePage) {
        case 'Memes':
            document.querySelector('#memes-page').style.display = 'block';
            document.querySelector('.filters-container').style.display = 'flex';
            document.querySelector('.saved-memes-page').style.display = 'none';
            document.querySelector('.memes-canvas-page').style.display = 'none';
            break;
        case 'About':
            window.open('https://batalinvlad.github.io/portfolio/', '_blank');
            break;
        case 'Gallery':
            document.querySelector('#memes-page').style.display = 'none';
            document.querySelector('.filters-container').style.display = 'none';
            document.querySelector('.memes-canvas-page').style.display = 'none';
            document.querySelector('.saved-memes-page').style.display = 'flex';
            renderSavedMemes();
            break;
    }
}

function downloadMemeClick(el) {
    gIsDownload = true;
    renderCanvas(function () {
        downloadMeme()
    });
}

function downloadMeme() {
    var image = gCanvas.toDataURL("Meme/jpg");
    var downloadHTML = `<a id="download" download="myImage.jpg" href="${image}" ></a>`
    document.querySelector('.link').innerHTML = downloadHTML;
    document.querySelector('#download').click();
    gIsDownload = false;
    renderCanvas();
}

function setFilter(elFiterWord) {
    gFilterWord = elFiterWord.value;
    renderMemesBoard();
}

function clickedFilter(filter) {
    gFilterWord = filter.innerText;
    renderMemesBoard();
}

function filterImgs() {
    gImgs.forEach((img, idx) => {
        img.keyWords.forEach((word, idx) => {
            if (word.includes(gFilterWord)) img.filterValue++;
        })
    })
    doSort();
}

function doSort() {
    gImgs.sort(function (value1, value2) {
        return value2.filterValue - value1.filterValue;
    });
}

function defaultFilterValue() {
    gImgs.forEach((img, idx) => {
        img.filterValue = 0;
    });
}


function toggleMenu() {
    document.body.classList.toggle('menu-open');
}