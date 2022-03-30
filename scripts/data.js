
class Inventario{
    constructor(inventario, cantidad){
        this.id = inventario.id;
        this.producto = inventario.producto;
        this.especificaciones = inventario.especificaciones;
        this.color = inventario.color;
        this.precio = inventario.precio;
        this.stockFijo = inventario.stockFijo
        this.stockVariable = inventario.stockVariable-1;
        this.img = inventario.img;
        this.cantidad = cantidad;
        this.precioTotal = inventario.precio
    }

    agregarUnidad(){
        
        this.cantidad++;
        this.stockVariable--;
    }
    
    eliminarUnidad(){
        this.cantidad--;
        this.stockVariable++;
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
        color:" negro y rojo",
        precio: 11500,
        stockFijo: 5,
        stockVariable: 5,
        img: "images/auriculares_HyperX_Cloud_Alpha_Gaming_Red_PC.jpg",  
        largoCable : "2.1m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "Android por Mini Plug,Nintendo Switch,PC,PS4,Xbox One,PS5,Xbox X/S Series",

    },

    {
        id: 1, 
        producto: "AURICULARES", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Inalambricos Logitech G733 Lightspeed RGB White".toUpperCase(),
        color:"blanco",
        precio: 12499,
        stockFijo: 3,
        stockVariable: 3,
        img: "images/auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_White.jpg", 
        largoCable : "1.8m",
        usb: "no",
        conexion: "Inalambrico o cable",
        compatibilidad: "Android por Mini Plug,Nintendo Switch,PC,PS4,Xbox One,PS5,Xbox X/S Series",      
    },

    {
        id: 2, 
        producto: "AURICULARES", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Cloud Stinger Gaming Negro PC".toUpperCase(),
        color:"negro",
        precio: 9999,
        stockFijo: 0,
        stockVariable: 0,
        img: "images/auriculares_HyperX_Cloud_Stinger_Gaming_Negro__PC.jpg", 
        largoCable : "2m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "Android por Mini Plug,Nintendo Switch,PC,PS4,Xbox One,PS5,Xbox X/S Series",       
    },

    {
        id: 3, 
        producto: "AURICULARES", 
        marca: "logitech".toUpperCase(),
        especificaciones: "Logitech PRO X Gaming".toUpperCase(),
        color:"negro mate",
        precio: 13250,
        stockFijo: 5,
        stockVariable: 5,
        img: "images/auriculares_Logitech_PRO_X_Gaming.jpg",
        largoCable : "1.9m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "Android por Mini Plug,Nintendo Switch,PC,PS4,Xbox One,PS5,Xbox X/S Series",        
    },

    {
        id: 4, 
        producto: "GABINETE", 
        marca: "ASUS".toUpperCase(),
        especificaciones: "ASUS ROG STRIX Helios Aluminum Black RGB".toUpperCase(), 
        color:"negro con RGB",
        precio: 8750,
        stockFijo: 7,
        stockVariable: 7,
        img: "images/gabinete_ASUS_ROG_STRIX_Helios_Aluminum_Black_RGB.jpg",
        largoCable : "1m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC",        
    },

    {
        id: 5, 
        producto: "GABINETE", 
        marca: "redragon".toUpperCase(),
        especificaciones: "Be Quiet Dark Base Pro 900 Black Rev 2".toUpperCase(), 
        color:"gris",
        precio: 6800,
        stockFijo: 3,
        stockVariable: 3,
        img: "images/gabinete_Be_Quiet__DARK_BASE_PRO_900_Black_Rev_2.jpg",
        largoCable : "1m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC",
    },

    {
        id: 6, 
        producto: "MONITOR", 
        marca: "ASUS".toUpperCase(),
        especificaciones: "Gamer ASUS ROG SWIFT 24 PG259QNR 360Hz 1Ms G-Sync".toUpperCase(),
        color:"negro",
        precio: 23000,
        stockFijo: 8,
        stockVariable: 8,
        img: "images/monitor_Gamer_ASUS_ROG_SWIFT_24__PG259QNR_360Hz_1Ms_G-Sync.jpg",  
        largoCable : "2.5m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC",  
    },

    {
        id: 7, 
        producto: "MONITOR", 
        marca: "ViewSonic".toUpperCase(),
        especificaciones: "Gamer ViewSonic 24 XG240R ELITE 144Hz 1ms".toUpperCase(),
        color:"negro",
        precio: 21000,
        stockFijo: 1,
        stockVariable: 1,
        img: "images/monitor_Gamer_ViewSonic_24__XG240R_ELITE_144Hz_1ms.jpg", 
        largoCable : "2.5m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC",    
    },

    {
        id: 8, 
        producto: "MONITOR", 
        marca: "LG".toUpperCase(),
        especificaciones: "LG 32 UltraGear 32UN550 4K 60Hz".toUpperCase(),
        color:"negro",
        precio: 21500,
        stockFijo: 6,
        stockVariable: 6,
        img: "images/monitor_LG_32__UltraGear_32UN550_4K_60Hz.jpg",
        largoCable : "2.5m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC",       
    },

    {
        id: 9, 
        producto: "MOUSE", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G603 Lightspeed Wireless".toUpperCase(),
        color:"gris",
        precio: 6300,
        stockFijo: 11,
        stockVariable: 11,
        img: "images/mouse_Logitech_G603_Lightspeed_Wireless.jpg",
        largoCable : "1.9m",
        usb: "si",
        conexion: "Inalambrico",
        compatibilidad: "PC",     
    },

