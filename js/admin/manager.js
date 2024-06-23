import { Alert } from "bootstrap";

var list = {};
class MANAGER {
    //view danh sách oder ra màn hình
    async view_user_admin(list) {
        let product = await list.products;
        console.log(product);
        // console.log(product);
        let productList = document.querySelector('.app_admin');
        productList.innerHTML = '';
        // console.log(productList);
        Object.entries(product).forEach(([key, value]) => {
            productList.innerHTML += `<tr>
                <th scope="row">${value.id}</th>
                <td>${value.name}</td>
                <td><img src="../${value.image}" style="height:200px"; "></td>
                <td>${value.price}</td>
                <td>ahsudihalsfkhoiashdfu;nádkfnaosdhfnasdfnlkasdnflknasdsa <br>
                    áihfjsajkfajsdflkasd
                </td>
                <td style="font-weight: 20%;">
                    <button  type="button" class="btn btn-outline-danger">Delete</button>
                    <button type="button" class="btn btn-outline-warning">Edit</button>
                </td>
            </tr>`
        });
    }
    //view danh sản phẩm ra trang admin 
    async view_pro_admin(list) {
        let product = await list.products;
        // console.log(product);
        // console.log(product);
        let productList = document.querySelector('.app_admin');
        productList.innerHTML = '';
        // console.log(productList);
        Object.entries(product).forEach(([key, value]) => {
            productList.innerHTML += `<tr>
                <th scope="row">${value.id}</th>
                <td>${value.name}</td>
                <td><img src="../${value.image}" style="height:200px"; "></td>
                <td>${value.price}</td>
                <td>ahsudihalsfkhoiashdfu;nádkfnaosdhfnasdfnlkasdnflknasdsa <br>
                    áihfjsajkfajsdflkasd
                </td>
                <td style="font-weight: 20%;">
                    <button  type="button" data-pro-id=${key} class="btn btn-outline-danger Del">Delete</button>
                    <button type="button" class="btn btn-outline-warning ">Edit</button>
                </td>
            </tr>`
        });
        const delButton = document.querySelectorAll(".Del");
        // console.log(delButton);
        delButton.forEach(btn => {
            console.log(btn);
            btn.addEventlistener('click', (event) => {
                const pro_id = event.target.dataset.pro_id
                Alert("HI")
            })
        })
    }
    // xóa sản phẩm 
    async delPro() {

    }
    async inNer_admin() {
        await fetch('https://assignment-50ec8-default-rtdb.firebaseio.com/.json')
            .then(response => response.json())
            .then(data => {
                list = data;
                // console.log(list);
                this.view_pro_admin(list);
            })
    }
}
var admin = new MANAGER();
export default admin;