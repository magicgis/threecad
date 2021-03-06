var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';

var devConfig = {
    entry: {
        home: ['./client/home', hotMiddlewareScript],
        example1: ['./client/example1', hotMiddlewareScript],
        example2: ['./client/example2', hotMiddlewareScript],
        example3: ['./client/example3', hotMiddlewareScript],
        example4: ['./client/example4', hotMiddlewareScript],
        example5: ['./client/example5', hotMiddlewareScript],
        example6: ['./client/example6', hotMiddlewareScript],
        example7: ['./client/example7', hotMiddlewareScript],
        example8: ['./client/example8', hotMiddlewareScript],
        example9: ['./client/example9', hotMiddlewareScript],
        example10: ['./client/example10', hotMiddlewareScript],
        example11: ['./client/example11', hotMiddlewareScript],
        example12: ['./client/example12', hotMiddlewareScript],
        example13: ['./client/example13', hotMiddlewareScript],
        example14: ['./client/example14', hotMiddlewareScript],
        example15: ['./client/example15', hotMiddlewareScript],
        example16: ['./client/example16', hotMiddlewareScript],
        example17: ['./client/example17', hotMiddlewareScript],
        example18: ['./client/example18', hotMiddlewareScript],
        example19: ['./client/example19', hotMiddlewareScript],
        example20: ['./client/example20', hotMiddlewareScript],
        example21: ['./client/example21', hotMiddlewareScript],
        example22: ['./client/example22', hotMiddlewareScript],
        example23: ['./client/example23', hotMiddlewareScript],
    },
    output: {
        filename: './[name]/bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.(png|jpg)$/,
            use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader?sourceMap',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: './[name]/bundle.js'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = devConfig;
