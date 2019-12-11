function getRandomID() {
    var chars = '1234567890ABCDEF'
    var id = ''
    for (let i = 0; i < 4; i++) {
        id += chars[getRandomNumber(chars.length)]
    }
    return id;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}