//             webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок

import galerryCard from '../templates/image-card.hbs';

import getRefs from './get-refs.js';
const refs = getRefs();

import FetchObject from './fetch'
// console.log(refs.btnLoadMore);
// console.dir(refs.formContainer);
// console.log(refs.cardContainer);
// https://pixabay.com/api/
// ?image_type = photo
//     &orientation=horizontal
//     &q=что_искать
//     &page=номер_страницы
//     &per_page=12
//         &key=твой_ключ

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '23526463-69d460dc9366e545ff49935bb';
const endPoint = `?key=${API_KEY}`;
const options = {
    headers: {
        Autorization: API_KEY,
    }
};
const card = refs.cardContainer;
const form = refs.formContainer;


const myFetch = new FetchObject(BASE_URL, endPoint);
console.log(myFetch);
myFetch.getFetchBySubmit(form, card, galerryCard);

