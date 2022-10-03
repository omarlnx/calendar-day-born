

function myFunction() {  

const dia = parseInt(document.getElementById("dia").value)
const mes = parseInt(document.getElementById("mes").value)-1
const anio = parseInt(document.getElementById("anio").value)
const fechaActual=new Date(anio,mes,dia)
const diaSemana=fechaActual.getDay()

switch (diaSemana) {
    case 0:
        diacalc = "Este dia fue Domingo, Dia no laboral";
        break;
    case 1:
        diacalc = "Este dia fue Lunes";
        break;
    case 2:
        diacalc = "Este dia fue Martes";
        break;
    case 3:
        diacalc = "Este dia fue Miercoles";
        break;
    case 4:
        diacalc = "Este dia fue Jueves"
        break;
    case 5:
        diacalc = "Este dia fue Viernes"
        break;
    case 6:
        diacalc = "Este dia fue Sábado, Dia no laboral"
        break;
}
document.getElementById("calculo").innerHTML = diacalc;
}
