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
					var content = '<option value="' + type.idtab + '">' + type.descripcion + '</option>';
					console.log(content);
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