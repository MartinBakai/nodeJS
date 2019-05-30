//FS - FileSystem Module
var fs = require('fs');

fs.readFile('files/log.txt', 'utf-8', (err, data) => {
    if (err){
        return console.error(err);
    }
    console.log('Read File: ', data);
});

let logContent = fs.readFileSync('files/log.txt', 'utf-8');
console.log('read Fie Sync: ', logContent);

// Read directory

fs.readdir('files', (err, files) => {
    if (err){
        console.error(err);
    }
    console.log('Files in folder: ', files);
});