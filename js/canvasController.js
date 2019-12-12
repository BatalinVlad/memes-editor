function renderCanvas() {
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
                gCtx.textAlign = memeTxtStyle.align;
                setFontSize(idx, memeTxtStyle);
                var font = memeTxtStyle.size;
                gCtx.font = font + 'px' + ' Arial';
                setLineHeight(idx, memeTxtStyle);
                gCtx.fillText(memeTxtStyle.line, gCanvas.width / 2, memeTxtStyle.height);
                setCurrLineBg(idx, memeTxtStyle)
                gMaxLines = idx;
            });
        } else { // if meme does not exist set defoult meme
            createMeme(gCanvasBgImg.id, 0, [{
                line: 'ADD TEXT HERE',
                size: 30,
                align: 'center',
                color: 'black',
                height: 50
            }, {
                line: 'ADD TEXT HERE',
                size: 30,
                align: 'center',
                color: 'black',
                height: 450
            }])
            renderCanvas();
        }
    });
}