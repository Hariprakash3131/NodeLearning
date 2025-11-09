const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('myfile.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

// Events for readable streams
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(chunk);
});

