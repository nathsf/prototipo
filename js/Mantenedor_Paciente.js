//Cargar datos en la tabla cuando los documentos están listos
$(document).ready(function () {
    // loadData();
    camposlongitud();
});

$(document).on('change', '#cbotppac', function (event) {
    var value = $("#cbotppac option:selected").val();
    if (value == 121) {
        $('#divpacconv').show();
        $('#divpaccomp').show();
        $('#divpacotros').show();
        $('#actconvenio').show();
        $('#actcompañia').hide();
    } else if (value == 120) {
        $('#divpacconv').show();
        $('#divpaccomp').show();
        $('#divpacotros').show();
        $('#actcompañia').show();
        $('#actconvenio').hide();
    } else {
        $('#divpacconv').hide();
        $('#divpaccomp').hide();
        $('#divpacotros').hide();
        $('#actcompañia').hide();
        $('#actconvenio').hide();
    }

});


(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57))
        return false;

    return true;
}

function camposlongitud() {
    $('#numeroDocumento').attr('maxlength', '8');
    $('#celular').attr('maxlength', '9');
    $('#ruc').attr('maxlength', '11');
    $('#edad').attr('maxlength', '3');
}

function soloNumeros(e) {

    var key = window.Event ? e.which : e.keyCode

    return (key >= 48 && key <= 57)

}




