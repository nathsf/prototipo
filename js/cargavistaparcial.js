$(document).ready(function () {
	$("#success-alert").fadeOut(1500).slideUp(300, function () {
		$("#success-alert").slideUp(700);
	});
	//iniciar radio button
	var id = $('input:radio[name=radiofiltro]:checked').val();
	if (id == 1) {
		$('#dni').prop('disabled', false);
		$('#nombre').prop('disabled', true);
		$('#apellidos').prop('disabled', true);
	} else {
		$('#dni').prop('disabled', true);
		$('#nombre').prop('disabled', false);
		$('#apellidos').prop('disabled', false);
	}

	//evento click radio button filtro de pacientes
	$("input[name=radiofiltro]").click(function () {
		
		var id = $(this).val();
		if (id == 1) {
			$('#dni').prop('disabled', false);
			$('#nombre').prop('disabled', true);
			$('#apellidos').prop('disabled', true);
		} else {
			$('#dni').prop('disabled', true);
			$('#nombre').prop('disabled', false);
			$('#apellidos').prop('disabled', false);
        }
	});


	$("#cronogramagrid .edit").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Cronograma/Editar",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#exampleModal').html(response);
				$('#exampleModal').modal('show');
				$.validator.unobtrusive.parse("#frmeditarcronograma");
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});


	$("#personalgrid .edit").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Persona/Editar",
			data: { idpersona: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalestado').html(response);
				$('#modalestado').modal('show');
				$.validator.unobtrusive.parse("#frmeditarpersona");
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#citamedicogrid .edit").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Cita/CambiarEstadoCita",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalcambiarestado').html(response);
				$('#modalcambiarestado').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#citagrid .anular").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Cita/AnularCita",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalanular').html(response);
				$('#modalanular').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});


	$("#citagrid .edit").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Cita/Edit",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalreprogramar').html(response);
				$('#modalreprogramar').modal('show');
				$.validator.unobtrusive.parse("#frmeditcita");
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#citagrid .detail").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Cita/Details",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modaldetalle').html(response);
				$('#modaldetalle').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});


	$("#personalgrid .asig").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Persona/Asignar",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalasignar').html(response);
				$('#modalasignar').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#personalgrid .delete").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Persona/Delete",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modaldeletepersona').html(response);
				$('#modaldeletepersona').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});


	$("#cronogramagrid .delete").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Cronograma/Delete",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modaldeletecrono').html(response);
				$('#modaldeletecrono').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#generalgrid .edit").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Tablas/EditarTipo",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modaleditartipo').html(response);
				$('#modaleditartipo').modal('show');
				$.validator.unobtrusive.parse("#frmeditartipo");

			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#detallegrid .edit").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Tablas/EditarDetalle",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modaleditardetalle').html(response);
				$('#modaleditardetalle').modal('show');
				$.validator.unobtrusive.parse("#frmeditardetalle");
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#generalgrid .delete").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Tablas/DeleteTipo",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalanulartipo').html(response);
				$('#modalanulartipo').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

	$("#detallegrid .delete").click(function () {
		var id = $(this).closest("tr").find("td").eq(0).html();
		$.ajax({
			type: "GET",
			url: "/Tablas/DeleteDetalle",
			data: { id: id },
			contentType: "application/json; charset=utf-8",
			dataType: "html",
			success: function (response) {
				$('#modalanulardetalle').html(response);
				$('#modalanulardetalle').modal('show');
			},
			failure: function (response) {
				alert(response.responseText);
			},
			error: function (response) {
				alert(response.responseText);
			}
		});
	});

});

$(document).on('change', '#idmedico', function (event) {

	console.log("entro");
	BuscarCronograma();

});

$(document).on('change', '#cboafilia', function (event) {

	var id = $("#cboafilia option:selected").val();
	if (id == 1) {
		$("#caja").prop('disabled',false);
	} else {
		$("#caja").prop('disabled', true);
    }
});


function cargarmodalCrearTipo() {
	$.ajax({
		type: "GET",
		url: "/Tablas/AgregarTipo",
		contentType: "application/json; charset=utf-8",
		dataType: "html",
		success: function (response) {
			$('#modalagregartipo').html(response);
			$('#modalagregartipo').modal('show');
			$.validator.unobtrusive.parse("#frmregistrartipo");
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
}

function cargarmodalCrearDetalle() {
	var id = $('#idTab').val();
	$.ajax({
		type: "GET",
		url: "/Tablas/AgregarDetalle",
		data: { id: id },
		contentType: "application/json; charset=utf-8",
		dataType: "html",
		success: function (response) {
			$('#modalagregardetalle').html(response);
			$('#modalagregardetalle').modal('show');
			$.validator.unobtrusive.parse("#frmregistrardetalle");
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
}

function CargaConsultaCronograma() {
	$.ajax({
		type: "GET",
		url: "/Cronograma/ConsultarCronograma",
		contentType: "application/json; charset=utf-8",
		dataType: "html",
		success: function (response) {
			$('#modalcronograma').html(response);
			$('#modalcronograma').modal('show');
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
}


function BuscarCronograma() {

	var idespecialidad = $("#especialidad option:selected").val();
	var nombre = $("#nombremedico").val();
	var apellido = $("#apellidomedico").val(); ''

	$.ajax({
		url: "/Cronograma/ConsultarCronogramapost",
		data: { idespecialidad: idespecialidad, nombre: nombre, apellido: apellido },
		type: "GET",
		contentType: "application/json; charset=utf-8",
		dataType: "html",
		success: function (response) {
			$('#modalcronograma').html(response);
			$('#modalcronograma').modal('show');
			console.log(response);
			//$('#modalestado').modal('show');
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
}


function CargaModalCitas() {
	var dni = $("#numeroDocumento").val()
	$.ajax({
		type: "GET",
		url: "/Cita/Registro",
		data: { dni: dni },
		contentType: "application/json; charset=utf-8",
		dataType: "html",
		success: function (response) {
			$('#modalcitas').html(response);
			$('#modalcitas').modal('show');
			$.validator.unobtrusive.parse("#frmregistrarcita");
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
}

function BuscarPaciente() {
	var id = $('#modalcitas #dni').val();
	var idEmpleado = $("#modalcitas #medico option:selected").val();
	$.ajax({
		type: "GET",
		url: "/Cita/BuscarDni",
		data: { dni: id },
		contentType: "application/json; charset=utf-8",
		dataType: "Json",
		success: function (response) {
			console.log(response);
			$('#modalcitas #nombrepaciente').val(response.nombres + ' ' + response.apellidoPaterno + ' ' + response.apellidoMaterno);
			console.log(response.paciente.idPaciente);
			$('#modalcitas #idpaciente').val(response.paciente.idPaciente);

		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
}