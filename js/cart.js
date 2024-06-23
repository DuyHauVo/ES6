import cart from '../view/view_cart.html?raw';
export function view_cart() {
    document.querySelector(".Template").innerHTML = cart;
}