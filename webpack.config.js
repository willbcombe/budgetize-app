//entry point? where do we start
    //node stuff expose an object to another file
    const path = require('path');
    const ExtractTextPlugin = require ('extract-text-webpack-plugin');
    //gunna return and export a function that returns webpack config object
    module.exports = (env) => {
        const isProduction = env === 'production';
        const CSSExtract = new ExtractTextPlugin('styles.css');
    console.log ('env', env)
    return {
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
                //array of loaders
                use:  CSSExtract.extract({
                    use:[
                        {
                            loader: 'css-loader',
                            options: {
                              sourceMap: true
                            }
                          },
                          {
                            loader: 'sass-loader',
                            options: {
                              sourceMap: true
                            }
                          }
                    ]
                })   
            }]
        },
        plugins: [
            CSSExtract
        ],
        //source map check documentaion on webpack
        devtool: isProduction ?  'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'), 
            historyApiFallback: true
        }
    };
    };
    //where do we output? 