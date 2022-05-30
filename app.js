const express = require('express');
const path = require('path')
const app = express();
const tesseract = require('tesseract.js');
const request = require('request')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));
app.get('/', (req, res) => {
    // const { link } = req.body;
    // console.log(req.body);
    tesseract.recognize("C:/Users/IHSAN/Downloads/pic.png", "eng")
        .then(result => {
            console.log(result.data.text)
            return res.status(200).json({ msg: result.data.text })
        }).catch(err => {
            console.log(err.message)
            return res.status(200).json({ err: err.message })
        });
})
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/webcam.html'));
// })
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));