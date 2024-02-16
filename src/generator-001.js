const util = require('util');
const stream = require('stream');
const pipeline = util.promisify(stream.pipeline)
const fs = require('fs')

async function run() {
    await pipeline(
        fs.createReadStream(__dirname + '/data/input-string.txt'),
        async function* (source) {
            for await (const chunk of source) {
                yield String(chunk).toUpperCase()
            }
        },
        fs.createWriteStream(__dirname + '/data/output-string-generator.txt')
    )
    console.log('Pipeline succeeded.')
}

run().catch(console.error)