const path = require('path');
const fs = require('fs');
const directoryPath = path.resolve(process.argv[2]);
const chalk = require('chalk');
// const fileLinks = require('./index.js')
console.log(directoryPath)

//lee directorio, con callback y promesa
exports.dirContent = (directoryPath) => {
    return new Promise((resolve, reject) => {
        fs.readdir(directoryPath, function (error, data) {
            if (error) return reject(error);
            return resolve(data)
        })

    })
}

exports.dirContent(directoryPath)
    .then(data => {
        data.forEach(function (file) {
            if (path.extname(file) !== '.' + 'md') {
                console.log(chalk.yellow('No contiene archivos .md.'))
            } else {
                console.log(file)

            }

        })
    })
    .catch(error => console.log(chalk.redBright('No se puede leer la ruta. Por favor, introduzca la ruta de un directorio o archivo. ' + error)));