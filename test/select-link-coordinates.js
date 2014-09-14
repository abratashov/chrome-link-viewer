

      var elements = document.getElementsByTagName('a')
      var len = elements.length
      var elem

      for(var i=0; i<len; i++) {
          elem = elements[i]
          elem.onmouseover = function(e) {
           e = e || window.event;
            alert( "left: " + e.pageX + ", top: " + e.pageY );
}
          elem.number = i
      }
