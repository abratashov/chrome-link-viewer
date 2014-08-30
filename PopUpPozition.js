


var h = document.getElementsByTagName('a')[0];

h.onmouseover = function(e) {
  e = e || window.event;
  alert( "left: " + e.pageX + ", top: " + e.pageY );
}