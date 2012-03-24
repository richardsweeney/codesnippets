/*
  This is the Throttle plugin by Ben Alman and is required for the plugin.
  It's included here for simplicity
  Just comment it out/delete it if you have already use it on the your site!
  http://benalman.com/projects/jquery-throttle-debounce-plugin/
*/

(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};})(this);

(function(){
 
  $.fn.scrollAnalytics = function(vals){
  
    var settings = $.extend({
      step: 500,
      reportFrequency: 500
    }, vals),
    prevDepth = 0,
    that = this;
    
    function winScroll() {
    
      var maxDepth = 0,
        depth = Math.floor(that.scrollTop() / settings.step);
      
      if (depth > maxDepth) {
        maxDepth = depth;
        var currDepth = depth * settings.step;
        if (!(currDepth == prevDepth)) {
          prevDepth = depth * settings.step;
          _gaq.push(['_trackEvent', 'Scroll depth', 'User scrolled', 'Depth in px', currDepth, true]); // True = 'non interaction' event
        }
      }
              
    }
    
    that.scroll($.throttle(settings.reportFrequency, winScroll));
    
  };
  
}(jQuery));

/*

Instructions:

Do this :)

jQuery(function($){

  $(window).scrollAnalytics();
  
});

*/
