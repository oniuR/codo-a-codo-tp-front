const PRECIO=200;
function calcular_precio(precio,cantidad,descuento){
    cantidad=Math.floor(Number(cantidad));
    if (typeof cantidad !== 'number' || isNaN(cantidad) || cantidad < 1) {
        return ""
    }
    descuento=100-Math.floor(Number(descuento)); 
    return precio*cantidad*descuento/100;
}

function imprimir(){
    document.getElementById("mostrar_precio").value="Total a pagar: $ "+calcular_precio(PRECIO,document.getElementById("cantidad").value,document.getElementById("categoria").value);
}
function borrar_datos(){
    document.getElementById("nombre").value=""
    document.getElementById("apellido").value=""
    document.getElementById("correo").value=""
    document.getElementById("cantidad").value=""
    document.getElementById("mostrar_precio").value="Total a pagar: $ "
}
document.getElementById("resumen").addEventListener("click",imprimir);
document.getElementById("borrar").addEventListener("click",borrar_datos);