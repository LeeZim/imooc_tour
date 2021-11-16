import './main-nav.css'
import { data as main_nav_data } from './main-nav.json'
import { navInit, dropdownListInit } from 'js/utils'

navInit(main_nav_data, 'main-nav', 'main-nav-menu')

dropdownListInit(main_nav_data, 'main-nav', 'main-nav-menu', 'main-nav-menu-dList', 'dl', '<dt>全部</dt>', (menu) => {
    return `<dd><a href="javascript:">${menu}</a></dd>`
})