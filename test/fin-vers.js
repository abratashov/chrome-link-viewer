      var elements = document.getElementsByTagName('a')
      var len = elements.length
      var elem

      for(var i=0; i<len; i++) {
          elem = elements[i]
          elem.onmouseover = function(e) {
          console.log(e.target.href);
          e.preventDefault();

           e = e || window.event;
           $('body').append('<iframe />').css('width','300px','height','180px','display','none');
           $("iframe").offset({top:e.pageY, left: e.pageX});
           $("iframe").attr('src', e.target.href);
       $("iframe").fadeIn(800);

  }
  $("a").mouseout(function(){
    $("iframe").remove();
  });

          elem.number = i
      }







