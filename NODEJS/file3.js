// path demo

var path =require('path');
console.log(path.normalize('/foo/bar//baz/asdf/quux/../.'));
console.log(path.join('abc','/bcd/ghgh/..'));

console.log(path.dirname('/foo/bar/baz/asdf/quux.txt'));
console.log(path.basename('/foo/bar/baz/asfd/quux.html'));
console.log(path.extname('/a/b/index.html'));