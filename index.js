var Prism = require('prismjs');

// The code snippet you want to highlight, as a string
var code = `
function helloworld() {
  if (true) {
    console.log('hello world')
  }
}    
`


// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.javascript, 'javascript');

console.log(html)

