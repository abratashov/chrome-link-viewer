var dialogWidth = 600;
var dialogPosition = {
  top: 0,
  left: 0
};

$( "#dialog" ).dialog({
  autoOpen: false,
  width: dialogWidth,
  closeText: "hide"
}).dialog("widget").find(".ui-dialog-titlebar").hide();

[].forEach.call(document.getElementsByTagName('a'), function(elem){
  $(elem).on('mouseover', function(event) {
    event.preventDefault();
    $("iframe").attr('src', event.target.href);
    $("#dialog-link").attr('href', event.target.href);
    $("#dialog-link").text(event.target.href);

    $( "#dialog" ).dialog( "open" );
    $( "#dialog" ).dialog( "option", "position", { my: "center", at: "center", of: event } );

    dialogPosition = $('#dialog').offset();

    $("#dialog").mouseout(function(event){
      console.log("dialog out");
      console.log(event.target);
      if (event.clientX < dialogPosition.left || event.clientX > dialogPosition.left + dialogWidth) {
        $("#dialog").dialog("close");
        $("#dialog").unbind('mouseout');
      }
    });
  });
});

$("#dialog-link-div").append('<a href="" id="dialog-link" style="top: 10px; position: absolute;"></a>');
