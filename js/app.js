var App = {
    Views: {},
    Routers: {},
    Collections: {},
    init: function() {
        new App.Routers.TasksApp();
        Backbone.history.start();
    }
};

$(function() {

App.init();

/*
$("#task-list").sortable({
    distance: 15,

    update: function(event, ui) {
        var order = $(this).sortable('toArray');

        _.each(order, function(num) {
            console.log(App.Collections.Tasks);
        });
        console.log(order);
    }
}).disableSelection();
*/

$("#task-list").disableSelection();
$("#task-list").find("input").bind('mousedown.ui-disableSelection selectstart.ui-disableSelection', function(e) {
    e.stopImmediatePropagation();
});

});

