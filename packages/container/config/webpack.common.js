const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // считывай все файлы, заканчивающиеся на mjs или js
                exclude: /node_modules/, // не учитывай папки node_modules
                use: {
                    loader: 'babel-loader', // используй реактовский загрузчик
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'], //обработка jsx кода, трансформация кода в стандарт ES5
                        plugins: ['@babel/plugin-transform-runtime'] // добавление коду возможности использования async await и тд
                    }
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html' // где искать файл для работы изолировано
        }),
    ]
};
