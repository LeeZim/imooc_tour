import './header-con.css'
import header_con_data from './header-con.json'
import CarouselGenerator from './components/banner'
import './components/banner-cover'
// import template from './header-con.art'

const { imgs } = header_con_data;
// const result = template({
//     imgs: imgs
// })
const carousel = new CarouselGenerator(imgs, 'carousel')
carousel.startScroll()

const banner = document.getElementById('banner-cover')
banner.onmouseenter = () => {
    carousel.stopScroll()
}
banner.onmouseleave = () => {
    carousel.startScroll()
} 