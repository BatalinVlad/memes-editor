let gMemes = [];
let gMeme = {};
let gCurrMeme;

function createMemes() {
    (createMeme(2, 0, [{
        line: 'ADD TEXT',
        size: 20,
        align: 'left',
        color: 'red'
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

function updateText(elLine) {
    debugger
    var line = document.querySelector('#meme-txt-1').value
    gCurrMeme['txts'][0].line = line;
    renderCanvas();
}
