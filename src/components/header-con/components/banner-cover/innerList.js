class InnerListGenerator {
    constructor(data, ulId) {
        this._data = data;
        this._container = document.getElementById(ulId)
    }

    _deleteChild() {
        let lastChild = this._container.lastElementChild
        while(lastChild) {
            this._container.removeChild(lastChild)
            lastChild = this._container.lastElementChild
        }
    }

    loadList(index) {
        if (this._indexTmp == index) return 
        this._deleteChild()
        this._indexTmp = index;
        const { dList } = this._data[index];
        for (const list of dList) {
            const li = document.createElement('li');
            const dl = document.createElement('dl');
            const dt = document.createElement('dt');
            dt.innerText = list.dt;
            dl.appendChild(dt);
            const { dd: ddList } = list;
            for (const dd of ddList) {
                const ddTxt = document.createElement('dd');
                ddTxt.innerHTML = `<a href="javascript:">${dd}</a>`;
                dl.appendChild(ddTxt);
            }
            li.appendChild(dl)
            this._container.appendChild(li)
        }
    }

    show() {
        this._container.style.display = 'block'
    }

    hidden() {
        this._container.style.display = 'none'
        this._deleteChild()
    }
}

export default InnerListGenerator