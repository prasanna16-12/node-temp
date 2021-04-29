// async fs

const { readFile, writeFile } = require('fs');

const copy_paste = (source, destination) => {
    readFile(source, 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        
        writeFile(destination, result, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('content copy pasted !');
        });
    });
}

console.log('copy paste started');
copy_paste('./Async-file-system/content.txt', './Async-file-system/paste.txt');
console.log('next user cpoying');

/* 
copy paste started
next user cpoying
content copy pasted! 
*/

