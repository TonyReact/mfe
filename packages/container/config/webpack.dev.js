const {merge} = require('webpack-merge'); // объединить
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // объявляю плагин
const commonConfig = require('./webpack.common'); // файл, с которым будем объединять
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080, // порт для разработки изолированно
    },
    plugins: [
        new ModuleFederationPlugin ({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js' // маркетинг в значении это имя в плагине Модульфедерации в маркетинг дериктории
            },
            shared: [
                packageJson.dependencies, // делимся зависимостями, чтобы нетворк не грузил то, что также фигурирует в другом микрофронтенде
            ]
        }),
        new HtmlWebpackPlugin ({
            template: './public/index.html' // где искать файл для работы изолировано
        }),
    ],
};

module.exports = merge(commonConfig, devConfig); // объединить характеристики с приоритетом devConfig