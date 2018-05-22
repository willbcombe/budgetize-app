//entry point? where do we start
    //node stuff expose an object to another file
    const path = require('path');
    
    module.exports = {
        entry: './src/app.js',
        output: {
            //absolute path to output from entry
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        //look up module documentation on webpack
        module:{
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/, //checks if file ends w/ .js !!!!! 
                exclude: /node_modules/
            },{
                test: /\.s?css$/, //check if file ends with scss or css
                use: [ //allows array of loaders
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        //source map check documentaion on webpack
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'), 
            historyApiFallback: true
        }
    };
    //where do we output? 