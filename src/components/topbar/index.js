import './topbar.css' // 加载CSS
import { topnav as topbar_data } from './topbar.json'

// 顶部导航栏初始化
const topbarInit = (data) => {
    const topbar_nav = document.getElementById('topbar_nav')
    let html = ''
    for (const item of data) {
        html += `<li ${item.menuList ? ' class="topbar_nav_menu"' : ''}><a href="javascript:">${item.title}</a></li>`
    }
    topbar_nav.innerHTML = html
}

// 下拉菜单初始化
const topbarNavDropdownListInit = (data) => {
    const topbar_nav = document.getElementById('topbar_nav');
    topbar_nav.addEventListener('mouseover', (e) => {
        const li = e.target.parentNode
        const { className } = li
        if (className === 'topbar_nav_menu') {
            if (!li.children[1]) {
                const dList = document.createElement('ul');
                dList.className = 'topbar_nav_menu_dlist'
                const title = e.target.innerText;
                for (const item of data) {
                    if (item.title === title) {
                        dList.style.width = item.width
                        let html =''
                        for (const menu of item.menuList) {
                            html += `<li><a href="javascript:">${menu}</a></li>`
                        }
                        dList.innerHTML = html;
                    }
                }
                li.appendChild(dList)
                li.onmouseleave = () => {
                    if (li.children[1])
                    li.removeChild(li.children[1])
                }
            }
        }
    })
}

topbarInit(topbar_data);
topbarNavDropdownListInit(topbar_data);