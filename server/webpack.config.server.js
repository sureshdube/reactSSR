 const path = require('path');
 module.exports = {
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

     // Tell webpack to run babel on every file it runs through.
     module: {
         rules: [{
             test: /\.js?$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             options: {
                presets: [
                     'react',
                     'stage-0',
                     ['env', {
                         targets: {
                             browsers: ['last 2 versions']
                         }
                     }]
                 ] // stage-0 for async call
             }
         }]
     }

 }