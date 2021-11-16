import './topbar.css' // 加载CSS
import { data as topbar_data } from './topbar.json'
import { navInit, dropdownListInit } from 'js/utils'

// 顶部导航栏初始化
navInit(topbar_data, 'topbar_nav', 'topbar_nav_menu');

// 下拉菜单初始化
dropdownListInit(topbar_data , 'topbar_nav', 'topbar_nav_menu', 'topbar_nav_menu_dlist', 'ul','', (menu) => {
    return `<li><a href="javascript:">${menu}</a></li>`
});