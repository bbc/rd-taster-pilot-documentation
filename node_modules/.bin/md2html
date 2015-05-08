#!/usr/bin/env node

var path = require('path'),
  program = require('commander'),
  converter = require('./converter');


var input, output;

program
  .version('0.1.0')
  .usage('md2html -f <file> [options]')
  .option('-f, --file <file>', 'markdown file to convert')
  .option('-o, --output [file]', 'html file to render')
  .option('-p, --pretty', 'prettify html')
  .parse(process.argv);


// Exit if markdown file is empty
if ( ! program.file) {
  program.help();
  process.ext(1);
}

input = program.file;
output = program.output || input.replace(/(\.)(md|markdown)$/i, '$1html');

console.log("Convert '%s' to '%s'.", input, output);

converter
  .compile({
    pretty: program.pretty
  })
  .convert({
    input: path.join(process.cwd(), input),
    output: path.join(process.cwd(), output),
    pretty: program.pretty
  });

module.exports = {};