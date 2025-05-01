class Parquimetro {
    constructor(valorPago) {
        this.valorPago = valorPago;
        this.tempo = 0;
        this.valorMin = 1.0;
        this.valorMax = 3.0;
        this.troco = 0;
        this.error = false;

    }
    calcular() {
        if (this.valorPago < this.valorMin || this.valorPago > this.valorMax || Number.isNaN(this.valorPago)) {
            this.error = true;

        } else if (this.valorPago >= this.valorMin && this.valorPago < 1.75) {
            this.tempo = 30;
            this.troco = this.calcularTroco(this.valorMin)
              

        } else if (this.valorPago >= 1.75 && this.valorPago < this.valorMax) {
            this.tempo = 60;
            this.troco = this.calcularTroco(1.75)
           
        }

        else if (this.valorPago = this.valorMax) {
            this.tempo = 120;
        
        }

        return this;

    }
    calcularTroco(valor) {
        return (this.valorPago - valor).toFixed(2)

    }

}

document.addEventListener('submit', function (e) {
    e.preventDefault();

    let valorPago = parseFloat(document.getElementById("valorPago").value);

    const parquimetro = new Parquimetro(valorPago)

    let troco = parquimetro.calcular();

    if (parquimetro.error) {
        document.getElementById("insuficiente").textContent = "Insira um valor entre 1,00 e 3,00";
        return;
    }

    else if(this.valorPago >= this.valorMin && this.valorPago < 1.75){
        document.getElementById("tempoD").textContent = "Tempo: 30 minutos";

    }

    else if(this.valorPago >= 1.75 && this.valorPago < this.valorMax){
        document.getElementById("tempoD").textContent = "Tempo: 60 minutos";

    }

    else if(this.valorPago = this.valorMax){
        document.getElementById("tempoD").textContent = "Tempo: 120 minutos";
       }

    



    

console.log(parquimetro.tempo)
console.log(parquimetro.troco)



});

//* } else if (this.valorPago >= 1.75 && this.valorPago < 3.0){
//*  this.tempo = 60;
//*  this.troco = this.valorPago - 1.75;

//* } proximo e colocar as infos no html