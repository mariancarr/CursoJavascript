
let carrito = []

class Inventario{
    constructor(inventario, cantidad){
        this.id = inventario.id;
        this.producto = inventario.producto;
        this.especificaciones = inventario.especificaciones;
        this.color = inventario.color;
        this.precio = inventario.precio;
        this.stock = inventario.stock-1;
        this.img = inventario.img;
        this.cantidad = cantidad;
        this.precioTotal = inventario.precio
    }

    agregarUnidad(){
        this.cantidad++;
        this.stock--;
    }
    
    eliminarUnidad(){
        this.cantidad--;
        this.stock++;
    }
    
    actualizarPrecioTotal(){
        this.precioTotal = this.precio * this.cantidad;
    }
}

let productos = [
    {
        id: 0, 
        producto: "AURICULARES", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Cloud Alpha Gaming Red PC".toUpperCase(), 
        color:"rojo",
        precio: 11500,
        stock: 5,
        img: "images/auriculares_HyperX_Cloud_Alpha_Gaming_Red_PC.jpg",       
    },

    {
        id: 1, 
        producto: "AURICULARES", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Inalambricos Logitech G733 Lightspeed RGB White".toUpperCase(),
        color:"blanco",
        precio: 12341,
        stock: 3,
        img: "images/auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_White.jpg",       
    },

    {
        id: 2, 
        producto: "AURICULARES", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Cloud Stinger Gaming Negro PC".toUpperCase(),
         color:"negro",
        precio: 9000,
        stock: 1,
        img: "images/auriculares_HyperX_Cloud_Stinger_Gaming_Negro__PC.jpg",        
    },

    {
        id: 3, 
        producto: "AURICULARES", 
        marca: "logitech".toUpperCase(),
        especificaciones: "Logitech PRO X Gaming".toUpperCase(),
         color:"negro",
        precio: 5456,
        stock: 4,
        img: "images/auriculares_Logitech_PRO_X_Gaming.jpg",        
    },

    {
        id: 4, 
        producto: "GABINETE", 
        marca: "ASUS".toUpperCase(),
        especificaciones: "ASUS ROG STRIX Helios Aluminum Black RGB".toUpperCase(), 
        color:"negro",
        precio: 8766,
        stock: 7,
        img: "images/gabinete_ASUS_ROG_STRIX_Helios_Aluminum_Black_RGB.jpg",        
    },

    {
        id: 5, 
        producto: "GABINETE", 
        marca: "redragon".toUpperCase(),
        especificaciones: "Be Quiet Dark Base Pro 900 Black Rev 2".toUpperCase(), 
        color:"red",
        precio: 4345,
        stock: 3,
        img: "images/gabinete_Be_Quiet__DARK_BASE_PRO_900_Black_Rev_2.jpg",
    },

    {
        id: 6, 
        producto: "MONITOR", 
        marca: "ASUS".toUpperCase(),
        especificaciones: "Gamer ASUS ROG SWIFT 24 PG259QNR 360Hz 1Ms G-Sync".toUpperCase(),
        color:"red",
        precio: 6565,
        stock: 8,
        img: "images/monitor_Gamer_ASUS_ROG_SWIFT_24__PG259QNR_360Hz_1Ms_G-Sync.jpg",    
    },

    {
        id: 7, 
        producto: "MONITOR", 
        marca: "ViewSonic".toUpperCase(),
        especificaciones: "Gamer ViewSonic 24 XG240R ELITE 144Hz 1ms".toUpperCase(),
        color:"red",
        precio: 7676,
        stock: 7,
        img: "images/monitor_Gamer_ViewSonic_24__XG240R_ELITE_144Hz_1ms.jpg",     
    },

    {
        id: 8, 
        producto: "MONITOR", 
        marca: "LG".toUpperCase(),
        especificaciones: "LG 32 UltraGear 32UN550 4K 60Hz".toUpperCase(),
        color:"red",
        precio: 5347,
        stock: 6,
        img: "images/monitor_LG_32__UltraGear_32UN550_4K_60Hz.jpg",       
    },

    {
        id: 9, 
        producto: "MOUSE", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G603 Lightspeed Wireless".toUpperCase(),
        color:"red",
        precio: 8776,
        stock: 11,
        img: "images/mouse_Logitech_G603_Lightspeed_Wireless.jpg",     
    },

    {
        id: 10, 
        producto: "MOUSE", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G703 Lightspeed Wireless".toUpperCase(),
        color:"red",
        precio: 9999,
        stock: 10,
        img: "images/mouse_Logitech_G703_Lightspeed_Wireless.jpg",    
    },

    {
        id: 11, 
        producto: "MOUSE", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G PRO X Superlight Black".toUpperCase(),
        color:"red",
        precio: 545,
        stock: 12,
        img: "images/mouse_Logitech_G_PRO_X_Superlight_Black.jpg",    
    },

    {
        id: 12, 
        producto: "MOUSE", 
        marca: "Logitec".toUpperCase(),
        especificaciones: "Logitech G PRO X Superlight White".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 14,
        img: "images/mouse_Logitech_G_PRO_X_Superlight_White.jpg",    
    },

    {
        id: 13, 
        producto: "MOUSE PAD", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Fury S Pro Gaming Speed Edition L".toUpperCase(),
        color:"red",
        precio: 2444,
        stock: 15,
        img: "images/mouse_Pad_HyperX_Fury_S_Pro_Gaming_Speed_Edition_L.jpg",  
    },

    {
        id: 14, 
        producto: "MOUSE PAD", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G640 Gaming".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 13,
        img: "images/mouse_Pad_Logitech_G640_Gaming.jpg",  
    },

    {
        id: 15, 
        producto: "MOUSE PAD", 
        marca: "Redragon".toUpperCase(),
        especificaciones: "Redragon Flick L".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 12,
        img: "images/mouse_Pad_Redragon_Flick_L.jpg",   
    },

    {
        id: 16, 
        producto: "TECLADO", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G213 Prodigy RGB".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 7,
        img: "images/teclado_Logitech_G213_Prodigy_RGB.jpg",  
    },

    {
        id: 17, 
        producto: "TECLADO", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Alloy Origins RGB Switch Red".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 8,
        img: "images/teclado_Mecanico_HyperX_Alloy_Origins_RGB_Switch_Red.jpg",  
    },

    {
        id: 18, 
        producto: "TECLADO", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech PRO Series RGB GX Clicky Switches".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 9,
        img: "images/teclado_Mecanico_Logitech_PRO_Series_RGB_GX_Clicky_Switches.jpg",   
    },

    {
        id: 19, 
        producto: "WEBCAM", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech C925e Full_HD con tapa".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 5,
        img: "images/webCam_Logitech_C925e_Full_HD_con_tapa.jpg",   
    },

    {
        id: 20, 
        producto: "WEBCAM", 
        marca: "Redragon".toUpperCase(),
        especificaciones: "Redragon GW800 Hitman 1080p".toUpperCase(),
        color:"red",
        precio: 1234,
        stock: 6,
        img: "images/webcam_Redragon_GW800_Hitman_1080p.jpg",   
    }
]







