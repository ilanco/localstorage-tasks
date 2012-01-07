var Task = Backbone.Model.extend({
    defaults: function() {
        return {
            done: false
        };
    },

    toggleStatus: function() {
        this.save({ done: !this.get("done") });
    },

    validate: function(attrs) {
        if (attrs.name == "") {
            return "empty string";
        }
    }
});

