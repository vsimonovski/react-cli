const { program } = require('commander');
const chalk = require('chalk');
const {
  mkDir,
  copyFile,
  cpFile,
  replaceInFile,
  createDir,
} = require('./helpers');

const cli = (args) => {
  program
    .option('-d, --debug', 'output extra debugging')
    .option('-f --file-name <comp-name>');

  program.parse(args);

  if (program.debug) console.log(program.opts());

  if (program.fileName) {
    console.log(`${chalk.blue('info: ')}creating new directory...`);
    createDir(program.fileName);

    console.log(`${chalk.blue('info: ')}creating component files...`);
    cpFile(program.fileName, 'Template.js', 'js');
    cpFile(program.fileName, 'Template.style.js', 'style.js');
    cpFile(program.fileName, 'Template.stories.js', 'stories.js');
    cpFile(program.fileName, 'Template.stories.mdx', 'stories.mdx');

    replaceInFile(program.fileName, 'Template.js', 'js');
    replaceInFile(program.fileName, 'Template.stories.js', 'stories.js');
    replaceInFile(program.fileName, 'Template.stories.mdx', 'stories.mdx');
  }
};

module.exports.cli = cli;
