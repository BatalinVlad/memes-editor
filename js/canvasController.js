function renderCanvas(callback) {

    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

    var imgToFill = new Image();
    imgToFill.src = gCanvasBgImg.url;

    imgToFill.onload = (function () {
        var pattern = gCtx.createPattern(imgToFill, 'repeat');
        gCtx.fillStyle = pattern;
        gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
        var meme = getMemeById(gCanvasBgImg.id);
        if (meme) {
            gCurrMeme = meme;
            meme['txts'].forEach((memeTxtStyle, idx) => {
                gCtx.fillStyle = memeTxtStyle.color;
                gCtx.strokeStyle = memeTxtStyle.stroke;
                gCtx.textAlign = memeTxtStyle.align;
                setFontSize(idx, memeTxtStyle);
                var fontSize = memeTxtStyle.size;
                setLineHeight(idx, memeTxtStyle);
                setFontStyle();
                gCtx.font = fontSize + 'px ' + memeTxtStyle.font;
                printAt(gCtx, memeTxtStyle.line, memeTxtStyle.posX, memeTxtStyle.height, memeTxtStyle.size, gCanvas.width - 15, 3);
                if (!gIsSave && !gIsDownload) setCurrLineBg(idx, memeTxtStyle)
                gLinesCount = 1;
                gMaxLines = idx;
            });
        } else { // if meme does not exist set defoult meme
            createMeme(gCanvasBgImg.id, 0, [{
                line: 'ADD TEXT HERE',
                size: 40,
                align: 'center',
                color: 'white',
                stroke: 'black',
                font: 'Impact',
                posX: 250,
                height: 50
            }, {
                line: 'ADD TEXT HERE',
                size: 40,
                align: 'center',
                color: 'white',
                stroke: 'black',
                font: 'Impact',
                posX: 250,
                height: 450
            }])
            renderCanvas();
        }
        if (callback) {
            callback();
        }
    });
}

function saveMeme() {
    var image = gCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
    gSavedMemes.push(image);
    saveToStorage('saved memes', gSavedMemes);
    gIsSave = false;
    renderSavedMemes();
    renderCanvas();
}