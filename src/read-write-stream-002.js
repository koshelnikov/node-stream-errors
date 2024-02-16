const fs = require('fs');
const readline = require('readline');

const moveFile = async (inputFileName, outputFileName) => {
  const readStream = fs.createReadStream(__dirname + `/data/${inputFileName}`)
  const writeStream = fs.createWriteStream(__dirname + `/data/${outputFileName}`);

  const rl = readline.createInterface({
    input: readStream
  });

  for await (const chunk of rl) {
    const multiTwo = parseInt(chunk.trim()) * 2;

    writeStream.write(multiTwo.toString() + "\n")
  }

  readStream.close();
  writeStream.close();
}

moveFile('input-number.txt', 'output-number-002.txt')
