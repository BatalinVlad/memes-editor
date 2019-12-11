function renderCanvas() {
    var imgToFill = new Image();
    imgToFill.src = gCanvasBgImg.url;

    imgToFill.onload = (function () {
        var pattern = gCtx.createPattern(imgToFill, 'repeat');
        gCtx.fillStyle = pattern;
        gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
        var meme = getMemeById(gCanvasBgImg.id);
        debugger
        if (meme) {
            //if there is couple lines
            gCtx.fillStyle = meme['txts'][0].color;
            gCtx.align = meme['txts'][0].align;
            var font = meme['txts'][0].size * gTextSize + 'px' + ' Arial';
            gCtx.font = font;
            gCtx.fillText(meme['txts'][0].line, 50 , 50 + gLineUpOrDown );
            gCurrMeme = meme;
        } else {
            //if there is couple lines
            createMeme(gCanvasBgImg.id,0,[{
                line: 'ADD TEXT HERE',
                size: 30,
                align: 'center',
                color: 'black'
            }])
            gCtx.fillStyle = 'black';
            gCtx.align = 'center';
            gCtx.font = '30px Arial';
            gCtx.fillText('ADD TEXT HERE', 50 , 50 + gLineUpOrDown); 
            gCurrMeme = gMemes[gMemes.length - 1];
        }
    });
}