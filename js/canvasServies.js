let gCanvas;
let gCtx;
let gImg;

function uploadCanvasImg(elMemeImg) {
    var memeImgId = elMemeImg.getAttribute("data-id");
    var memeImg = getImgById(memeImgId)

    var canvasWidth = gCanvas.width;
    var canvasHeight = gCanvas.height;
    var imgToFill = new Image();
    imgToFill.src = memeImg.url;
    imgToFill.onload = (function () {
        var pattern = gCtx.createPattern(imgToFill, 'repeat');
        gCtx.fillStyle = pattern;
        gCtx.fillRect(0, 0, canvasWidth, canvasHeight);
    });
}

function renderMemeOnCanvas(meme) {
    renderInLine(meme.selectedTxtId , meme.txt);
}

function renderInLine(selectedId , txt) {
    debugger
    var linesIds = document.querySelectorAll('.text-input');
    for (var i = 0; i < linesIds.length; i++){
        var lineId = linesIds[i].getAttribute('data-id');
        if(lineId === selectedId) {
            drawText(txt , x , y)
        }
    }
}


function getImgById(id) {
    return gImgs.find(img => img.id + '' === id);
}

function drawText(txt, x, y) {
    gCtx.save();
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
    gCtx.restore()
}