const path = require("path");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
}

//npm init -y 
//npm instal --save-dev webpack webpack-cli style-loader css-loader html-webpack-plugin webpack-merge webpack-dev-server html-loader file-loader clean-webpack-plugin mini-css-extract-plugin  css-minimizer-webpack-plugin


//installs

//webpack
//webpack-cli
//style-loader
//css-loader
//html-webpack-plugin
//webpack-merge
//webpack-dev-server
//html-loader
//clean-webpack-plugin
//mini-css-extract-plugin
//css-minimizer-webpack-plugin