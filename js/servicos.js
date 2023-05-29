var horaBaseReais
var diaDaSemana
const adicionalPorMinuto = 0.50
function calcularHora() {
    diaDaSemana = Number(document.getElementById("dia-semana").value)
    console.log(diaDaSemana)
    if(diaDaSemana <= 4){
        horaBaseReais = 45
    } else {
        horaBaseReais = 60
    }
    var horaExtra = Number(document.getElementById("tempo-adicional").value)
    var valorDaHora = horaBaseReais + (horaExtra*adicionalPorMinuto)
    valorDaHora = valorDaHora.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    horaBaseReais = horaBaseReais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    alert("O valor da pista ficou em: "+valorDaHora+"\nSendo o valor base: "+horaBaseReais)
}