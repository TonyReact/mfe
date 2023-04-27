const {merge} = require('webpack-merge'); // объединить
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin'); // объявляю плагин
const commonConfig = require('./webpack.common'); // файл, с которым будем объединять
const packageJson = require('../package.json') // зависимости

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081, // порт для разработки изолированно
    },
    plugins: [
        new ModuleFederationPlugin ({
            name: 'marketing', // фактически имя переменной, из которой берутся данные ремоутЕнтри
            filename: 'remoteEntry.js', // файл, который делаю доступным остальным
            exposes: {
                './MarketingApp': './src/bootstrap' //когда в компоненте вызывается МаркетнгАпп путь - передай ссылку на файл
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