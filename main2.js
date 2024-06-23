// oder show
function buildJson({ customer_name, customer_email, customer_address, customer_phone_number, created_date }, index) {
    return `<tr>
    <th scope="row">${customer_name}</th>
    <td>${customer_email}</td>
    <td>${customer_address}</td>
    <td>${customer_phone_number}</td>
    <td>${created_date}</td>
    <td>
    <button id ="${index}" type="button" class="btn btn-outline-danger btn-delete">DELETE</button>
    <button type="button" class="btn btn-outline-warning">EDIT</button>
    </td>
  </tr>`;
}
// oder add
let btn_save = document.getElementById("btn-save");
btn_save.onclick = function () {
    let oder_id = document.getElementById("oder-id").value;
    let oder_name = document.getElementById("oder-name").value;
    let oder_email = document.getElementById("oder-email").value;
    let oder_address = document.getElementById("oder-address").value;
    let oder_phone = document.getElementById("oder-phone").value;
    let oder_detail = document.getElementById("oder-detail").value;
    let oder = { oder_id, oder_name, oder_email, oder_address, oder_phone, oder_detail }
    console.log(oder);
    fetch('https://assignment-50ec8-default-rtdb.firebaseio.com/orders.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(oder),
    });
    this.parentElement.parentElement.remove();
};
//oder build
function builddel() {
    let del = document.getElementsByClassName("btn-delete");
    for (let index = 0; index < del.length; index++) {
        del[index].onclick = function () {
            fetch(`https://assignment-50ec8-default-rtdb.firebaseio.com/orders/${this.id}.json`, {
                method: 'DELETE'
            });
            // console.log(index);
            this.parentElement.parentElement.remove();
            // alert("DELETE Thành công");
        }
    }
}
// connect oder
fetch("https://assignment-50ec8-default-rtdb.firebaseio.com/orders.json")
    .then((respone) => respone.json())
    .then((json) => {
        console.log(json);
        let data = "";
        // json.forEach((user, index) => {
        // console.log(user);
        for (const key in json) {
            if (Object.hasOwnProperty.call(json, key)) {
                let user = json[key];
                data += buildJson(user, key);
            }
        }
        // if (user) {
        //     data += buildJson(user, index);
        // }
        // });
        document.querySelector(".app_admin").innerHTML = data;
        builddel();
    });
