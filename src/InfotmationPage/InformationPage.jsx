import React from 'react';
import style from './InformationPage.module.css'

type IconType = {
    id: number,
    title: string,
    icon: string
}


const InformationPage = (props: IconType) => {
    const Items = [
        {id: 1, title: 'О бибилиотеке', icon: ''},
        {id:2, title: 'Мероприятия', icon: ''},
        {id: 3, title: 'Проекты', icon: ''},
        {id: 4, title: 'Услуги', icon: ''},
        {id: 5, title: 'Краеведение', icon: ''},
        {id: 6, title: 'продление книг онлайн', icon: ''},
        {id: 7, title: 'Книга отзывов и предложений', icon: ''},
        {id: 8, title: 'Ораниенбаумский хронограф', icon: ''},

    ]


    return (
        <div>
            <h1>информация и сервисы</h1>
        </div>
    );
};

export default InformationPage;