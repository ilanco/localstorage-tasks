App.Routers.TasksApp = Backbone.Router.extend({
    initialize: function() {
        var tasks = new App.Collections.Tasks();

        formView = new App.Views.TaskFormView({ collection: tasks, el: "#task-create" });
        listView = new App.Views.TaskListView({ collection: tasks, el: "#task-list" });
        statsView = new App.Views.TaskStatsView({ collection: tasks, el: "#task-stats" });
    },

    routes: {
        "": "index"
    },

    index: function() {
        formView.render();
    }
});
