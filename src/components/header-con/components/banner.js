class CarouselGenerator {
    constructor(imgs, carouselId) {
        this._imgs = imgs;
        this._carousel = document.getElementById(carouselId);
        this._index = 1;
        this._timeCounter = null;
        this._init();
    }

    _init() {
        for (const url of this._imgs) {
            const img = new Image()
            img.src = require(`images/${url}`);
            this._carousel.appendChild(img)
        }
        const firstChild = this._carousel.firstElementChild.cloneNode(true)
        this._carousel.appendChild(firstChild)
    }

    _pageReset(index) {
        this._carousel.style.transition = 'none';
        this._carousel.style.transform = `translateX(${0 * index}%)`
        setTimeout(() => {
           this._carousel.style.transition = 'transform 0.5s linear 0s' 
        }, 500);
    }

    pageChange(index) {
        this._carousel.style.transform = `translateX(-${16.666 * index}%)`
    }

    startScroll() {
        const self = this
        if (this._timeCounter) return
        this._timeCounter = setInterval(() => {
            if (self._index == (self._imgs.length + 1)) self._index = 1
            if (self._index == self._imgs.length) {
                setTimeout(() => {
                    this._pageReset(0)
                }, 500);
            }
            self.pageChange(self._index)
            self._index++
        }, 2000)
    }

    stopScroll() {
        clearInterval(this._timeCounter)
        this._timeCounter = null
    }


}

export default CarouselGenerator