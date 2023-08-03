document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name) {
    const message = `hallo ${product_name}`
    const whatsapp = `https://wa.me/62882003926354?text=${message}`
    open(whatsapp, "_blank")
}

function chat() {
    alert('hallo')
}