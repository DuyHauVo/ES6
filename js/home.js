import home_products from '../view/home_pro.html?raw';
import index from '../view/index.html?raw';
export function homepage() {
    document.querySelector(".Template").innerHTML = index;
    document.getElementById("app").innerHTML = home_products;
}