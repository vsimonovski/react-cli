const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const chalk = require('chalk');
const replace = require('replace-in-file');

// const mkDir = promisify(fs.mkdir);
// const copyFile = promisify(fs.copyFile);

const createDir = (fileName) => {
  fs.mkdirSync(fileName);
  console.log(`${chalk.green('create: ')}created directory: ${fileName}`);
};

const cpFile = (fileName, templateName, extension) => {
  fs.copyFileSync(
    path.join(__dirname, 'templates', templateName),
    path.join(fileName, `${fileName}.${extension}`)
  );

  console.log(
    `${chalk.green('create: ')}created: ${fileName}/${fileName}.${extension}`
  );
};

const replaceInFile = (fileName, templateName, extension) => {
  replace({
    files: path.join(fileName, `${fileName}.${extension}`),
    from: /Template/g,
    to: fileName,
  });
};

module.exports = {
  createDir: createDir,
  cpFile: cpFile,
  replaceInFile: replaceInFile,
};
