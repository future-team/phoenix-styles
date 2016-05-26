(function($){
    var lis = $('.ui-tabs li');
    lis.on('click',function(e){
        e.preventDefault();
        var _this = $(this),
            tabs = _this.parents('.ui-tabs');
        var liActive = tabs.find('.active');
        liActive.removeClass('active');
        var index = _this.attr('data-index');
        _this.addClass('active');
        var panel = tabs.find('.tab-panel');
        if(!!panel){
            tabs.find('.tab-panel.active').removeClass('active');
            panel.eq(index-1).addClass('active');
        }
    });
})(jQuery);