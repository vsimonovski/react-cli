const fs = require('fs');
const path = require('path');

const chalk = require('chalk');
const replace = require('replace-in-file');

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

const handleBase = (fileName) => {
  cpFile(fileName, 'Template.js', 'js');
  replaceInFile(fileName, 'Template.js', 'js');
};

const handleSb = (fileName) => {
  cpFile(fileName, 'Template.stories.js', 'stories.js');
  cpFile(fileName, 'Template.stories.mdx', 'stories.mdx');
  replaceInFile(fileName, 'Template.stories.js', 'stories.js');
  replaceInFile(fileName, 'Template.stories.mdx', 'stories.mdx');
};

module.exports = {
  createDir: createDir,
  cpFile: cpFile,
  replaceInFile: replaceInFile,
  handleBase: handleBase,
  handleSb: handleSb
};
