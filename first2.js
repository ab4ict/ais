$(function(){
  var renderers = $.extend(
      $.pivotUtilities.renderers,
      $.pivotUtilities.c3_renderers,
      $.pivotUtilities.d3_renderers,
      $.pivotUtilities.export_renderers
      );

  var parseAndPivot = function(f) {
      $("#output").html("<p align='center' style='color:grey;'>(processing...)</p>")
      Papa.parse(f, {
          skipEmptyLines: true,
          error: function(e){ alert(e) },
          complete: function(parsed){
              $("#output").pivotUI(parsed.data, { renderers: renderers }, true);
          }
      });
  };

  $("#csv").bind("change", function(event){
      parseAndPivot(event.target.files[0]);
  });

  $("#textarea").bind("input change", function(){
      parseAndPivot($("#textarea").val());
  });

  var dragging = function(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.originalEvent.dataTransfer.dropEffect = 'copy';
      $("body").removeClass("whiteborder").addClass("greyborder");
  };

  var endDrag = function(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      evt.originalEvent.dataTransfer.dropEffect = 'copy';
      $("body").removeClass("greyborder").addClass("whiteborder");
  };

  var dropped = function(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      $("body").removeClass("greyborder").addClass("whiteborder");
      parseAndPivot(evt.originalEvent.dataTransfer.files[0]);
  };

  $("html")
      .on("dragover", dragging)
      .on("dragend", endDrag)
      .on("dragexit", endDrag)
      .on("dragleave", endDrag)
      .on("drop", dropped);
});