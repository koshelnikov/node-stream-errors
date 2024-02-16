const pipeline = util.promisify(stream.pipeline)
async function run() {
    await pipeline(
        fs.createReadStream('archive.tar'),
        zlib.createGzip(),
        fs.createWriteStream('archive.tar.gz')
    )
    console.log('Pipeline succeeded.')
}
run().catch(console.error)

