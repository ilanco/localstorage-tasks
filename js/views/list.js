App.Views.TaskListView = Backbone.View.extend({
    initialize: function() {
        _.bindAll(this, "render");

        this.collection.bind("reset", this.render);

        this.collection.bind("add", this.render);

        this.collection.bind("remove", this.render);

        this.collection.fetch();

        $(this.el).sortable({
            distance: 15,

            update: _.bind(function(event, ui) {
                var order = $(ui.item.context.parentNode).sortable('toArray');

                var collection = this.collection;
                _.each(order, function(element, key) {
                    task = collection.get(element.replace("task-", ""));
                    task.save({ order: key });
                });
            }, this)
        });
    },

    render: function() {
        // console.log("App.Views.TaskListView.render()");

        $(this.el).empty();

        var els = [];

        this.collection.each(function(task) {
            var taskItemView = new App.Views.TaskItemView({ model: task });
            els.push(taskItemView.render().el);
        });

        $(this.el).append(els);

        return this;
    }
});

