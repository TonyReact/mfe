const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN; // переменная окружения, которую нужно настроить с помощью CI/CD

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js' // каждый раз при создании новых файлов в режиме разработки из название будет соответствовать данному шаблону
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
};

module.exports = merge(commonConfig, prodConfig);