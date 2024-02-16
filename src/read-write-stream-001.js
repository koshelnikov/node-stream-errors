const fs = require('fs');

const moveFile = async (inputFileName, outputFileName) => {
  const readStream = fs.createReadStream(__dirname + `/data/${inputFileName}`)
  const writeStream = fs.createWriteStream(__dirname + `/data/${outputFileName}`);

  for await (const chunk of readStream) {
    writeStream.write(chunk)
  }

  //writeStream.write('100\n')
}

moveFile('input-number.txt', 'output-number.txt')