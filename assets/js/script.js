/* click outside to close navbar*/

$(document).click(function()
{
  $('#navbarcollapse').collapse('hide');
});

/* end of click outside to close navbar */

setTimeout(function()
{
  $("#imgabout").attr("src" , "assets/images/Raheja-Interface-Height-Elevation-view-About.jpg");

}, 2000);

/* form reset on load */

$('#formf1').each (function()
{
  this.reset();
});

/* end of form reset on load */

/* iframe delayed load */

window.onload = function ()
{
  setTimeout
  (
    function()
    {
      $("#mapframe").attr("src" , "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.198309188212!2d72.83439071490214!3d19.14279478704965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e663f02fe762808!2zMTnCsDA4JzM0LjEiTiA3MsKwNTAnMTEuNyJF!5e0!3m2!1sen!2sin!4v1671976155208!5m2!1sen!2sin");
    },1000
  );
}

/* iframe delayed load */

/* query string grab */
var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1);
$(".querystring").val(hashes);
/* end of query string grab */

/* sticky mob fadein */
$("#stickymob").hide();

$(window).scroll(function()
{
  if ($(this).scrollTop() >= 100)
  {
    $("#stickymob").fadeIn(500);
  }
  else
  {
    $("#stickymob").fadeOut(500);
  }
});
/* end of sticky mob fadein */

/* modal killer */
if (sessionStorage.getItem('popOnce') !== 'true')
{
  function showModal()
  {
    if (!$("#rrmodal,#roautomodal").is(":visible"))
    {
      $("#roautomodal").modal('show');
      sessionStorage.setItem('popOnce','true');
    }
  }

  var modpop;

  function modalTimeSet()
  {
    modpop = setTimeout(function(){showModal();},20000);
  }

  modalTimeSet();

  function modalTimeKill()
  {
    clearTimeout(modpop);
    sessionStorage.setItem('popOnce','true');
  }

  function modalKillTrigger()
  {
    $("#formf1 :input, #formf2 :input").focus (function()
    {
      modalTimeKill();
    });
  }
  modalKillTrigger();
}
/* end of modal killer*/

/* hide sticky buttons */
$("#formf1 :input").focus(function()
{
  $("#stickymob").hide();
});

$("#formf1 :input").blur(function()
{
  $("#stickymob").show();
});
/* end of hide sticky buttons */

/* smooth scroll */
$('.navlink[href*="#"]').on('click', function (e)
{
  e.preventDefault();

  $('html, body').animate({
    scrollTop: ($($(this).attr('href')).offset().top - 78)
  }, 500, 'linear');
});
/* end of smooth scroll*/

$('.amencarousel').slick(
{
  prevArrow: $('#amenarrowleft'),
  nextArrow: $('#amenarrowright'),
  infinite: true,
  cssEase: 'linear',
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive:
  [
    {
      breakpoint: 992,
      settings:
      {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});


$('.gallerycarousel').slick(
{
  prevArrow: $('#gallerycarouselleft'),
  nextArrow: $('#gallerycarouselright'),
  infinite: true,
  cssEase: 'linear',
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive:
  [
    {
      breakpoint: 992,
      settings:
      {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});

/*Animation on scroll*/
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
var $element = $(this);
var element_height = $element.outerHeight();
var element_top_position = $element.offset().top;
var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
if ((element_bottom_position >= window_top_position) &&
(element_top_position <= window_bottom_position)) {
$element.addClass('in-view');
} else {
$element.removeClass('in-view');
}
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


/********************** */




  /* stickyform */
$(window).scroll(function()
{
  if ($(this).scrollTop() >= 150)
  {
    $('#stickyform').fadeIn(500);
  }
  else
  {
    $('#stickyform').fadeOut(500);
  }
});
/* end of stickyform*/