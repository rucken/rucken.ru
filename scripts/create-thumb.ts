const recursive = require('recursive-readdir');
const Jimp = require('jimp');
const replaceExt = require('replace-ext');
recursive(
    './src/assets',
    [
        '!*.png',
        '*_thumb.png'
    ], (err, files) => {
        Promise.all(files.map(file => Jimp.read(file))).then(results => {
            results.forEach((result: any, index) =>
                result
                    .quality(60)
                    .resize(Jimp.AUTO, 200) // resize
                    .write(replaceExt(files[index], '_thumb.png'))
            );
        });
    });
