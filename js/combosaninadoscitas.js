//carga combo aninado de medico
$(document).on('change', '[data-cascade-combo]', function (event) {
	console.log("entro");

	var id = $(this).attr('data-cascade-combo');

	var url = $(this).attr('data-cascade-combo-source');

	var paramName = $(this).attr('data-cascade-combo-param-name');

	var data = {};
	data[paramName] = id;

	$.ajax({
		type: "GET",
		url: url,
		data: {
			id: $(this).val()
		},
		contentType: "application/json; charset=utf-8",
		dataType: "Json",
		success: function (data) {
			$(id).html('');

			$.each(data,
				function (index, type) {
					var content = '<option value="' + type.idMedico + '">' + type.nombres + '</option>';
					$(id).append(content);
				});
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
});


// carga combo de cronograma segun medico
$(document).on('change', '[data-cascade-combo-medico]', function (event) {
	console.log("entro");

	var id = $(this).attr('data-cascade-combo-medico');

	var url = $(this).attr('data-cascade-combo-source-medico');

	var paramName = $(this).attr('data-cascade-combo-param-name-medico');

	var data = {};
	data[paramName] = id;

	$.ajax({
		type: "GET",
		url: url,
		data: {
			id: $(this).val()
		},
		contentType: "application/json; charset=utf-8",
		dataType: "Json",
		success: function (data) {
			$(id).html('');
			$.each(data,
				function (index, type) {
					var content = '<option value="' + type.idprogramMed + '">' + type.fecprogram + '</option>';
					$(id).append(content);
				});
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
});

// carga combo de horas segun cronograma
$(document).on('change', '[data-cascade-combofec]', function (event) {
	console.log("entro");

	var id = $(this).attr('data-cascade-combofec');

	var url = $(this).attr('data-cascade-combo-sourcefec');

	var paramName = $(this).attr('data-cascade-combo-param-namefec');

	var data = {};
	data[paramName] = id;

	$.ajax({
		type: "GET",
		url: url,
		data: {
			id: $(this).val()
		},
		contentType: "application/json; charset=utf-8",
		dataType: "Json",
		success: function (data) {
			$(id).html('');
			$.each(data,
				function (index, type) {
					var content = '<option value="' + type.id + '">' + type.hora + '</option>';
					$(id).append(content);
				});
		},
		failure: function (response) {
			alert(response.responseText);
		},
		error: function (response) {
			alert(response.responseText);
		}
	});
});

$(document).on('change', '#horaate', function (event) {

	var text = $("#horaate option:selected").text();
	$('#deshora').val(text);
});
$(document).on('change', '#fecate', function (event) {
	var text = $("#fecate option:selected").text();
	$('#desfecha').val(text);
});