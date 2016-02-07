// in the html document add <body data-development-grid="hide" >
// place the  .singularityhelper class where ever you wanna test the grid
(function() {
  window.onload = function() {
    var wrapper = document.getElementsByClassName('singularityhelper')[0];
    document.body.onkeypress = function(e) {
      if (e.keyCode == 103 || e.charCode == 103) {
        var dev = wrapper.getAttribute('data-development-grid');
        if (dev === null || dev == 'hide') {
          wrapper.setAttribute('data-development-grid', 'show');
        }
        else {
          wrapper.setAttribute('data-development-grid', 'hide');
        }
      }
    }
  }
})();
