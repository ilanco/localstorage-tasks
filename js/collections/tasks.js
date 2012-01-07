App.Collections.Tasks = Backbone.Collection.extend({
    model: Task,

    localStorage: new Store("ic-local-tasks"),

    initialize: function() {
    },

    completed: function() {
        return _.select(this.models, function(model) {
            return model.get("done") != false;
        });
    },

    incomplete: function () {
        return _.select(this.models, function(model) {
            return model.get("done") == false;
        });
    },

    nextOrder: function() {
        if (!this.length) return 1;
        return this.last().get('order') + 1;
    },

    comparator: function(task) {
        return task.get('order');
    }
});

