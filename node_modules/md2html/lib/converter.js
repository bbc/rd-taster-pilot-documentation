
var path = require('path'),
  fs = require('fs'),
  markdown = require('markdown'),
  jade = require('jade');


var TMPL_FILE = path.join(__dirname, './tmpl.jade');
var template;

var styles = [
  // https://github.com/jasonm23/markdown-css-themes
  'http://jasonm23.github.com/markdown-css-themes/swiss.css'
];
var scripts = [];

function compileTemplate(opts) {
  var tmplstr = fs.readFileSync(TMPL_FILE, 'utf-8');
  template = jade.compile(tmplstr, opts);
}

// make static html page
function convertToStaticHtml(file, output) {
  // TODO
}

// markdown will be converted at html page
function convertToDynamicHtml(opts) {
  // https://github.com/evilstreak/markdown-js
  scripts.push('https://raw.github.com/evilstreak/markdown-js/master/lib/markdown.js');

  var mdstr = fs.readFileSync(opts.input, 'utf-8');

  var html = template({
    scripts: scripts,
    styles: styles,
    mdstr: mdstr,
    pretty: opts.pretty
  });

  convert(opts.output, html);
}

function convert(output, html) {
  fs.writeFile(output, html, function (err) {
    if (err) throw err;
    console.log("Completed! '%s' is created.", output);
  });
}

module.exports = {
  compile: function (opts) {
    compileTemplate(opts);
    return this;
  },

  convert: function (opts) {
    console.log('Converting...');

    if (opts.static) {
      convertToStaticHtml(opts);
    } else {
      convertToDynamicHtml(opts);
    }

    return this
  }
};