//Agregar función de datos
function Add() {
    var res = validate();
    if (res == false) {
        return false;
    }
    var paciObj = {
        idPaciente: $('#idPaciente').val(),
        apellidopat: $('#apepat').val(),
        apellidomat: $('#apemat').val(),
        nombre: $('#nombrepac').val(),
        sexo: $('#sexo').val(),
        fechNac: $('#fechnac').val(),
        edad: $('#edad').val(),
        ocupacion: $('#ocupacionpac').val(),
        gradinstruccion: $('#grdinstruccion').val(),
        estadoCivil: $('#estadocivil').val(),
        correo: $('#correopac').val(),
        celular: $('#celular').val(),
        dniPac: $('#nrodni').val()
    };
    $.ajax({
        url: "/Paciente/Add",
        data: JSON.stringify(paciObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            alert("Paciente registrado");
            loadData();
            $('#myModal').modal('hide');
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}

//Función para obtener los datos basados ​​en la identificación del paciente
function getbyID() {
    var ID = $('#id').val();
    /*   $('#APELLIDOPAT').css('border-color', 'lightgrey');
       $('#APELLIDOMA').css('border-color', 'lightgrey');
       $('#NOMBRE').css('border-color', 'lightgrey');
       $('#SEXO').css('border-color', 'lightgrey');
       $('#FCHNAC').css('border-color', 'lightgrey');
       $('#EDAD').css('border-color', 'lightgrey');
       $('#OCUPACION').css('border-color', 'lightgrey');
       $('#GRDINSTRUCCION').css('border-color', 'lightgrey');
       $('#ESTADOCIVIL').css('border-color', 'lightgrey');
       $('#CORREO').css('border-color', 'lightgrey');
       $('#CELULAR').css('border-color', 'lightgrey');*/

    $.ajax({
        url: "/Paciente/getbyID/" + ID,
        typr: "GET",
        contentType: "application/json;charset=UTF-8",
        dataType: "json",
        success: function (result) {
            $('#idPaciente').val(result.idPaciente);
            $('#apepat').val(result.apellidopat);
            $('#apemat').val(result.apellidomat);
            $('#nombrepac').val(result.nombre);
            $('#sexo').val(result.sexo);
            $('#fechnac').val(result.fechNac);
            $('#edad').val(result.edad);
            $('#ocupacionpac').val(result.ocupacion);
            $('#grdinstruccion').val(result.gradinstruccion);
            $('#estadocivil').val(result.estadoCivil);
            $('#correopac').val(result.correo);
            $('#celular').val(result.celular);
            $('#nrodni').val(result.dniPac);
            $('#myModal').modal('show');
            $('#btnUpdate').show();
            $('#btnAdd').hide();
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
    return false;
}
//function for updating employee's record
function Update() {
    var res = validate();
    if (res == false) {
        return;
    }
    var medicObj = {
        idPaciente: $('#idPaciente').val(),
        apellidopat: $('#apepat').val(),
        apellidomat: $('#apemat').val(),
        nombre: $('#nombrepac').val(),
        sexo: $('#sexo').val(),
        fechNac: $('#fechnac').val(),
        edad: $('#edad').val(),
        ocupacion: $('#ocupacionpac').val(),
        gradinstruccion: $('#grdinstruccion').val(),
        estadoCivil: $('#estadocivil').val(),
        correo: $('#correopac').val(),
        celular: $('#celular').val(),
        dniPac: $('#nrodni').val()
    };
    $.ajax({
        url: "/Paciente/Update",
        data: JSON.stringify(medicObj),
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            alert("Paciente actualizado");
            loadData();
            $('#myModal').modal('hide');
            $('#idPaciente').val("");
            $('#apepat').val("");
            $('#apemat').val("");
            $('#nombrepac').val("");
            $('#sexo').val("");
            $('#fechnac').val("");
            $('#edad').val("");
            $('#ocupacionpac').val("");
            $('#grdinstruccion').val("");
            $('#estadocivil').val("");
            $('#correopac').val("");
            $('#celular').val("");
            $('#nrodni').val("");
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}
//function for deleting employee's record
function Delele(ID) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $.ajax({
            url: "/Paciente/Delete/" + ID,
            type: "POST",
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (result) {
                loadData();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}
//Function for clearing the textboxes
function clearTextBox() {
    $('#idPaciente').val("");
    $('#apepat').val("");
    $('#apemat').val("");
    $('#nombrepac').val("");
    $('#sexo').val("");
    $('#fechnac').val("");
    $('#edad').val("");
    $('#ocupacionpac').val("");
    $('#grdinstruccion').val("");
    $('#estadocivil').val("");
    $('#correopac').val("");
    $('#celular').val("");
    $('#nrodni').val("");




    $('#btnUpdate').hide();
    $('#btnAdd').show();
    $('#APELLIDOPAT').css('border-color', 'lightgrey');
    $('#APELLIDOMA').css('border-color', 'lightgrey');
    $('#NOMBRE').css('border-color', 'lightgrey');
    $('#SEXO').css('border-color', 'lightgrey');
    $('#FCHNAC').css('border-color', 'lightgrey');
    $('#EDAD').css('border-color', 'lightgrey');
    $('#OCUPACION').css('border-color', 'lightgrey');
    $('#GRDINSTRUCCION').css('border-color', 'lightgrey');
    $('#ESTADOCIVIL').css('border-color', 'lightgrey');
    $('#CORREO').css('border-color', 'lightgrey');
    $('#CELULAR').css('border-color', 'lightgrey');

}
//Valdidation using jquery
function validate() {
    var isValid = true;
    if ($('#apepat').val().trim() == "") {
        // $('#apepat').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }
    if ($('#apemat').val().trim() == "") {
        //    $('#apemat').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }
    if ($('#nombrepac').val().trim() == "") {
        //$('#nombrepac').css('border-color', 'Red');
        isValid = false;
    }
    else {
        //  $('#NOMBRE').css('border-color', 'lightgrey');

    }
    if ($('#sexo').val().trim() == "") {
        //  $('#SEXO').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }

    if ($('#fechnac').val().trim() == "") {
        // $('#FCHNAC').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }
    if ($('#edad').val().trim() == "") {
        //  $('#EDAD').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }

    if ($('#ocupacionpac').val().trim() == "") {
        //  $('#OCUPACION').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }
    if ($('#grdinstruccion').val().trim() == "") {
        //$('#GRDINSTRUCCION').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }


    if ($('#estadocivil').val().trim() == "") {
        //  $('#ESTADOCIVIL').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }

    if ($('#correopac').val().trim() == "") {
        //   $('#CORREO').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }

    if ($('#celular').val().trim() == "") {
        //  $('#CELULAR').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }
    if ($('#nrodni').val().trim() == "") {
        // $('#nrodni').css('border-color', 'Red');
        isValid = false;
    }
    else {

    }
    return isValid;

}

function buscar() {
    if (event.key === "Enter") {
        Search();
    }
}


function Search() {

    searchPacienteDni(dni);
}


function searchPacienteDni(dni) {
    var dni = $("#filtxtdni").val();
    var medicObj = {
        dniPac: dni
    };
    $.ajax({
        type: "POST",
        url: "/Paciente/Buscar",
        data: JSON.stringify(medicObj),
        contentType: 'application/json; charset=utf-8',
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status + " \n" + xhr.responseText, "\n" + thrownError);
            alert('No exite el paciente con dni ' + dni);
            limpiarDatosPaciente();
        },
        success: function (data) {
            console.log(data);
            llenarDatosPaciente(data);


        }
    });
}

function llenarDatosPaciente(obj) {
    $("#nombrepaciente").html(obj.NOMBRES + ' ' + obj.APEPAT + ' ' + obj.APEMAT);
    $("#dni").val(obj.NRODOC);
    $("#nrohis").val(obj.celular);
    $("#ocupacion").val(obj.DESOCUPACION);
    $("#id").val(obj.IDPACIEBTE);
    $("#correo").val(obj.correo);
}

function limpiarDatosPaciente() {
    $("#nombrepaciente").val("");
    $("#dni").val("");
    $("#nrohis").val("");
    $("#ocupacion").val("");
}

