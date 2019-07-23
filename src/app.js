import express from 'express';

import { version } from '../package.json';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// read port from command line (npm start)
const args = process.argv[2] || 3000;
const server = app.listen(args, () => {
  const host = server.address().address;
  const port = server.address().port;
  if (process.env.NODE_ENV !== 'test') {
    console.log(version);
    console.log('Example app listening at http://%s:%s', host, port);
  }
});

process.on('uncaughtException', (err) => {
  console.log('process.on handler');
  console.log(err);
});

export default app;