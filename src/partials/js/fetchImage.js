//             webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение (смотри пункт 'дополнительно')
// likes - количество лайков
// views - количество просмотров
// comments - количество комментариев
// downloads - количество загрузок

import galerryCard from '../templates/image-card.hbs';
// import form from '../templates/form-search.hbs';
console.log(form);

import getRefs from './get-refs.js';
const refs = getRefs();
console.log(refs.btnLoadMore);
console.dir(refs.formContainer);
console.log(refs.cardContainer);
// https://pixabay.com/api/
// ?image_type = photo
//     &orientation=horizontal
//     &q=что_искать
//     &page=номер_страницы
//     &per_page=12
//         &key=твой_ключ

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '23526463-69d460dc9366e545ff49935bb';

const options = {
    headers: {
        Autorization: API_KEY,
    }
};

let value = 'yellow+flowers';
const nameV = 'car';
let type = 'photo';
let orientation = 'horizontal';
let page = 1;
let perPage = 12;
refs.formContainer.addEventListener('submit', getValue);
refs.btnLoadMore.addEventListener('click', getFetch);

function getFetch() {
    page += 1;
    let params = `?key=${API_KEY}&q=${value}&image_type=${type}&orientation=${orientation}&page=${page}&per_page=${perPage}`;
    let url = BASE_URL + params;
    fetch(url).then((response) => { return response.json() }).then((data) => {
        return data.hits
    }).then((ar) => {
        const result = ar.map((elem) => {
            console.log(elem);
            console.log(galerryCard());
            return refs.cardContainer.innerHTML = galerryCard(elem)
        })
        return refs.cardContainer.innerHTML = result;
    })
}

function getValue(e) {
    console.log(e);
    e.preventDefault();
    page += 1;
    let params = `?key=${API_KEY}&q=${nameV}&image_type=${type}&orientation=${orientation}&page=${page}&per_page=${perPage}`;
    let url = BASE_URL + params;
    console.log(url);
    fetch(url).then((response) => { return response.json() }).then((data) => {
        return data.hits;
    }).then((ar) => {
       const result = ar.map((elem) => {
            console.log(elem);
            console.log(galerryCard());
            return   galerryCard(elem);
       })
        return refs.cardContainer.innerHTML = result;
    })
}
