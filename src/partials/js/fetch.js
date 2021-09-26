export default class fetchObject {
    constructor(BASE_URL, ednPoint) {
        this.BASE_URL = BASE_URL;
        this.ednPoint = ednPoint;
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

    get page() {
      console.log(this._page);
    return this._page
    };
    set page(value) {
      return this._page = value;
    };
    
        getFetchBySubmit(formRef, cardRef, callback) {
            formRef.addEventListener('submit', ((e) => {
                e.preventDefault();
                this._query = e.target.elements.query.value;
                let params = `&q=${this._query}&image_type=${this.type}&orientation=${this.orientation}&page=${this._page}&per_page=${this.perPage}`;
                let url = this.BASE_URL + this.ednPoint + params;
                // console.log(url);
                fetch(url).then((response) => { return response.json() }).then((data) => {
                    return data.hits;
                }).then((ar) => {
                    const result = ar.map((elem) => {
                        return callback(elem);
                    })
                    return cardRef.innerHTML = result;
                }).catch((err) => console.log('error')).finally(() => formRef.reset)
            }))
        }

        getFetchByClick(btnRef, cardRef, callback) {
            btnRef.addEventListener('click', (() => {
                this._page += 1;
                let params = `&q=${this._query}&image_type=${this.type}&orientation=${this.orientation}&page=${this._page}&per_page=${this.perPage}`;
                let url = this.BASE_URL + this.ednPoint + params;
                fetch(url).then((response) => { return response.json() }).then((data) => {
                    return data.hits;
                }).then((ar) => {
                    const result = ar.map((elem) => {
                        return callback(elem);
                    })
                    return cardRef.innerHTML = result;
                }).catch((err) => console.log('error').finally((e) => {e[0].scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});}))
            }
            ))
        }
    }

