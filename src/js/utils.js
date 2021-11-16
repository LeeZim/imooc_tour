export const navInit = (data, ulId, liClass) => {
    const nav = document.getElementById(ulId)
    let html = ''
    for (const item of data) {
        html += `<li ${item.menuList ? `class=${liClass}` : '' }><a href="javascript:">${item.title}</a></li>`
    }
    nav.innerHTML = html
}

export const dropdownListInit = (data, ulId, liClass, dLiClass, listType, htmlTxt = '', htmlInit) => {
    const nav = document.getElementById(ulId);
    nav.addEventListener('mouseover', (e) => {
        const li = e.target.parentNode
        const { className } = li
        if (className === liClass) {
            if (!li.children[1]) {
                const dList = document.createElement(listType);
                dList.className = dLiClass
                const title = e.target.innerText;
                for (const item of data) {
                    if (item.title === title) {
                        dList.style.width = item.width
                        let html = htmlTxt 
                        for (const menu of item.menuList) {
                            html += htmlInit(menu)
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