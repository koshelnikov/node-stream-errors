const { stdin, stdout } = require('process')

stdin.on('data', (chunk) => {

    if (chunk.toString().trim().toLowerCase() === 'exit') {
        stdout.write('Goodbye!\n')
        stdin.destroy();
    }
    stdout.write(`Bot: ${chunk}`)
})

