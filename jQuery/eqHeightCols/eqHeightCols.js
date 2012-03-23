/* DEVELOP */

(function ($){
  $.fn.eqHeightCols = function() {
    return this.each(function() {
    
      var $cols = $(this).find('.eq-height'),
        colHeights = [];
    
      $.each($cols, function(){
        colHeights.push($(this).height());
      });
      
      var tallest = Math.max.apply(Math, colHeights);
      $cols.css({'height': tallest});
    
    });
  };
}(jQuery));

jQuery(function($) {
  
  $('.eq-height-container').eqHeightCols();
  
});

/*

  HTML structure:
  
  <div class="eq-height-container">
    
    <div class="eq-height">These divs will be the same height<div>
    <div class="eq-height">These divs will be the same height<div>
    
  </div>

*/