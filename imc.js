/**
 * Cálculo do IMC
 * @author Professor José de Assis
 */

 function calcularImc(){
     let peso, altura, imc
     peso = parseFloat(frmImc.txtPeso.value.replace(",","."))
     altura = parseFloat(frmImc.txtAltura.value.replace(",","."))
     imc = peso / (altura * altura)
     frmImc.txtImc.value = imc.toFixed(2)
     
     if (imc < 17){
        frmImc.vlrAvaliacao.value = "muito abaixo do peso"
     }
     else if (imc >= 17 && imc <= 18.49){
        frmImc.vlrAvaliacao.value = "abaixo do peso"
     }
     else if (imc >= 18.50 && imc <= 24.99){
        frmImc.vlrAvaliacao.value = "peso normal"
     }
     else if (imc >= 25 && imc <= 29.99){
        frmImc.vlrAvaliacao.value = "acima do peso"
     }
     else if (imc >= 30 && imc <= 34.99){
        frmImc.vlrAvaliacao.value = "obesidade I"
     }
     else if (imc >= 35 && imc <= 39.99){
        frmImc.vlrAvaliacao.value = "obesidade II"
     }
     else {
        frmImc.vlrAvaliacao.value = "obesidade III"
     }
}    