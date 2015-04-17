# through2-concat
simple concat stream with through2

## Installation
``` sh
npm install through2-concat --save
```

## Usage
``` javascript
var fs = require('fs');
var ts = require('through2-concat');

fs.createReadStream('package.json').pipe(ts(function(file, cb) {
  this.push(file.length+'');
  cb();
})).pipe(process.stdout);
```
