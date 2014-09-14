

      var elements = document.getElementsByTagName('a')
      var len = elements.length
      var elem

      for(var i=0; i<len; i++) {
          elem = elements[i]
          elem.onmouseover =function() {
             alert('click on '+this.number)
        }
          elem.number = i
      }


