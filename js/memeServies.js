let gMemes = [];
let gMeme = {};

function createMemes() {
    var newMemes = []
    newMemes.push(createMeme(1, 0, [{
        line: 'ADD TEXT',
        size: 20,
        align: 'left',
        color: 'red'
    }]))
    return newMemes;
}

function createMeme(selectedImgId, selectedTxtId, txts) {
    var newMeme = {
        selectedImgId,
        selectedTxtId,
        txts
    }
    return newMeme;
}

function uploadMemeOnImg(elMemeImg) { 
    var memeImgId = elMemeImg.getAttribute("data-id");
    var meme = getMemeById(memeImgId);
    renderMemeOnCanvas(meme);
}

function getMemeById(id) {
    return gMemes.find(meme => (meme.selectedImgId+'' === id))
}