export default class fetchObject {
    constructor(BASE_URL, ednPoint) {
        this.BASE_URL = BASE_URL
        this.ednPoint = ednPoint
        // this.options = options
        this._query = "";
        this._page = 1;
        this.perPage = 12;
        this.type = 'photo';
        this.orientation = 'horizontal';
        
    }
  get query() {
    return this._query
  }
  set query(value) {
    return (this._query = value)
  }

  get page() {
    return this._page
  }
  set page(value) {
    return (this._page += value)
        }
        
        getFetchBySubmit(form, card, callback) {
            form.addEventListener('submit', ((e) => {
                e.preventDefault();
                this._query = e.target.elements.query.value;
                let params = `&q=${this._query}&image_type=${this.type}&orientation=${this.orientation}&per_page=${this.perPage}&page=${this._page}`;
                let url = this.BASE_URL + this.ednPoint + params;
                // console.log(url);
                fetch(url).then((response) => { return response.json() }).then((data) => {
                    return data.hits;
                }).then((ar) => {
                    const result = ar.map((elem) => {
                        return callback(elem);
                    })
                    return card.innerHTML = result;
                })
            }))
        }

        getFetchByClick() {
            refs.btnLoadMore.addEventListener('click', ((e) => {
                page += 1;
                console.log(page);
                let params = `&q=${this.value}&image_type=${type}&orientation=${orientation}&per_page=${this.perPage}&page=${this.page}`;
                let url = BASE_URL + endPoint + params;
                fetch(url).then((response) => { return response.json() }).then((data) => {
                    return data.hits
                }).then((ar) => {
                    const result = ar.map((elem) => {
                        return refs.cardContainer.innerHTML = galerryCard(elem)
                    })
                    return refs.cardContainer.innerHTML = result;
                })
            }
            ))
        }
    }

