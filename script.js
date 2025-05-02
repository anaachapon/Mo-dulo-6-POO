class Parquimetro {
    constructor(valorPago) {
        this.valorPago = valorPago;
        this.tempo = 0;
        this.valorMin = 1.0;
        this.troco = 0;
        this.error = false;

    }
    calcular() {
        if (this.valorPago < this.valorMin || Number.isNaN(this.valorPago)) {
            this.error = true;

        } else if (this.valorPago >= this.valorMin && this.valorPago < 1.75) {
            this.tempo = 30;
            this.troco = this.calcularTroco(this.valorMin)
              

        } else if (this.valorPago >= 1.75 && this.valorPago < 3.0) {
            this.tempo = 60;
            this.troco = this.calcularTroco(1.75)
           
        }

        else if (this.valorPago >= 3.0 ) {
            this.tempo = 120;
            this.troco = this.calcularTroco(3.00)  
            document.getElementById("max").textContent = "O tempo máximo é 120min ";      
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
        document.getElementById("insuficiente").textContent = "O valor míninimo é 1,00";
        return;
    }

   
   document.getElementById("tempoD").textContent = "Tempo: " + parquimetro.tempo;
   document.getElementById("troco").textContent = "Troco: " + parquimetro.troco;
   

 

});

//* } else if (this.valorPago >= 1.75 && this.valorPago < 3.0){
//*  this.tempo = 60;
//*  this.troco = this.valorPago - 1.75;

//* } proximo e colocar as infos no html