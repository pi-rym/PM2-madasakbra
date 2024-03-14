class CarritoCompra{
constructor(){
    this.products = [];
}

agregarProducto(product){
this.products.push(product)
};

calcularTotal(){
let total = 0;
for(const product of this.products){
    total += product.price * product.quantity;
}
return total
};

aplicarDescuento(porcentaje){
const subTotal = this.calcularTotal();
const descuento = this.calcularTotal() * (porcentaje / 100);

const total = subTotal - descuento;

return total;
}
};

module.exports = CarritoCompra;