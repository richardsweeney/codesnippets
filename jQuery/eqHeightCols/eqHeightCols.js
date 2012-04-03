(function ($){
  $.fn.eqHeightCols = function() {
    return this.each(function() {
    
      var $cols = $(this).find('.eq-height'),
        colHeights = [],
        paddingBottom = [],
        paddingTop = [];
          
      $.each($cols, function(){
        paddingBottom.push(parseInt($(this).css('padding-bottom')));
        paddingTop.push(parseInt($(this).css('padding-top')));
        colHeights.push($(this).height());
      });
      
      // Need to check padding to ensure heights remain the same
      var i = 0,
        l = $cols.length,
        totalPadding = [];
      for (; i < l; i++){
        totalPadding.push(paddingBottom[i] + paddingTop[i]);
      }
      
      totalPadding = (Math.max.apply(Math, totalPadding)) / 2;
          
      var tallest = Math.max.apply(Math, colHeights);
      $cols.css({
        'height': tallest,
        'padding-top': totalPadding,
        'padding-bottom': totalPadding
      });
    
    });
  };
}(jQuery));

/*

Usage:

jQuery(function($) {
  
  $('.eq-height-container').eqHeightCols();
  
});

Suggested HTML structure (obviously, it doesn't have to be div based markup!)
  
/*
  <div class="eq-height-container">
    
    <div class="eq-height">These divs will be the same height<div>
    <div class="eq-height">These divs will be the same height<div>
    
  </div>
*/

*/