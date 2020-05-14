const { program } = require('commander');
const chalk = require('chalk');
const { cpFile, createDir, handleSb, handleBase } = require('./helpers');

const cli = (args) => {
  // register CLI commands
  program
    .option(
      '-c --component <comp-name>',
      'generate component with storybook and styled components support'
    )
    .option(
      '-sb --storybook <comp-name>',
      'generate component with storybook support'
    )
    .option(
      '-sc --styled-component <comp-name>',
      'generate component with styled component support'
    );

  program.parse(args);

  // common action for all commands
  if (program.component || program.storybook || program.styledComponent) {
    console.log(`${chalk.blue('info: ')}creating new directory...`);
    createDir(
      program.component || program.storybook || program.styledComponent
    );
    console.log(`${chalk.blue('info: ')}creating component files...`);
    handleBase(
      program.component || program.storybook || program.styledComponent
    );
  }

  // in case that component option is active or all options are active
  if (
    program.component ||
    (program.component && program.storybook && program.styledComponent)
  ) {
    cpFile(program.component, 'Template.style.js', 'style.js');
    handleSb(program.component);
    // in case that storybook option is active
  } else if (program.storybook) {
    handleSb(program.storybook);
    // in case that styled component option is active
  } else if (program.styledComponent) {
    cpFile(program.styledComponent, 'Template.style.js', 'style.js');
    // if no options are present show help screen
  } else {
    console.log(`${chalk.red('err: ')}invalid usage`);
    program.help();
  }
};

module.exports.cli = cli;
