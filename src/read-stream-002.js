const fs = require('fs');

const readFileAsync = async (name) => {
  // 1

  const readStream = fs.createReadStream(
      __dirname + `/data/${name}`,
      {encoding: 'utf8'}
  )

  let data = ''

  for await (const chunk of readStream) {
    data += chunk
  }

  if (data) {
    console.log(data)
  }

}


// readFileAsync('input-number.txt')
// readFileAsync('input-empty.txt')
// readFileAsync('input-empty.txt1').catch(e => console.log(e))
