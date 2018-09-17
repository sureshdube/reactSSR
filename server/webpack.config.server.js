 const path = require('path');
 const merge = require('webpack-merge');
 const baseConfig = require('./webpack.base');
 const webPackNodeExternals = require('webpack-node-externals')
const config = {
     // Inform webpack that we are building bundlejs for nodejs
     // and not for browser.
     target: 'node',

     // tell webpack the root file of our server application.
     entry: './src/index.js',

     //Tell wepack where to put the output file that is generated.

     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'build'),
     },
     externals : [webPackNodeExternals()] // this will not include library files in bundle.js file for server. This will improve performance at the start of applicatio
     
 }

 module.exports = merge(baseConfig,config);