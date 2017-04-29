$(document).ready(function () {

    $('#dialog-modal').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "1") {
            $('#dialog-modal').dialog('open');
        }
    });
    $('select').change(function () {
        if ($(this).val() == "2") {
            $('#dialog-modal').dialog('open');
        }
    });

});

$(document).ready(
  function() {

   $("#show").change(
      function() {
        $("#show option:selected").each(
   function() {   $('.pix').hide().filter('#'+$(this).text()).fadeIn();

          }
        ); //endeach
      }
    ); //endchange
  }
);
