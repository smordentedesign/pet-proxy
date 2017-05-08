$(document).ready(function () {

    $('#dialog-modal-archive').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "archive") {
            $('#dialog-modal-archive').dialog('open');
        }
    });

    $('#dialog-modal-high').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "high") {
            $('#dialog-modal-high').dialog('open');
        }
    });

    $('#dialog-modal-available').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "available") {
            $('#dialog-modal-available').dialog('open');
        }
    });

    $('#dialog-modal-low').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "low") {
            $('#dialog-modal-low').dialog('open');
        }
    });

    $('#dialog-modal-hide').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "hide") {
            $('#dialog-modal-hide').dialog('open');
        }
    });

    $('#dialog-modal-delete').dialog({
        modal: true,
        autoOpen: false
    });

    $('select').change(function () {
        if ($(this).val() == "delete") {
            $('#dialog-modal-delete').dialog('open');
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
