// import galerryCard from '../../templates/image-card.hbs';
// import form from '../templates/form-search.hbs';
console.log(form);

import getRefs from './get-refs.js';
const refs = getRefs();
console.log(refs.btnLoadMore);
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
let type = 'photo';
let orientation = 'horizontal';
let page = 1;
let perPage = 12;

// let params = `?image_type${type}&orientation=${orientation}&q=${value}&page=${page}&per_page=${perPage}&key=${API_KEY}`;


// refs.formContainer.insertAdjacentHTML('beforebegin', form);

refs.btnLoadMore.addEventListener('click', getFetch);

function getFetch (e) {
    console.log(e);
    page += 1;
    let params = `?key=${API_KEY}&q=${value}&image_type=${type}&orientation=${orientation}&page=${page}&per_page=${perPage}`;
    let url = BASE_URL + params;
    fetch(url).then((response) => { return response.json() }).then((data) => {
        console.log(data);
    });
};