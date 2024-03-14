const CarritoCompra = require("../index");

describe("Clase CarritoCompra", () => {
  let carritoCompra;

  beforeEach(() => {
    carritoCompra = new CarritoCompra();
  });

  describe("Sobre el constructor dd clase CarritoCompra", () => {
    it("CarritoCompra deveria ser una clase", () => {
      expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    });

    it("carritoCompra debe ser una instancioa de la clase CarritoCompra", () => {
      expect(carritoCompra instanceof CarritoCompra).toBe(true);
    });

    it("Deberia guardar porductos en la lista", () => {
      expect(carritoCompra.products).toEqual([]);
    });
  });

  describe("Métodos de la clase CarritoCompra", () => {
    const product1 = {
      id: 1,
      name: "Zapatos",
      price: 1000,
      quantity: 3,
    };

    const product2 = {
      id: 2,
      name: "Remaera",
      price: 100,
      quantity: 2,
    };

    it("Debaíra tener un método llamado agregarProducto", () => {
      expect(typeof carritoCompra.agregarProducto).toBe("function");
    });

    it("Debería tener un método calcularTotal", () => {
      expect(typeof carritoCompra.calcularTotal).toBe("function");
    });

    it("Debería tener un método llamado aplicarDescuento", () => {
      expect(typeof carritoCompra.aplicarDescuento).toBe("function");
    });

    it("el método agregarProducto debería poder agregar un producto a la lista", () => {
      carritoCompra.agregarProducto(product1);
      expect(carritoCompra.products).toContain(product1);
    });

    it("El método calcularTotal debería poder caclcular el total de la compra sumando los precios de todos los productos", () => {
      carritoCompra.agregarProducto(product1);
      carritoCompra.agregarProducto(product2);

      const totalExpect =
        product1.price * product1.quantity + product2.price * product2.quantity;

      const total = carritoCompra.calcularTotal();

      expect(total).toBe(totalExpect);
    });

    it("El método aplicarDescuento debería poder aplicar un descuento al total de la compra", () => {
      carritoCompra.agregarProducto(product1);
      carritoCompra.agregarProducto(product2);

      const subTotal =  product1.price * product1.quantity + product2.price * product2.quantity;

      const porcentajeDescuento = 15;

      const totalExpect = subTotal - (subTotal * (porcentajeDescuento/100));

      const total = carritoCompra.aplicarDescuento(porcentajeDescuento);

      expect(totalExpect).toBe(total);
    });
  });
});
