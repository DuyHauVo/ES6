// import { Alert } from "bootstrap";

var cart = [];
var result = [];
let pro_cate = [];
class HOME {
    //view danh mục 
    async view_category() {
        let ender = document.querySelector('.build-category')
        // console.log(ender);
        let category = await result.categories
        // console.log( );
        category.forEach(item_cate => {
            ender.innerHTML += `<li> <a href="#" data-id = ${item_cate.id} class="btn_cate"> ${item_cate.name}</a> </li>`;
        });
        this.set_id()
    }
    //lấy id cate
    set_id() {
        let btn_cate = document.querySelectorAll('.btn_cate');
        // console.log(btn_cate);
        for (let i = 0; i < btn_cate.length; i++) {
            btn_cate[i].addEventListener('click', (e) => this.show_cate(e))
            // console.log(i);
            // console.log(btn_cate[i]);
        }
    }
    //show sản phẩm theo danh mục 
    show_cate(e) {
        // console.log(e.target);
        let id_cate = e.target.dataset.id
        id_cate = Number(id_cate, 10);
        // console.log(id_cate);
        let products_cate = pro_cate.filter(item_products => item_products.cate_id === id_cate)
        // console.log(products_cate);           
        document.querySelector(".sanpham").innerHTML = '';
        products_cate.forEach(item_pro => {
            // console.log(item_pro);
            // console.log(show);      
            document.querySelector(".sanpham").innerHTML += `<div class="col-lg-4 col-md-4 col-12">
                <div class="single_product build_product">
                    <div class="product_thumb ">
                        <a class="primary_img" href="product-details.html"><img
                                src="${item_pro.image}" alt=""></a>
                        <div class="quick_button">    

                        <button><a href="" data-id=${item_pro.id} class="btn-click" title="quick_view">Thêm vào giỏ</a></button>
                        </div>

                    </div>

                    <div class="product_content grid_content">
                        <h3><a href="product-details.html">Marshall Portable Bluetooth</a></h3>
                        <span class="current_price">${item_pro.price}</span>
                    </div>


                    <div class="product_content list_content">
                        <h3><a href="product-details.html">${item_pro.name}</a></h3>
                        <div class="product_ratting">
                            <ul>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                            </ul>
                        </div>
                        <div class="product_desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad,
                                iure
                                incidunt. Ab consequatur temporibus non eveniet inventore doloremque
                                necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia
                                fugiat
                                minus doloribus distinctio assumenda pariatur, quidem laborum quae
                                quasi
                                suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus,
                                libero
                                minus nihil, veniam suscipit? Autem repellendus illo, amet
                                praesentium
                                fugit, velit natus? Dolorum perferendis reiciendis in quam porro
                                ratione
                                eveniet, tempora saepe ducimus, alias?</p>
                        </div>

                    </div>

                </div>
            </div>`
        })
    }
    //view all sản phẩm trang shop
    async view_products() {
        let render = document.querySelector('.showsp');
        let product = await result.products;
        // console.log(product);
        product.forEach(item_product => {
            render.innerHTML += `<div class="col-lg-4 col-md-4 col-12">
      <div class="single_product build_product">
          <div class="product_thumb ">
              <a class="primary_img" href="product-details.html"><img
                      src="${item_product.image}" alt=""></a>
              <div class="quick_button">    
              
              <button><a href="" data-id=${item_product.id} class="btn-click" title="quick_view">Thêm vào giỏ</a></button>
              </div>
              
          </div>
  
          <div class="product_content grid_content">
              <h3><a href="product-details.html">Marshall Portable Bluetooth</a></h3>
              <span class="current_price">${item_product.price}</span>
          </div>
  
  
          <div class="product_content list_content">
              <h3><a href="product-details.html">${item_product.name}</a></h3>
              <div class="product_ratting">
                  <ul>
                      <li><a href="#"><i class="fa fa-star"></i></a></li>
                      <li><a href="#"><i class="fa fa-star"></i></a></li>
                      <li><a href="#"><i class="fa fa-star"></i></a></li>
                      <li><a href="#"><i class="fa fa-star"></i></a></li>
                      <li><a href="#"><i class="fa fa-star"></i></a></li>
                  </ul>
              </div>
              <div class="product_desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad,
                      iure
                      incidunt. Ab consequatur temporibus non eveniet inventore doloremque
                      necessitatibus sed, ducimus quisquam, ad asperiores eligendi quia
                      fugiat
                      minus doloribus distinctio assumenda pariatur, quidem laborum quae
                      quasi
                      suscipit. Cupiditate dolor blanditiis rerum aliquid temporibus,
                      libero
                      minus nihil, veniam suscipit? Autem repellendus illo, amet
                      praesentium
                      fugit, velit natus? Dolorum perferendis reiciendis in quam porro
                      ratione
                      eveniet, tempora saepe ducimus, alias?</p>
              </div>
  
          </div>
  
      </div>
  </div>`
        });
        this.setID();
    }
    //view sản phẩm ra màn hình 
    async view_product_index() {
        let view = document.querySelector('.hienthisanpham');
        // console.log(view);
        let view_product = await result.products;
        // console.log(view_product);
        let i = 0;
        view_product.forEach(item_product => {
            // Alert("hi")
            if (i < 8) {
                view.innerHTML += `
            <div class="col-lg-3">
                <div class="single_product">
                    <div class="product_thumb">
                        <a class="primary_img" href="product-details.html"><img
                                src="${item_product.image}" alt=""></a>
                        <div class="quick_button">
                        <button><a href="" data-id=${item_product.id} class="btn-click" title="quick_view">Thêm vào giỏ</a></button>
                        </div>
                    </div>
                    <div class="product_content">
                        <h3><a href="product-details.html">${item_product.name}</a></h3>
                        <span class="current_price">${item_product.price}</span>
                    </div>
                </div>
            </div>`;
                // console.log(i);
            }
            i++;
        });
        this.setID();
    }
    // lấy id sp 
    setID = () => {
        let btn_click = document.querySelectorAll('.btn-click');
        // console.log(btn_click);
        for (var i = 0; i < btn_click.length; i++) {
            btn_click[i].addEventListener('click', (e) => this.addCart(e));
        }
    }
    //add sản phẩm vào shop
    addCart = (e) => {
        let click_id = e.target.dataset.id;
        click_id = Number(click_id, 10);
        console.log(click_id);
        let exam_cart = cart.findIndex(cart => cart.products_id === click_id)
        if (cart.length <= 0) {
            cart = [{
                products_id: click_id,
                quantity: 1
            }]
            console.log(cart);
        } else if (exam_cart < 0) {
            cart.push({
                products_id: click_id,
                quantity: 1
            })
        } else {
            cart[exam_cart].quantity = cart[exam_cart].quantity + 1;
            console.log(cart);
        }
        e.preventDefault();
    }
    // đường link liên kết ficebase
    async inNer() {
        await fetch('https://assignment-50ec8-default-rtdb.firebaseio.com/.json')
            .then(response => response.json())
            .then(data => {
                result = data;
                // console.log(result);
                this.setID();
                this.view_category();
                this.view_products();
                this.view_product_index();

                // this.view_product_category();
                pro_cate = result.products
                // console.log(pro_cate);
            })
    }
}
var Home = new HOME;
export default Home;