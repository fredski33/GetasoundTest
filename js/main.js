$(document).ready(function (e) {
  $('#message').keyup(function () {
    let wordNumber = $(this).val().split(' ').length
    wordNumber = 123 - wordNumber;
    if ($(this).val() === '') {
      wordNumber = 123;
    }
    let msg = ' ' + wordNumber + ' mots';
    if (wordNumber <= 1 && wordNumber >= -1) {
      msg = ' ' + wordNumber + ' mot';
    }
    $('#compteur').text(msg);


    if (wordNumber > -1) {
      $('#compteur').css('color', 'blue');
    } else {
      $('#compteur').css('color', 'red');
    }
  })

  $("#to-B2B").click(function () {
    $('.img-1').css('border', 'none');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
    $('#B2C').css('display', 'none');
    $('#to-B2B').css('border', '3px solid #007bff');
    $('#to-B2C').css('border', 'none');
    $("#to-B2C").removeClass('active').addClass('not-active');

    if ($("#to-B2B").hasClass('not-active')) {
      $("#to-B2B").removeClass('not-active').addClass('active');
      $('#B2B').css('display', 'initial');
      $('#form').css('display', 'initial');
    } else {
      $("#to-B2B").removeClass('active').addClass('not-active');
      $('#B2B').css('display', 'none');
      $('#form').css('display', 'none');
    }
  });

  $("#to-B2C").click(function () {
    $('.img-1').css('border', 'none');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
    $('#B2B').css('display', 'none');
    $('#to-B2C').css('border', '3px solid #007bff');
    $('#to-B2B').css('border', 'none');
    $("#to-B2B").removeClass('active').addClass('not-active');

    if ($("#to-B2C").hasClass('not-active')) {
      $("#to-B2C").removeClass('not-active').addClass('active');
      $('#B2C').css('display', 'initial');
      $('#form').css('display', 'initial');
    } else {
      $("#to-B2C").removeClass('active').addClass('not-active');
      $('#B2C').css('display', 'none');
      $('#form').css('display', 'none');
    }
  });

  $(".img-1").click(function () {
    $('.img-1').css('border', '3px solid #007bff');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
  });

  $(".img-2").click(function () {
    $('.img-2').css('border', '3px solid #007bff');
    $('.img-1').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
  });

  $(".img-3").click(function () {
    $('.img-3').css('border', '3px solid #007bff');
    $('.img-2').css('border', 'none');
    $('.img-1').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
  });

  $(".img-4").click(function () {
    $('.img-4').css('border', '3px solid #007bff');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-1').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
  });

  $(".img-5").click(function () {
    $('.img-5').css('border', '3px solid #007bff');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-1').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-7').css('border', 'none');
  });

  $(".img-6").click(function () {
    $('.img-6').css('border', '3px solid #007bff');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-1').css('border', 'none');
    $('.img-7').css('border', 'none');
  });

  $(".img-7").click(function () {
    $('.img-7').css('border', '3px solid #007bff');
    $('.img-2').css('border', 'none');
    $('.img-3').css('border', 'none');
    $('.img-4').css('border', 'none');
    $('.img-5').css('border', 'none');
    $('.img-6').css('border', 'none');
    $('.img-1').css('border', 'none');
  });

});