function mostrarFormComuniquemonos() {
    document.getElementById("formComuniquemonos").setAttribute('class', 'form d-flex mb-3 d-lg-block justify-content-center align-items-center text-center p-5');
}

document.getElementById("comuniquemonos").onclick = mostrarFormComuniquemonos;

function mostrarFormReserva() {
    document.getElementById("formReservas").setAttribute('class', 'form d-lg-block mb-4 justify-content-center align-items-center text-center p-5');
}

document.getElementById("reservas").onclick = mostrarFormReserva;

$(document).ready(function() {
    let inputsFormComuniquemonos = $(".infoComuniquemonos")
    console.log(inputsFormComuniquemonos)
    $("#botonComuniquemonos").click(function() {
        for (let i = 0; i < inputsFormComuniquemonos.length; i++) {
            let inputsEnRotacion = inputsFormComuniquemonos[i];
            if(inputsEnRotacion.value == ""){
                alert(`El campo ${inputsEnRotacion.name} es obligatorio`)
            }}
        if (inputsFormComuniquemonos[0].value != "" && inputsFormComuniquemonos[1].value != "" && inputsFormComuniquemonos[2].value != "" && inputsFormComuniquemonos[3].value != "") {
            alert(`Muchas gracias ${inputsFormComuniquemonos[0].value} hemos recibido su reserva y enviaremos una pronta respuesta a ${inputsFormComuniquemonos[1].value}`)
        }
    })

    let inputsFormReserva = $(".infoReservas")
    console.log(inputsFormReserva)
    $("#botonReservar").click(function() {
        for (let i = 0; i < inputsFormReserva.length; i++) {
            let inputsEnRotacion = inputsFormReserva[i];
            if(inputsEnRotacion.value == ""){
                alert(`El campo ${inputsEnRotacion.name} es obligatorio`)
            }}
        if (inputsFormReserva[0].value != "" && inputsFormReserva[1].value != "" && inputsFormReserva[2].value != "" && inputsFormReserva[3].value != "" && inputsFormReserva[4].value != "" && inputsFormReserva[5].value != "") {
            alert(`Estimada ${inputsFormReserva[0].value} agradecemos por reservar con nosotros. Hemos registrado ${inputsFormReserva[5].value}. Se ha enviado el código de información al correo ${inputsFormReserva[1].value}`)
        }
    })

})

const modalCard1 = document.querySelector("#modal-card1")
const modalCard2 = document.querySelector("#modal-card2")
const modalCard3 = document.querySelector("#modal-card3")
const modalCard4 = document.querySelector("#modal-card4")

function mostrar1() {
    modalCard1.style.display = "block";
}

function mostrar2() {
    modalCard2.style.display = "block";
}

function mostrar3() {
    modalCard3.style.display = "block";
}

function mostrar4() {
    modalCard4.style.display = "block"
}

modalCard1.onclick = ocultar;
modalCard2.onclick = ocultar;
modalCard3.onclick = ocultar;

function ocultar() {
    this.style.display = "none"
}

function ocultarModal4() {
    modalCard4.style.display = "none"
}