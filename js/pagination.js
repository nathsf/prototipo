$(document).ready(function() {
    $('#example').DataTable( {
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
        }
    } );
} );

$("li.nav-item.menu-burger").hover(
  function () {
    $("aside").addClass('open');
  }, 
  function () {
    $("aside").removeClass('open');
  }
  );