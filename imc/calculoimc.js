/**
 * Calculo do IMC
 * @author Vinicius Villela
 */

    function calcularImc(){
let Peso, Altura, IMC
let Indice
Peso = parseFloat(frmImc.vlrPeso.value.replace(",","."))
Altura = parseFloat(frmImc.vlrAltura.value.replace(",","."))
IMC = Peso / (Altura * Altura)
frmImc.vlrImc.value = IMC.toFixed(2)

if(IMC < 17)
{
    frmImc.vlrIndice.value = "Muito abaixo do peso"
    Indice = 1
}
else if(IMC >= 17 && IMC <= 18.49)
{
    frmImc.vlrIndice.value = "Abaixo do peso"
    Indice = 2
}
else if(IMC >= 18.50 && IMC <= 24.99)
{
    frmImc.vlrIndice.value = "Peso normal"
    Indice = 3
}
else if(IMC >= 25 && IMC <= 29.99)
{
    frmImc.vlrIndice.value = "Acima do peso"
    Indice = 4
}
else if(IMC >= 30 && IMC <= 34.99)
{
    frmImc.vlrIndice.value = "Obesidade I"
    Indice = 5
}
else if(IMC >= 35 && IMC <= 39.99)
{
    frmImc.vlrIndice.value = "Obesidade II"
    Indice = 6
}
else if(IMC >= 40)
{
    frmImc.vlrIndice.value = "Obesidade III"
    Indice = 7
}
    switch(Indice)
{
    case 1:
    document.getElementById("imc").src = "imc1.png"
    break
    case 2:
    document.getElementById("imc").src = "imc2.png"
    break
    case 3:
    document.getElementById("imc").src = "imc3.png"
    break
    case 4:
    document.getElementById("imc").src = "imc4.png"
    break
    case 5:
    document.getElementById("imc").src = "imc5.png"
    break
    case 6:
    document.getElementById("imc").src = "imc6.png"
    break
    case 7:
    document.getElementById("imc").src = "imc7.png"
    break
}

}
