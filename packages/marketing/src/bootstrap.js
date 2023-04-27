import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (el) => { // функция для рендеринга контента в элемент ДОМ дерева
    ReactDOM.render( // рендеринг контента в элемент используя реакт ДОМ
        <App />,
        el
    );
};

if(process.env.NODE_ENV === 'development') { // если в режиме разработки
    const devRoot = document.querySelector('#_marketing-root'); // то создай в html документе элемент

    if(devRoot) { // если элемент по указанному айди существует, то закинь его в функцию
        mount(devRoot)
    }
}
export {mount} // для не разработки экспортируй функцию