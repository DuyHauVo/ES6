import view_pro from '../view/shop_pro.html?raw';
import view_cate from '../view/category.html?raw';
import shop from '../view/shop.html?raw';
export function shoppage() {
    document.querySelector(".Template").innerHTML = shop;
    document.getElementById("app").innerHTML = view_cate;
    document.querySelector(".app").innerHTML = view_pro;
}