class Empanada{
    constructor(gusto,cantidad){
        this.gusto=gusto
        this.cantidad=cantidad
        this.valor=20
    }
    sumarCantidad(){
        this.cantidad+=1
    }
    restarCantidad(){
        if(this.cantidad>0){
            this.cantidad-=1
        }
    }
}
class HacerPedidoSrvc{
    constructor(){
        this.cantEmpanadasTotal=0
        this.pedido = [
            new Empanada('CARNE LA REINA',2),
            new Empanada('QUESO Y CEBOLLA',0),
            new Empanada('ROQUEFORT Y APIO',1),
            new Empanada('HUMITA',1),
            new Empanada('ATUN',0),
            new Empanada('CAPRESE',0)
        ]
    }
    getEmpanadasCompradas() {
        return this.pedido.filter(cantidad>0);
    }
    getCantidadTotal(){
        var i = 0
        for (i; i<this.pedido.size; i++){
            this.cantEmpanadasTotal+=this.pedido.get(i).cantidad
        }
        return this.cantEmpanadasTotal
    }
}