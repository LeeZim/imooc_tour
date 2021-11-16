import './banner-cover.css'
import banner_cover_data from './banner-cover.json'

const { data } = banner_cover_data
const bannerList = document.getElementById('banner-cover-list')
for (const item of data) {
    const li = document.createElement('li')
    li.style.maxHeight = `16.6667%`
    li.style.height = `${100 / data.length}%`
    let liIcon = document.createElement('div')
    liIcon.className = 'banner-list-icon'
    liIcon.style.backgroundPosition = `${item.sprite[0]} ${item.sprite[1]}`
    li.appendChild(liIcon)
    const dl = document.createElement('dl')
    dl.innerHTML = `<dt>${item.dt}</dt>`
    for (const dd of item.dd) {
        dl.innerHTML += `<dd>${dd}</dd>`
    }
    li.appendChild(dl)
    const afterArrow = document.createElement('div')
    afterArrow.className = 'afterArrow'
    li.appendChild(afterArrow)
    bannerList.appendChild(li)
}