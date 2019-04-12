/**
 * Conversao real para dolar
 * @author Vinicius e Murillo
 */

function converterDolar(){
    let Real, Dolar
    Real = parseFloat(frmGrana.vlrReal.value.replace(",","."))
    Dolar = parseFloat(frmGrana.vlrDolar.value.replace(",","."))
    Resultado = Dolar * Real
    frmGrana.vlrResultado.value = Resultado
}