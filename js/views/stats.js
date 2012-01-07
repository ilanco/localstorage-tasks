App.Views.TaskStatsView = Backbone.View.extend({
    template: _.template($("#template-stats").html()),

    events: {
        // removes completed tasks
        "click #clear-completed": "clearCompleted"
    },

    initialize: function() {
        _.bindAll(this, "render");

        this.collection.bind("change:done", this.render, this);

        this.collection.bind("add", this.render);

        this.collection.bind("remove", this.render);

        this.render();
    },

    clearCompleted: function(e) {
        _.each(this.collection.completed(), function(task) {
            task.destroy();
        });

        e.preventDefault();
    },

    render: function() {
        // console.log("App.Views.TaskStatsView.render()");

        var completedCount = this.collection.completed().length;
        var remainingCount = this.collection.incomplete().length;

        $(this.el).html(this.template({ completed: completedCount, remaining: remainingCount }));

        if (completedCount) {
            this.$(".task-clear").show();
        }
        else {
            this.$(".task-clear").hide();
        }

        return this;
    }
});

