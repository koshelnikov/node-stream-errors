const fs = require('fs');

const readFile_on_data = (name) => {
  const readStream = fs.createReadStream(__dirname + `/data/${name}`)
  let data = ''

  readStream.setEncoding('utf-8')

  readStream.on('data', function (chunk) {
    console.log('on_data', chunk.toString())
    data += chunk;
  });

  readStream.on('end', function () {
    console.log(`on_end\n${data}`);
  });

  readStream.on('error', function (err) {
    console.log(`on_error ${err.stack}`);
  });
}

const readFile_on_readable = (name) => {

  const readStream = fs.createReadStream(__dirname + `/data/${name}`)
  let data = ''

  readStream.setEncoding('UTF8')

  // data in stream -> readable -> read() -> null exit from while
  readStream.on('readable', function () {
    let data;

    while ((data = this.read()) !== null) {
      console.log(`on_readable ${data}`);
    }
  });

  readStream.on('end', function () {
    console.log(`on_end ${data}`);
  });

  readStream.on('error', function (err) {
    console.log(`on_error: ${err.stack}`);
  });
}

// readFile_on_data('input-number.txt')
// readFile_on_readable('input-number.txt')
// readFile_on_readable('input-empty.txt1')

console.log("Program Ended");
