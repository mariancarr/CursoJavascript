let productos = []
let carrito = []
class inventario{
    constructor(id, producto, especificaciones, color, precio, stock, img){
        this.id = id.toFixed();
        this.producto = producto.toUpperCase();
        this.especificaciones = especificaciones;
        this.color = color.toLowerCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.img = img;
    }
}

productos.push(new inventario(1, "AURICULARES", "HyperX Cloud Alpha Gaming Red PC", "red", 11500, 15, "images/auriculares_HyperX_Cloud_Alpha_Gaming_Red_PC.jpg"))
productos.push(new inventario(2, "AURICULARES", "HyperX Cloud Stinger Gaming Negro PC", "black", 8700, 15, "images/auriculares_HyperX_Cloud_Stinger_Gaming_Negro__PC.jpg"))
productos.push(new inventario(3, "AURICULARES", "Inalambricos Logitech G733 Lightspeed RGB White", "white", 9500, 15, "images/auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_White.jpg"))
productos.push(new inventario(4, "AURICULARES", "Logitech PRO X Gaming", "black", 1020, 0, "images/auriculares_Logitech_PRO_X_Gaming.jpg"))
productos.push(new inventario(5, "GABINETE", "ASUS ROG STRIX Helios Aluminum Black RGB", "black", 900, 15, "images/gabinete_ASUS_ROG_STRIX_Helios_Aluminum_Black_RGB.jpg"))
productos.push(new inventario(6, "GABINETE", "Be Quiet Dark Base Pro 900 Black Rev 2", "black", 950, 15, "images/gabinete_Be_Quiet__DARK_BASE_PRO_900_Black_Rev_2.jpg"))
productos.push(new inventario(7, "MONITOR", "Gamer ASUS ROG SWIFT 24 PG259QNR 360Hz 1Ms G-Sync", "unidad", 100, 15, "images/monitor_Gamer_ASUS_ROG_SWIFT_24__PG259QNR_360Hz_1Ms_G-Sync.jpg" ))
productos.push(new inventario(8, "MONITOR", "Gamer ViewSonic 24 XG240R ELITE 144Hz 1ms", "unidad", 105, 0, "images/monitor_Gamer_ViewSonic_24__XG240R_ELITE_144Hz_1ms.jpg"))
productos.push(new inventario(9, "MONITOR", "LG 32 UltraGear 32UN550 4K 60Hz", "unidad", 105, 15, "images/monitor_LG_32__UltraGear_32UN550_4K_60Hz.jpg"))
productos.push(new inventario(10, "MOUSE", "Logitech G603 Lightspeed Wireless", "unidad", 110, 15, "images/mouse_Logitech_G603_Lightspeed_Wireless.jpg"))
productos.push(new inventario(11, "MOUSE", "Logitech G703 Lightspeed Wireless", "unidad", 105, 15, "images/mouse_Logitech_G703_Lightspeed_Wireless.jpg"))
productos.push(new inventario(12, "MOUSE", "Logitech G PRO X Superlight Black", "unidad", 105, 15, "images/mouse_Logitech_G_PRO_X_Superlight_Black.jpg"))
productos.push(new inventario(13, "MOUSE", "Logitech G PRO X Superlight White", "unidad", 110, 15, "images/mouse_Logitech_G_PRO_X_Superlight_White.jpg"))
productos.push(new inventario(14, "MOUSE PAD", "HyperX Fury S Pro Gaming Speed Edition L", "unidad", 105, 15, "images/mouse_Pad_HyperX_Fury_S_Pro_Gaming_Speed_Edition_L.jpg"))
productos.push(new inventario(15, "MOUSE PAD", "Logitech G640 Gaming", "600ml", 150, 15,  "images/mouse_Pad_Logitech_G640_Gaming.jpg"))
productos.push(new inventario(16, "MOUSE PAD", "Redragon Flick L", "600ml", 150, 15, "images/mouse_Pad_Redragon_Flick_L.jpg"))
productos.push(new inventario(17, "TECLADO", "Logitech G213 Prodigy RGB", "500ml", 170, 15, "images/teclado_Logitech_G213_Prodigy_RGB.jpg"))
productos.push(new inventario(18, "TECLADO MECANICO", "HyperX Alloy Origins RGB Switch Red", "500ml", 170, 15, "images/teclado_Mecanico_HyperX_Alloy_Origins_RGB_Switch_Red.jpg"))
productos.push(new inventario(19, "TECLADO MECANICO", "Logitech PRO Series RGB GX Clicky Switches", "500ml", 170, 15, "images/teclado_Mecanico_Logitech_PRO_Series_RGB_GX_Clicky_Switches.jpg"))
productos.push(new inventario(21, "WEBCAM", "Logitech C925e Full_HD con tapa", "500ml", 170, 15, "images/webCam_Logitech_C925e_Full_HD_con_tapa.jpg"))
productos.push(new inventario(22, "WEBCAM", "Redragon GW800 Hitman 1080p", " ", 375, 0, "images/webcam_Redragon_GW800_Hitman_1080p.jpg"))
