
import galerryCard from '../templates/image-card.hbs';

import getRefs from './get-refs.js';
const refs = getRefs();

import FetchObject from './apiService'

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '23526463-69d460dc9366e545ff49935bb';
const options = `?key=${API_KEY}`;

const card = refs.cardContainer;
const form = refs.formContainer;
const btn = refs.btnLoadMore;

const myFetch = new FetchObject(BASE_URL, options);

myFetch.getFetchBySubmit(form, card, galerryCard);
myFetch.getFetchByClick(btn, card, galerryCard);

