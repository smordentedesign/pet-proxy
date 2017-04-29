jQuery(document).ready(function($){

  $('#toggleNav').on('click', function(event){
    event.preventDefault();

      $(this).toggleClass('active');
      $('.mobileNav').toggleClass('active');
  });



});
