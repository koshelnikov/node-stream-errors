const express = require('express');
const crypto = require('crypto');
const { fork } = require('child_process');
const { Worker } = require('worker_threads');

const app = express();

app.get('/calc-hash/:count', (req, res) => {
  res.json(calcHashes(req.params.count));
})

app.get('/calc-hash-fork/:count', (req, res) => {
  const forkedProcess = fork(__dirname + '/013-fork-threads-hash-calc-fork.js');

  forkedProcess.send({ data: { count: req.params.count } });

  forkedProcess.on('message', (result) => {
      res.json(result);
  });

  forkedProcess.on('error', (error) => {
      res.status(500).json({ error });
  });
})

app.get('/calc-hash-thread/:count', async (req, res) => {
  const worker = new Worker(__dirname + '/013-fork-threads-hash-calc-thread.js');

  worker.postMessage({ data: { count: req.params.count } });

  worker.on('message', (result) => {
      res.json(result);
  });

  worker.on('error', (error) => {
    console.log(error);
  
      res.status(500).json({ error });
  });
});


app.get('/ping', (req, res) => {
  res.json({ msg: 'pong' });
})

app.listen(8888);

console.log('Server started on port 8888')

function calcHashes(count = 100) {
  console.time('calc-hash');

  const hashes = [];

  for (let i = 0; i < count; i++) {
    const randomStr = crypto.randomBytes(256).toString('hex')
  
    const hash = crypto.createHash('sha256');
    hash.update(randomStr);
    
    hashes.push(hash.digest('hex'));
  }
  
  console.timeEnd('calc-hash');

  return hashes;
}