    {
        id: 10, 
        producto: "MOUSE", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G703 Lightspeed Wireless".toUpperCase(),
        color:"negro",
        precio: 8999,
        stockFijo: 2,
        stockVariable: 2,
        img: "images/mouse_Logitech_G703_Lightspeed_Wireless.jpg",
        largoCable : "2m",
        usb: "si",
        conexion: "Inalambrico",
        compatibilidad: "PC",    
    },

    {
        id: 11, 
        producto: "MOUSE", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G PRO X Superlight Black".toUpperCase(),
        color:"negro",
        precio: 12999,
        stockFijo: 12,
        stockVariable: 12,
        img: "images/mouse_Logitech_G_PRO_X_Superlight_Black.jpg",
        largoCable : "2m",
        usb: "si",
        conexion: "inalambrico o cable",
        compatibilidad: "PC",    
    },

    {
        id: 12, 
        producto: "MOUSE", 
        marca: "Logitec".toUpperCase(),
        especificaciones: "Logitech G PRO X Superlight White".toUpperCase(),
        color:"blanco",
        precio: 12999,
        stockFijo: 14,
        stockVariable: 14,
        img: "images/mouse_Logitech_G_PRO_X_Superlight_White.jpg",
        largoCable : "2m",
        usb: "si",
        conexion: "inalambrico o cable",
        compatibilidad: "PC",    
    },

    {
        id: 13, 
        producto: "MOUSE PAD", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Fury Pro Gaming Speed Edition L".toUpperCase(),
        color:"rojo y negro",
        precio: 3000,
        stockFijo: 15,
        stockVariable: 15,
        img: "images/mouse_Pad_HyperX_Fury_S_Pro_Gaming_Speed_Edition_L.jpg",
        largoCable : "-",
        usb: "-",
        conexion: "-",
        compatibilidad: "-",  
    },

    {
        id: 14, 
        producto: "MOUSE PAD", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G640 Gaming".toUpperCase(),
        color:"celeste y negro",
        precio: 4500,
        stockFijo: 13,
        stockVariable: 13,
        img: "images/mouse_Pad_Logitech_G640_Gaming.jpg", 
        largoCable : "-",
        usb: "no",
        conexion: "cable",
        compatibilidad: "-", 
    },

    {
        id: 15, 
        producto: "MOUSE PAD", 
        marca: "Redragon".toUpperCase(),
        especificaciones: "Redragon Flick L".toUpperCase(),
        color:"negro",
        precio: 2300,
        stockFijo: 12,
        stockVariable: 12,
        img: "images/mouse_Pad_Redragon_Flick_L.jpg", 
        largoCable : "-",
        usb: "no",
        conexion: "cable",
        compatibilidad: "-",  
    },

    {
        id: 16, 
        producto: "TECLADO", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech G213 Prodigy RGB".toUpperCase(),
        color:"negro",
        precio: 9999,
        stockFijo: 6,
        stockVariable: 6,
        img: "images/teclado_Logitech_G213_Prodigy_RGB.jpg", 
        largoCable : "2.1m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC", 
    },

    {
        id: 17, 
        producto: "TECLADO", 
        marca: "Hyperx".toUpperCase(),
        especificaciones: "HyperX Alloy Origins RGB Switch Red".toUpperCase(),
        color:"rojo",
        precio: 9500,
        stockFijo: 8,
        stockVariable: 8,
        img: "images/teclado_Mecanico_HyperX_Alloy_Origins_RGB_Switch_Red.jpg", 
        largoCable : "2m",
        usb: "no",
        conexion: "cable",
        compatibilidad: "PC", 
    },

    {
        id: 18, 
        producto: "TECLADO", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech PRO Series RGB GX Clicky Switches".toUpperCase(),
        color:"negro con RGB",
        precio: 11000,
        stockFijo: 9,
        stockVariable: 9,
        img: "images/teclado_Mecanico_Logitech_PRO_Series_RGB_GX_Clicky_Switches.jpg",
        largoCable : "1.8m",
        usb: "si",
        conexion: "cable",
        compatibilidad: "PC",   
    },

    {
        id: 19, 
        producto: "WEBCAM", 
        marca: "Logitech".toUpperCase(),
        especificaciones: "Logitech C925e Full_HD con tapa".toUpperCase(),
        color:"negro",
        precio: 7599,
        stockFijo: 1,
        stockVariable: 1,
        img: "images/webCam_Logitech_C925e_Full_HD_con_tapa.jpg", 
        largoCable : "1.6m",
        usb: "si",
        conexion: "cable",
        compatibilidad: "PC con windows 7 / macOS10.7 o posterior",    
    },

    {
        id: 20, 
        producto: "WEBCAM", 
        marca: "Redragon".toUpperCase(),
        especificaciones: "Redragon GW800 Hitman 1080p".toUpperCase(),
        color:"negro",
        precio: 5999,
        stockFijo: 6,
        stockVariable: 6,
        img: "images/webcam_Redragon_GW800_Hitman_1080p.jpg",
        largoCable : "1.5m",
        usb: "si",
        conexion: "cable",
        compatibilidad: "PC con windows 7 / macOS10.7 o posterior",     
    }
]