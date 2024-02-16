const fs = require('fs');
const { Transform } = require("stream");

const moveFile = async (inputFileName, outputFileName) => {
  const readStream = fs.createReadStream(__dirname + `/data/${inputFileName}`)
  const writeStream = fs.createWriteStream(__dirname + `/data/${outputFileName}`);

  const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const data = chunk.toString();

      // show error
      if (data.length > 17) {
        callback(null, data.toUpperCase());
      } else {
        callback('data is short')
      }
    },
  });

  readStream.pipe(uppercaseTransform).pipe(writeStream);
}

// TODO describe error catching
moveFile('input-string.txt', 'output-string.txt')
    .catch(e => console.log('123'))
// highWaterMark
