import './style.css'

import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo('/');

import { Tem_admin } from './js/admin/tem_admin';
import about from './view/about.html?raw';
import contacts from './view/contact.html?raw';
import { view_cart } from './js/cart';
import { homepage } from './js/home';
import { shoppage } from './js/shop';
import Home from './js/manager';
import admin from './js/admin/manager';

// import admin from './js/admin/manager';

router.on('/', function () {
    homepage();
    Home.inNer();
    // Home.view_product_index();

}).on('/shop', function () {
    shoppage();
    Home.inNer();
    // Home.view_category();
    // Home.view_product_category();
    // Home.view_products();
}).on('/cart', function () {
    view_cart();
}).on('/about', function () {
    document.querySelector(".Template").innerHTML = about;
}).on('/contact', function () {
    document.querySelector(".Template").innerHTML = contacts;
}).on('/admin/index', function () {
    Tem_admin();
    admin.inNer_admin();

});
router.resolve();
