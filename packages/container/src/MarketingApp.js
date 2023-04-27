import React, {useRef, useEffect} from "react";
import {mount} from 'marketing/MarketingApp'

export default () => {
    const ref = useRef(null) // делаю ссылку на элемент контейнера

    useEffect(() => {
        mount(ref.current) // после первого рендеринга найдет ссылку и запустит маунт функцию
    })

    return <div ref={ref} /> // элемент, который передаст хуку свою ссылку после рендеринга
}