const fs = require('fs');

;(async () => {
  const readStream = fs.createReadStream(
      __dirname + '/data/input-number.txt',
      { encoding: 'utf8' }
  )

  const writeStream = fs.createWriteStream(
      __dirname + '/data/output-number.txt',
      { encoding: 'utf8' }
  );

  readStream.pipe(writeStream)
})()




