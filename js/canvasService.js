let gCanvas;
let gCtx;
let gCanvasBgImg;

// let gIsDragging;

let gCanvasOffset; 
let gOffsetX;
let gOffsetY;
let gCanvasWidth; 
let gCanvasHeight; 

let gTextSize = {
    value: 1,
    currLine: ''
}

let gLinesCount = 1;

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

function setFontSize(idx, memeTxtStyle) {
    if (gTextSize.currLine === idx) {
        memeTxtStyle.size = gTextSize.value;
    }
}

function setTextColor(elTextColor) {
    gCurrMeme['txts'][gCurrLine].color = elTextColor.value;
    renderCanvas();
}

function setStrokeColor(elStrokeColor) {
    gCurrMeme['txts'][gCurrLine].stroke = elStrokeColor.value;
    renderCanvas();
}


function changeAlign(elAlign) {
    gCurrMeme['txts'][gCurrLine].align = elAlign.getAttribute('data-id');
    setMemePosX(gCurrMeme['txts'][gCurrLine]);
    renderCanvas();
}

function setMemePosX(memeTextStyle) {
    if (memeTextStyle.align === 'right') {
        memeTextStyle.posX = gCanvas.width - 10;
    } else if (memeTextStyle.align === 'left') {
        memeTextStyle.posX = 10;
    } else memeTextStyle.posX = gCanvas.width / 2;
}

function setCurrLineBg(lineId, memeStyle) {
    var bgWidth = gCtx.measureText(memeStyle.line).width + 10;
    var bgHeight = memeStyle.size;
    if (gCurrLine === lineId) {
        gCtx.save();
        if (memeStyle.align === 'center')
            gCtx.strokeRect(gCanvas.width / 2 - bgWidth / 2, memeStyle.height - bgHeight + 3, bgWidth, bgHeight * gLinesCount);
        else if (memeStyle.align === 'left')
            gCtx.strokeRect(6, memeStyle.height - bgHeight + 3, bgWidth, bgHeight * gLinesCount);
        else
            gCtx.strokeRect(gCanvas.width - 4 - bgWidth, memeStyle.height - bgHeight + 3, bgWidth, bgHeight * gLinesCount);
        gCtx.restore();
    }
}

function setFontStyle() {
    gCurrMeme['txts'][gCurrLine].font = gMemeFont;
}

function printAt(context, text, x, y, lineHeight, fitWidth, maxLines) {

    fitWidth = fitWidth || 0;

    if (fitWidth <= 0) {
        context.fillText(text, x, y);
        return;
    }

    for (var idx = 1; idx <= text.length; idx++) {
        var str = text.substr(0, idx);
        if (context.measureText(str).width > fitWidth) {
            maxLines--;
            gLinesCount++;

            context.fillText(text.substr(0, idx - 1), x, y);
            context.strokeText(text.substr(0, idx - 1), x, y);

            if (!maxLines) return;
            printAt(context, text.substr(idx - 1), x, y + lineHeight, lineHeight, fitWidth, maxLines);
            return;
        }
    }
    context.fillText(text, x, y);
    context.strokeText(text, x, y);

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
    gCurrMeme['txts'].splice(gCurrLine, 1)
    gMaxLines--;
    gCurrLine = gMaxLines;
    renderCanvas();
}