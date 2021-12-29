const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, '../dist'),
        compress: true,
        port: 5000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};
