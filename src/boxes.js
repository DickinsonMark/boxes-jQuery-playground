$(document).ready(function() {
  'use strict';

  // exercise 1
  // alert('ready for DOM manipulation!');

  // exercise 2
  // 1
  // $('#secretBox').css({backgroundColor: 'white'}).append('<h1>secret box!');
  // 2
  // $('#row1 > div').removeClass().addClass('box boxType3');
  // 3
  // $('#row4 div:last-child').css({display: 'none'});
  // 4
  // $('#row2 > div:first-child, #row2 > div:first-child + div').removeClass();
  // 5
  // $('.boxType1').css({backgroundColor: 'white'});
  // 6
  // $('#container :not(.row, #secretBox)').css({width: '2px'})

  // exercise 3
  // 1
  $('#container').on('click', function(e) {
    console.log('x: ' + e.pageX + 'y: ' + e.pageY);
  })

  // 2
  $('.boxType1').append('<a href="http://www.galvanize.com">Go to galvanize</a>');
  $('a').on('click', function(event) {

    $(this).attr('href', ' ');
    alert('You can never leave this page!');
  })

  // 3
  $('.box').on('click', function(event) {
    $(this).css({backgroundImage: 'cute-puppy.jpg'});
  })
});
