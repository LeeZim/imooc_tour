function BannerGenerator () {
    this.dX = -16.666;
    this.carousel = document.getElementById('carousel');
    this.imgNum = this.carousel.children.length;
    this.n = 0;
    this.lock = true;
    this.init();
}

BannerGenerator.prototype.init = function () {
    var firstImg = carousel.firstElementChild.cloneNode(true);
    this.carousel.appendChild(firstImg); 
    this.imgNum = this.carousel.children.length;
}

BannerGenerator.prototype.locateReset = function (n) {  
    this.carousel.style.transition = 'none';
    this.carousel.style.transform = `translateX(${this.dX * n}%)` 
    
}

BannerGenerator.prototype.scrollHandler = function (n) {   
    if (this.lock) {
        this.lock = false
        var self = this;
        
        this.carousel.style.transition = 'transform 0.5s linear 0s'

        this.carousel.style.transform = `translateX(${this.dX * (n + 1)}%)`

        if (n == this.imgNum - 2) {
            setTimeout(() => {
                self.locateReset(0);
            }, 500);
            this.n = 0
        }

        // 节流锁
        setTimeout(() => {
            self.lock = true
        }, 500);
    }
    
}

window.onload = () => {
    var banner = new BannerGenerator()
    var bannerInterval = setInterval(() => {
        banner.scrollHandler(banner.n++);
    }, 2000);

    function bannerStop() {
        clearInterval(bannerInterval)
    }

    function bannerStart() {
        bannerInterval = setInterval(() => {
            banner.scrollHandler(banner.n++);
        }, 2000);
    }

    var leftBtn = document.getElementsByClassName('page_left')[0];

    var rightBtn = document.getElementsByClassName('page_right')[0];

    leftBtn.onmouseenter = bannerStop;
    rightBtn.onmouseenter = bannerStop;
    leftBtn.onmouseleave = bannerStart;
    rightBtn.onmouseleave = bannerStart;

    leftBtn.onclick = function () {
        if (banner.n == 0) {
            banner.locateReset(banner.imgNum - 2);
            banner.n = 5; 
        }
        setTimeout(() => {
            banner.scrollHandler(banner.n--);
        }, 0);

        console.log(banner.n)
    }

}
