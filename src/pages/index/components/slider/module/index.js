/*
 * @Author: your name
 * @Date: 2021-11-17 11:03:45
 * @LastEditTime: 2021-11-17 13:45:53
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \imooc_tour\src\pages\index\components\slider\module\index.js
 */
import BaseSlider from "./base.js";

const el = document.getElementsByClassName('slider')[0]
new BaseSlider(el, {
    initialIndex: 0,
    autoplay: 2000,
    speed: 500,
    animation: true
})