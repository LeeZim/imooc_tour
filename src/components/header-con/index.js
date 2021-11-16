import './header-con.css'
import header_con_data from './header-con.json'
import CarouselGenerator from './components/banner'
import './components/banner-cover'

const { imgs } = header_con_data;
const carousel = new CarouselGenerator(imgs, 'carousel')
carousel.startScroll()