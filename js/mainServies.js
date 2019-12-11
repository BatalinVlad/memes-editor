let gKeyWords = {'happy' : 12 , 'funny' : 1};
let gImgs = [];
let gId = 1;

function createMemesBoard(){
    var memesImgs = [];
    memesImgs.push(createMemesImgs('memesImg/005.jpg',['happy']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    memesImgs.push(createMemesImgs('memesImg/006.jpg',['funny']))
    return memesImgs;
}

function createMemesImgs(url , keyWords){
    var newImg = {
        id : gId++,
        url,
        keyWords
    };
    // updateFilterKeyWords(keWords)
    return newImg;
}

function openCanvas(elMemeImg){
    console.log('open canvas !')
    document.querySelector('.memes-page').style.visibility = 'hidden';
    document.querySelector('.memes-canvas-page').style.visibility = 'visible';
    uploadCanvasImg(elMemeImg);
    // uploadMemeOnImg(elMemeImg);
}

function updateText() {
    var text = document.querySelector('#meme-txt-1').value;
    drawText(text , 20 , 50);
}
