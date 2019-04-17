/**
 * Menu de aplicativos
 * @author Vinicius Villela
 */

    function abrirApp()
{
let Numero
Numero = parseInt(frmMenu.vlrApp.value)
switch(Numero)
{
    case 1:
        window.location = 
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/imc/index.html"
        break
    case 2:
        window.location =
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/temperatura/index.html"
        break
    case 3:
        window.location = 
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/churros/index.html"
        break
    case 4:
        window.location =
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/conversao/index.html"
        break
    case 5:
        window.location = 
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/jogoDado/index.html"
        break
    case 6:
        window.location = 
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/valorservico/index.html"
        break
    case 7:
        window.location =
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/raio/index.html"
        break
    case 8:
        window.location =
        "/C:/Users/vinicius.vfoliveira/Desktop/Lógica/pdv/index.html"
        break
    }
}