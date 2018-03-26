$(document).ready(function() {
  $('.button-collapse').sideNav();
  // Asignando estrellas
  $(function() {
    // Estrellas vista mobile
    $('#rateYo-0-1').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-2').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-3').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-4').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-5').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4.5,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-6').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-7').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-8').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-9').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-10').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-11').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-0-12').rateYo({
      starWidth: '25px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '5px',
      halfStar: true,
      readOnly: true
    });
    // Estrellas vista desktop
    $('#rateYo-1').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4, 
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-2').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-3').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-4').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-5').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4.5,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-6').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-7').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-8').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-9').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 4,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-10').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-11').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
    $('#rateYo-12').rateYo({
      starWidth: '35px',
      normalFill: '#A0A0A0',
      rating: 3.5,
      spacing: '10px',
      halfStar: true,
      readOnly: true
    });
  });

  var image1 = $('#soft-skill-1').attr('src');
  var image2 = $('#soft-skill-2').attr('src');
  var image3 = $('#soft-skill-3').attr('src');

  $('.soft-skill-container').on('mouseover', '#soft-skill-1', function() {
    $('#soft-skill-1').attr('src', '../assets/images/image4.jpg');
    $('#soft-skill-1').removeClass('img.soft-skills-image');
    $('#soft-skill-1').addClass('soft-skills-image-2'); 
  });

  $('.soft-skill-container').on('mouseover', '#soft-skill-2', function() {
    $('#soft-skill-2').attr('src', '../assets/images/image5.jpg');
    $('#soft-skill-2').removeClass('img.soft-skills-image');
    $('#soft-skill-2').addClass('soft-skills-image-2');
  });

  $('.soft-skill-container').on('mouseover', '#soft-skill-3', function() {
    $('#soft-skill-3').attr('src', '../assets/images/image6.jpg');
    $('#soft-skill-3').removeClass('img.soft-skills-image');
    $('#soft-skill-3').addClass('soft-skills-image-2');
  });
 
  $('.soft-skill-container').on('mouseleave', function() {
    $('#soft-skill-1').attr('src', image1);
    $('#soft-skill-2').attr('src', image2);
    $('#soft-skill-3').attr('src', image3);
    $('#soft-skill-1').removeClass('soft-skills-image-2');
    $('#soft-skill-2').removeClass('soft-skills-image-2');
    $('#soft-skill-3').removeClass('soft-skills-image-2');
    $('#soft-skill-1').addClass('img.soft-skills-image');
    $('#soft-skill-2').addClass('img.soft-skills-image');
    $('#soft-skill-3').addClass('img.soft-skills-image');
  });
});
  