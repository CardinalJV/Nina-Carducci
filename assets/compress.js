const zlib = require('zlib');
const fs = require('fs');

const compressFile = (inputFilePath, outputFilePath) => {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);

  console.log('File compressed successfully.');
};

// Utilisation de la fonction de compression
const inputFilePath = '/Users/jessyviranaiken/Desktop/Desktop/Formation/Open-classrooms/Projet-5-Nina_Carducci/Code/assets/bootstrap/bootstrap.min.css.map';
const outputFilePath = '/Users/jessyviranaiken/Desktop/Desktop/Formation/Open-classrooms/Projet-5-Nina_Carducci/Code/assets/bootstrap/6';

compressFile(inputFilePath, outputFilePath);