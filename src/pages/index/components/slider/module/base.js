import { ELEMENT_NODE_TYPE, SLIDER_ANIMATION_CLASS_NAME } from './constants.js'
import DEFAULTS from './defaults.js'  


class BaseSlider {
    // el: 幻灯片的父容器
    // options: 用户的参数
    constructor(el, options) {
        if (el.nodeType != ELEMENT_NODE_TYPE) throw new Error('el is not a dom element!!')

        this.options = {
            ...DEFAULTS,
            ...options
        }

        const sliderEl = el;
        const sliderContentEl = sliderEl.querySelector('.slider-content');
        sliderContentEl.appendChild(sliderContentEl.firstElementChild.cloneNode(true))
        const sliderItemEls = sliderContentEl.querySelectorAll('.slider-item')

        // 添加到 this 上，为了在方法中使用
        this.sliderEL = sliderEl;
        this.sliderContentEl = sliderContentEl;
        this.sliderItemEls = sliderItemEls;

        this.minIndex = 0;
        this.maxIndex = sliderItemEls.length - 1;
        this.currIndex = this._getCorrectedIndex(this.options.initialIndex)


        // 获取每一个 sliderItem 的宽度（每次移动的距离）
        this.itemWidth = 100 / sliderItemEls.length;

        this._init();
    }

    // 初始化
    _init() {
        // 为每个 slider-item 设置宽度
        this._setItemsWidth();

        // 为 slider-content 设置宽度
        this._setContentWidth();

        // 切换到初试索引 initialIndex
        this._move(this._getDistance(this.currIndex))

        // 开启动画
        if (this.options.animation) {
            this._openAnimation()
        }

        // 自动切换
        if (this.options.autoplay) {
            this._autoPlay()
        }
    }

    // 自动切换
    _autoPlay() {
        const { autoplay } = this.options; 
        if (autoplay <= 0) return
        this._pauseAutoPlay()
        this._autoplayTimer = setInterval(() => {
            this._next()
        }, autoplay)
    }

    // 暂停自动切换
    _pauseAutoPlay() {
        clearInterval(this._autoplayTimer)
    }

    // 切换下一张
    _next() {
        if (this.currIndex == (this.sliderItemEls.length - 1)) {
            this._move(0)
            this._to(this.currIndex + 2)
        } else {
            this._to(this.currIndex + 1)
        }
    }

    // 切换上一张
    _pre() {
        this._to(this.currIndex - 1)
    }

    // 切换到对应幻灯片
    _to(index) {
        index = this._getCorrectedIndex(index);
        if (this.currIndex == index) return
        this.currIndex = index;
        const distance = this._getDistance(this.currIndex)

        const { animation } = this.options
        if (animation) {
            this._moveWithAnimation(distance)
        }else {
            this._move(distance)
        }
    }

    // 开启动画
    _openAnimation() {
        this.sliderContentEl.classList.add(SLIDER_ANIMATION_CLASS_NAME)
    }

    // 设置切换速度
    _setAnimationSpeed(speed = this.options.speed) {
        this.sliderContentEl.style.transitionDuration = `${speed}ms`;
    }

    // 关闭动画 
    _closeAnimation() {
        this._setAnimationSpeed(0)
    }

    // 带动画移动
    _moveWithAnimation(index) {
        this._setAnimationSpeed();
        this._move(index)
        this.sliderContentEl.addEventListener('transitionend', () => {
            this._closeAnimation()
        })
    }

    // 获取移动的距离
    _getDistance(index) {
        return -this.itemWidth * index
    }

    // 无动画切换
    _move(index) {
        this.sliderContentEl.style.transform = `translateX(${index}%)`
    }

    // 获取修正后的索引值
    _getCorrectedIndex(index) {
        // 为了能循环播放，索引值小于最小值返回最大值，大于最大值返回最小值
        if (index < this.minIndex) return this.maxIndex
        if (index > this.maxIndex) return this.minIndex
        return index
    }

    // 为每个 slider-item 设置宽度
    _setItemsWidth() {
        for (const item of this.sliderItemEls) {
            item.style.width = `${this.itemWidth}%`
        }
    }

    // 为 slider-content 设置宽度
    _setContentWidth() {
        this.sliderContentEl.style.width = `${ 100 * this.sliderItemEls.length }%`
    }

}

export default BaseSlider