/**
 * Valor do Churros
 * @author Vinicius e Murillo
 */

function calcularTotal(){
    let KGCarne, Breja, Refri, Homens, Mulheres, Criancas, TotalCarne, TotalCerveja, TotalRefri, DivisaoHeM
    Criancas = parseFloat(frmChurros.vlrCriancas.value.replace(",","."))
    Mulheres = parseFloat(frmChurros.vlrMulheres.value.replace(",","."))
    Homens = parseFloat(frmChurros.vlrHomens.value.replace(",","."))
    KGCarne = parseFloat(frmChurros.vlrKGCarne.value.replace(",","."))
    Breja = parseFloat(frmChurros.vlrBreja.value.replace(",","."))
    Refri = parseFloat(frmChurros.vlrRefri.value.replace(",","."))
    TotalCarne = parseFloat(frmChurros.vlrTotalCarne.value.replace(",","."))
    TotalCerveja = parseFloat(frmChurros.vlrTotalCerveja.value.replace(",","."))
    TotalRefri = parseFloat(frmChurros.vlrTotalRefrigerante.value.replace(",","."))
    DivisaoHeM = parseFloat(frmChurros.vlrHomemMulher.value.replace(",","."))
    Total = (Breja * 12) * Homens + (Breja * 4) * Mulheres + (Breja * 0) * Criancas + ((KGCarne * 30) / 100) * Homens + ((KGCarne * 30) / 100) * Mulheres + ((KGCarne * 10) / 100) * Criancas + (Refri * 0) * Homens + (Refri * 4) * Mulheres + (Refri * 4) * Criancas
    frmChurros.vlrTotal.value = Total
    TotalCerveja = (Breja * 12) * Homens + (Breja * 4) * Mulheres + (Breja * 0) * Criancas
    TotalCarne = ((KGCarne * 30) / 100) * Homens + ((KGCarne * 30) / 100) * Mulheres + ((KGCarne * 10) / 100) * Criancas
    TotalRefri = (Refri * 0) * Homens + (Refri * 4) * Mulheres + (Refri * 4) * Criancas
    frmChurros.vlrTotalCarne.value = TotalCarne
    frmChurros.vlrTotalCerveja.value = TotalCerveja
    frmChurros.vlrTotalRefrigerante.value = TotalRefri
    DivisaoHeM = Total / (Homens + Mulheres)
    frmChurros.vlrHomemMulher.value = DivisaoHeM
}
