
let products = [];
let selectedIndex = -1;

function addProduct() {
    let productName = document.getElementById(`name`).value;
    let productPrice = document.getElementById(`price`).value;
    let productColor = document.getElementById(`color`).value;
    let productSelect = document.getElementById(`select`).value;

    document.getElementById(`name`).value = ``;
    document.getElementById(`price`).value = ``;
    document.getElementById(`color`).value = ``;
    document.getElementById(`select`).value = ``;

    let newProduct = {
        name: productName,
        price: productPrice,
        color: productColor,
        select: productSelect
    }

    if (selectedIndex >= 0) {
        products[selectedIndex] = newProduct;
        selectedIndex = -1;
    } else {
        products.push(newProduct);
    }

    chiz();
}

function chiz(){
    let result = "";
    for (let i = 0; i < products.length; i++){
        result +=
        "<tr>" +
        "<td>"+ (i + 1) +"</td>" +
        "<td>"+ products[i].name +"</td>" +
        "<td>"+ products[i].price +"</td>" +
        "<td>"+ products[i].color +"</td>" +
        "<td>"+ products[i].select +"</td>" +
        "<td>"+  +"</td>" +
        "<td>"+  +"</td>" +
        "</tr>"
    }
    document.getElementById("result").innerHTML = result;
}

function deleteProduct(index) {
    products.splice(index, 1);
    chiz();
}

function editProduct(index) {
    document.getElementById(`name`).value = products[index].name;
    document.getElementById(`price`).value = products[index].price;
    document.getElementById(`color`).value = products[index].color;
    selectedIndex = index;
}