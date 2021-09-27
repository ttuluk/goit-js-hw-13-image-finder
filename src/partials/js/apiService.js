export default class fetchObject {
    constructor(BASE_URL, options) {
        this.BASE_URL = BASE_URL;
        this.options = options;
        this._query = "";
        this._page = 1;
        this.perPage = 12;
        this.type = 'photo';
        this.orientation = 'horizontal';
        
    };
  get query() {
    return this._query
    };
  set query(value) {
    return (this._query = value)
    };
    incrimentPage() {
        return this._page += 1;
}
    resetPage() {
        this._page = 1;
    }

        getFetchBySubmit(formRef, cardRef, callback) {
            formRef.addEventListener('submit', ((e) => {
                e.preventDefault();

                this._query = e.target.elements.query.value;
                this.resetPage();
                cardRef.innerHTML = '';

                let params = `&image_type=${this.type}&orientation=${this.orientation}&q=${this._query}&page=${this._page}&per_page=${this.perPage}`;
                let url = this.BASE_URL + this.options + params;
                
                fetch(url).then((response) => { return response.json() }).then((data) => {
                    return data.hits;
                }).then((ar) => {
                    const result = ar.map((elem) => {
                        return callback(elem);
                    })
                    return cardRef.insertAdjacentHTML('beforeend', result);
                }).catch((err) => console.log('error')).finally(() => {
                    formRef.reset();
                })
            }))
        }

        getFetchByClick(btnRef, cardRef, callback) {
            btnRef.addEventListener('click', (() => {
                let params = `&image_type=${this.type}&orientation=${this.orientation}&q=${this._query}&page=${this._page}&per_page=${this.perPage}`;
                let url = this.BASE_URL +  this.options + params;
                fetch(url).then((response) => { return response.json() }).then((data) => {
                    this.incrimentPage();
                    return data.hits;
                }).then((ar) => {
                    const result = ar.map((elem) => {
                        return callback(elem);
                    })
                    console.log();
                    return cardRef.insertAdjacentHTML('beforeend', result);
                }).catch((err) => console.log('error')).finally(() => {
                    const element = cardRef.firstElementChild;
                    element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
                })
            }
            ))
    }
    }

