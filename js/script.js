$(document).ready(function() {

  $(".dropdown").hover(
    function() {
      $(".dropdown-menu").stop(true, true).slideDown('fast');
    },
    function() {
        $(".dropdown-menu").stop(true, true).slideUp('fast');
    }
  );





});
