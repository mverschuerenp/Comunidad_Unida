function deleteReserva(reservaRut) {
    //contact server
    return $.ajax({
        method: "delete",
        url: `/admin/${reservaRut}`,
        contentType: "application/json",
        cache: false,
        success: () => {
            location.reload();
        },
        error: (error) => {
            console.error(error);
        },
    });
}

function validateDelete(reservaRut) {
    console.log(reservaRut);
    var res = confirm("¿Seguro que quieres borrar la reserva?");
    if (res) {
        deleteReserva(reservaRut);
        return true;
    }
    else {
        return false;
    }
}

function validateForm() {
    var nombre = document.forms["reservar"]["nombre"].value;
    var depto = document.forms["reservar"]["depto"].value;
    var espacio = document.forms["reservar"]["espacio"].value;
    var dia = document.forms["reservar"]["dia"].value;
    var hora = document.forms["reservar"]["hora"].value;
    var nhoras = document.forms["reservar"]["nhoras"].value;
    if (nombre == "") {
        alert("Por favor ingrese su nombre.");
        return false;
    }
    else if (depto == "") {
        alert("Por favor ingrese el numero de su departamento");
        return false;
    }
    else if (espacio == "") {
        alert("Por favor seleccione un espacio para reservar.");
        return false;
    }
    else if (dia == "") {
        alert("Por favor seleccione un dia.");
        return false;
    }
    else if (hora == "") {
        alert("Por favor seleccione una hora.");
        return false;
    }
    else if (nhoras == "") {
        alert("Por favor seleccione la cantidad de horas que quiera reservar.");
        return false;
    }
    else {
        alert("Hora reservada con exito!");
        return true;
    }
}