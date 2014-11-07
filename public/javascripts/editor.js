$(document).on('ready', function () {

  // Global vars

  var repeat_toolbar_nav;
  var toolbar_nav_counter = 0;
  var total_tools_width = 0;

  // Actions

  resize_handler();

  // Functions

  function close_toolbar () {

    $('#toolbar-btn').removeClass('x');
    $('#toolbar').slideUp();
  }

  function resize_handler () {

    var w = 0;
    $('#toolbar .tools>li').each(function() { w += $(this).outerWidth(true) });
    if ( $('#toolbar .tools').width() < w ) {

      $('#toolbar .nav-right-btn, #toolbar .nav-left-btn').removeClass('hide');
    } else {

      $('#toolbar .nav-right-btn, #toolbar .nav-left-btn').addClass('hide');
      $('#toolbar .tools').css('left', 0);
    }
  }
  resize_handler();
  function open_toolbar () {

    $('#toolbar-btn').addClass('x');
    $('#toolbar').slideDown();
  }

  function toolbar_nav_left () {
      
    repeat_toolbar_nav = setInterval(function () {

      total_tools_width = 0;
      $('#toolbar .tools>li').each(function() { total_tools_width += $(this).outerWidth(true) });
      total_tools_width += toolbar_nav_counter;
      if ( ( total_tools_width - $('#toolbar .tools').width() ) > 0 ) {
        $('#toolbar .tools').css('left', toolbar_nav_counter);
        toolbar_nav_counter--;
      }
    }, 1);
  }

  function toolbar_nav_right () {

    repeat_toolbar_nav = setInterval(function () {

      if (toolbar_nav_counter < 0) {
        $('.tools').css('left', toolbar_nav_counter);
        toolbar_nav_counter++;
      }
    }, 1);
  }

  function toggle_toolbar () {

    ($('#toolbar').is(':hidden')) ? open_toolbar() : close_toolbar();
  }

  // Event gossipmongers

  $(window).on('resize', function () { resize_handler() });

  $('#toolbar-btn').on('click', function () {

    toggle_toolbar();
    resize_handler();
  });

  $('li.activable').on('click', function () { $(this).toggleClass('active') });

  $('#toolbar .nav-left-btn').hover(function () { toolbar_nav_left() },
    function () { clearInterval(repeat_toolbar_nav) });

  $('#toolbar .nav-right-btn').hover(function () { toolbar_nav_right() },
    function () { clearInterval(repeat_toolbar_nav) });
});

function paper_type (json) {
    var paperType=json.characteristics[0].paperType;
      if(paperType!='plain'){
        if(paperType=='lined'){
          richTextField.document.body.style.backgroundImage="url('http://bgfons.com/upload/notebook_texture2459.jpg')";
        }
        if(paperType=='striped'){
          richTextField.document.body.style.backgroundImage="url('http://3.bp.blogspot.com/-vcN-JgD6_IU/UECyfV7FrTI/AAAAAAAABmw/b1CgZcPZdYw/s1600/cuadricula.gif')";
        }
      }
  }
