let gMemes = [];
let gMeme = {};
let gMemeFont = 'Impact';
let gCurrMeme;
let gCurrLine = 0;
let gMaxLines;

function createMemes() {
    (createMeme(2, 0, [{
        line: 'ADD TEXT HERE',
        size: 20,
        align: 'center',
        color: 'black',
        stroke: 'black',
        font: 'Impact',
        posX:250,
        height: 50
    }, {
        line: 'ADD TEXT HERE',
        size: 20,
        align: 'center',
        color: 'black',
        stroke: 'black',
        font:'Impact',
        posX: 250,
        height: 450
    }]))
    return gMemes;
}

function createMeme(selectedImgId, selectedTxtId, txts) {
    var newMeme = {
        selectedImgId,
        selectedTxtId,
        txts
    }
    gMemes.push(newMeme);
}

function getMemeById(id) {
    return gMemes.find(meme => (meme.selectedImgId === id))
}

function updateText() {
    var line = document.querySelector('#meme-txt').value
    gCurrMeme['txts'][gCurrLine].line = line;
    renderCanvas();
}

function updateFont(elFont){
    gMemeFont =  elFont.value;
}

function changeLine() {
    gCurrLine++
    if (gCurrLine > gMaxLines) 
        gCurrLine = 0;
    gMemes.selectedTxtId = gCurrLine;
    gLineUpOrDown.value = 0; // for each line diffrent values .
    renderCanvas();
}

function addLine() {
    gCurrMeme['txts'].push({
        line: 'ADD TEXT HERE',
        size: 20,
        align: 'center',
        color: 'black',
        stroke: 'black',
        font:'Impact',
        posX:250,
        height: gCanvas.width / 2
    });
    gMaxLines++;
    gCurrLine = gMaxLines;
    gMemes.selectedTxtId = gCurrLine;
    gLineUpOrDown.currLine = gCurrLine;
    renderCanvas()
}

function saveMeme(){
    gMemes.push(gCurrMeme);
    saveToStorage('Memes' , gMemes);
}