$(function() {

  // Shuffle
  var $grid = $('#grid');
  $sizer = $grid.find('.thumb__sizer'),

  $grid.shuffle({
    itemSelector: '.item', // the selector for the items in the grid
    sizer: $sizer,
    easing: 'ease-out',
  });

  //shuffle clicks
  $('#filter a').click(function (e) {
    e.preventDefault();

    // set active class
    $('#filter a').removeClass('active');
    $(this).addClass('active');

    // get group name from clicked item
    var groupName = $(this).attr('data-group');

    // reshuffle grid
    $grid.shuffle('shuffle', groupName );
  });

});


//slide to #foo offset set to 70px based on the height of the menu
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 70
        }, 1000);
      return false;
    }
  }
});

//show & hide the menu based on distance from the top
$(document).on('scroll',function(){
    if( $(document).scrollTop()>200){
      $('header[role="banner"]').addClass("showtopnav").removeClass("hidetopnav");
    }else{
      $('header[role="banner"]').removeClass("showtopnav").addClass("hidetopnav");
    }
})(jQuery);
