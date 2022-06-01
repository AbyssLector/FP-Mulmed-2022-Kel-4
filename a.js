var txtInput;
var poggers;
const fs = require('fs');
var util  = require('util');

fs.readFile('aa.txt', 'utf-8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    txtInput = data;
});
console.log()
