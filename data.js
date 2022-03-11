const productos = []
let carrito = []

class inventario{
    constructor(id, producto, ingredientes, tamano, precio, stock, vegetariana){
        this.id = id.toFixed();
        this.producto = producto.toLowerCase();
        this.ingredientes = ingredientes.toLowerCase();
        this.tamano = tamano.toLowerCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock)
        this.vegetariana = vegetariana.toLowerCase();
    }
}

productos.push(new inventario(1, "pizza", "muzzarella", "grande", 800, 15, "vegetariana"))
productos.push(new inventario(2, "pizza", "jamon y muzzarella", "grande", 970, 15, "no"))
productos.push(new inventario(3, "pizza", "fugaza", "grande", 900, 15, "vegetariana"))
productos.push(new inventario(4, "pizza", "jamon y morron", "grande", 1020, 0, "no"))
productos.push(new inventario(5, "pizza", "margarita", "grande", 900, 15, "vegetariana"))
productos.push(new inventario(6, "pizza", "napolitana", "grande", 950, 15, "vegetariana"))
productos.push(new inventario(7, "empanada", "jamon y queso", "unidad", 100, 15, "no"))
productos.push(new inventario(8, "empanada", "cebolla y queso", "unidad", 105, 0, "vegetariana"))
productos.push(new inventario(9, "empanada", "carne suave", "unidad", 105, 15, "no"))
productos.push(new inventario(10, "empanada", "pollo", "unidad", 110, 15, "no"))
productos.push(new inventario(11, "empanada", "humita", "unidad", 105, 15, "vegetariana"))
productos.push(new inventario(12, "empanada", "carne picante", "unidad", 105, 15, "no"))
productos.push(new inventario(13, "empanada", "capresse", "unidad", 110, 15, "vegetariana"))
productos.push(new inventario(14, "empanada", "verdura", "unidad", 105, 15, "vegetariana"))
productos.push(new inventario(15, "bebida", "agua con gas", "600ml", 150, 15, "vegetariana"))
productos.push(new inventario(16, "bebida", "agua sin gas", "600ml", 150, 15, "vegetariana"))
productos.push(new inventario(17, "bebida", "coca-Cola", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(18, "bebida", "sprite", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(19, "bebida", "fanta", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(21, "bebida", "pomelo", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(22, "postre", "volcan chocolate", " ", 375, 0, "vegetariana"))
productos.push(new inventario(23, "postre", "cheesecake", " ", 350, 0, "vegetariana"))
productos.push(new inventario(24, "postre", "flan con crema", " ", 300, 15, "vegetariana"))