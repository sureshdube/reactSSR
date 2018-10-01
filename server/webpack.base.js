module.exports={
    // Tell webpack to run babel on every file it runs through.
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
               presets: [
                'react',
                "es2015",
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