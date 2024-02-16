const fs = require('fs');
const zlib = require('zlib');

;(async () => {

  const readStream = fs.createReadStream(
      __dirname + '/data/input-number.txt',
      { encoding: 'utf8' })
  const writeStream = fs.createWriteStream(
      __dirname + '/data/output-number.gz',
      { encoding: 'utf8' });

  const gzipTransform = zlib.createGzip();

  readStream.pipe(gzipTransform).pipe(writeStream)
})()
