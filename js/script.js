// const tesseract = require('node-tesseract-ocr')
const tesseract = require('tesseract.js');

tesseract.recognize("js/tes2.jpeg", "eng")
    .then(result => {
        console.log(result.data.text)
    }).catch(err => {
        console.log(err.message)
    });