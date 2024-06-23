//build detail
function bulDetail({ order_id, product_id, quantity, unit_price }, index_detail) {
    return `<tr>
    <th scope="row">${order_id}</th>
    <td>${product_id}</td>
    <td>${quantity}</td>
    <td>${unit_price}</td>
    <td>
    <button id ="${index_detail}" type="button" class="btn btn-outline-danger btn-delete">DELETE</button>
    <button type="button" class="btn btn-outline-warning">EDIT</button>
    </td>
  </tr>`
}
function del() {
    let del = document.getElementsByClassName("btn-delete");
    for (let index = 0; index < del.length; index++) {
        del[index].onclick = function () {
            fetch(`https://assignment-50ec8-default-rtdb.firebaseio.com/order_details/${this.id}.json`, {
                method: 'DELETE'
            });
            this.parentElement.parentElement.remove();
        };

    }
}
// connect detail
fetch('https://assignment-50ec8-default-rtdb.firebaseio.com/order_details.json')
    .then(response => response.json())
    .then((data) => {
        // console.log(data);
        let result = "";
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const user_detail = data[key];
                // console.log(user_detail);
                result += bulDetail(user_detail, key);
            }
            document.querySelector(".detail_admin").innerHTML = result;
            // console.log(result);
            del();
        }
    })