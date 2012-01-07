App.Views.TaskItemView = Backbone.View.extend({
    tagName: "li",

    template: _.template($("#template-item").html()),

    events: {
        // toggle task status
        "click :checkbox": "toggleComplete",

        // double click to edit
        "dblclick .task-content": "edit",

        // on blur, update
        "blur .task-input": "update",

        // delete task
        "click span.task-destroy": "clear"
    },

    initialize: function() {
        _.bindAll(this, "render", "toggleComplete", "toggleDone", "clear");

        this.model.bind("change:done", this.toggleDone);

        this.model.bind("change:name", this.render);

        this.model.bind("destroy", this.remove, this);
    },

    toggleComplete: function() {
        this.model.toggleStatus();
    },

    toggleDone: function() {
        this.$(".task").toggleClass("done");
    },

    clear: function(e) {
        this.model.destroy();
    },

    remove: function() {
        $(this.el).remove();
    },

    edit: function(e) {
        $(this.el).addClass("editing");
        this.$(".task-input").focus();
    },

    update: function(e) {
        this.model.save({ name : this.$(".task-input").val()} );
        $(this.el).removeClass("editing");
    },

    render: function() {
        $(this.el).html(this.template(this.model.toJSON()));

        $(this.el).attr("id", "task-"+this.model.id);

        if (this.model.get('done')) {
            this.$(".task-check").attr("checked", "checked");
            this.$(".task").addClass("done");
        }
        else {
            this.$(".task-check").removeAttr("checked");
            this.$(".task").removeClass("done");
        }

        return this;
    }
});

