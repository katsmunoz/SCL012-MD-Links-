const fs = require('fs');
const path = require('path');
const processArgv = process.argv[2];
const markdownLink = require('markdown-link-extractor'); // libreria para extraer links de un documento
const pathAbsolute = path.resolve(processArgv); 
const chalk = require('chalk');

// Leer archivo y extraer links

const fileLinks = (pathAbsolute) => {
  return new Promise((resolve, reject) => {
    fs.readFile(pathAbsolute, 'utf8', (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  })
} 

fileLinks(pathAbsolute)
  .then(data => console.log(markdownLink(data)))
  .catch(error => console.log(chalk.red('El archivo no existe. Por favor, introduce una ruta de archivo válida. ' + error)));

module.exports = fileLinks;
