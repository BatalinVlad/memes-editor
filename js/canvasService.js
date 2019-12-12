let gCanvas;
let gCtx;
let gCanvasBgImg;

let gTextSize = {
    value : 1,
    currLine : ''
} 

let gLineUpOrDown = {
    currLine: '',
    value: 0,
    isOn: false
};

function getImgById(id) {
    return gImgs.find(img => img.id + '' === id);
}

function setCanvasBgImg(elMemeImg) {
    var memeImgId = elMemeImg.getAttribute("data-id");
    gCanvasBgImg = getImgById(memeImgId);
}

function setTextSize(elTextSize) {
    gTextSize.value = parseInt(elTextSize.value);
    gTextSize.currLine = gCurrLine;
    renderCanvas();
}

function setLineHeight(lineIdx, memeTextStyle) {
    var incOrDecLineHeight = 0;
    if (lineIdx === 0) {
        if (gLineUpOrDown.currLine === 0 && gLineUpOrDown.isOn) {
            incOrDecLineHeight = gLineUpOrDown.value;
            memeTextStyle.height += incOrDecLineHeight;
            gLineUpOrDown.isOn = false;
        }
    } else if (lineIdx === 1) {
        if (gLineUpOrDown.currLine === 1 && gLineUpOrDown.isOn) {
            incOrDecLineHeight = gLineUpOrDown.value;
            memeTextStyle.height += incOrDecLineHeight;
            gLineUpOrDown.isOn = false;
        }
    } else {
        if (gLineUpOrDown.currLine === lineIdx && gLineUpOrDown.isOn) {
            incOrDecLineHeight = gLineUpOrDown.value;
            memeTextStyle.height += incOrDecLineHeight;
            gLineUpOrDown.isOn = false;
        }
    }
}

function setFontSize(idx , memeTxtStyle){
    if(gTextSize.currLine === idx){
        memeTxtStyle.size = gTextSize.value;
    }
}

function setTextColor(elTextColor) {
    gTextColor = elTextColor.value;
    gCurrMeme['txts'][gCurrLine].color = gTextColor;
    renderCanvas();
}

function setCurrLineBg(lineId, memeStyle) {
    var bgWidth = gCtx.measureText(memeStyle.line).width + 10;
    var bgHeight = memeStyle.size;
    if (gCurrLine === lineId) {
        gCtx.save();
        gCtx.strokeRect(gCanvas.width / 2 - bgWidth / 2, memeStyle.height - bgHeight + 3, bgWidth, bgHeight);
        gCtx.restore();
    }
}


function lineUp() {
    gLineUpOrDown.isOn = true;
    gLineUpOrDown.value = -3;
    gLineUpOrDown.currLine = gCurrLine;
    renderCanvas();
}

function lineDown() {
    gLineUpOrDown.isOn = true;
    gLineUpOrDown.value = 3;
    gLineUpOrDown.currLine = gCurrLine;
    renderCanvas();
}

function deleteLine() {
    gCurrMeme['txts'].splice(gCurrLine , 1)
    gMaxLines--;
    gCurrLine = gMaxLines;
    renderCanvas(); 
}