'use strict';

const bytenode = require('bytenode');
const fs = require('fs');
const v8 = require('v8');
const path = require('path');

v8.setFlagsFromString('--no-lazy');

const binPath = path.join(__dirname, 'electron.jsc');
const codePath = path.join(__dirname, 'electron.js');

if (!fs.existsSync(binPath)) {
  bytenode.compileFile(codePath, binPath);
}

require(binPath);
