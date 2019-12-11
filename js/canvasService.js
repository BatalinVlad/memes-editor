let gCanvas;
let gCtx;
let gCanvasBgImg;

let gTextSize = 1;
let gLineUpOrDown = 0;


function getImgById(id) {
    return gImgs.find(img => img.id + '' === id);
}

function drawText(txt, x, y) {
    gCtx.save();
    gCtx.font = "30px Arial";
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
    gCtx.restore()
}

function setCanvasBgImg(elMemeImg) {
    var memeImgId = elMemeImg.getAttribute("data-id");
    gCanvasBgImg = getImgById(memeImgId);
}

function setTextSize(elTextSize) {
    gTextSize = elTextSize.value;
    renderCanvas();
}

function setTextColor(elTextColor) {
    debugger;
    gTextColor = elTextColor.value;
    gCurrMeme['txts'][0].color = gTextColor;
    renderCanvas();
}

function lineUp() {
    gLineUpOrDown -= 3;
    renderCanvas();
}

function lineDown() {
    gLineUpOrDown += 3;
    renderCanvas();
}