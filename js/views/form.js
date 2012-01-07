App.Views.TaskFormView = Backbone.View.extend({
    template: _.template($("#template-form").html()),

    events: {
        // show tooltip on key up
        "keyup #new-task": "showTooltip",

        // on blur save
        //"blur input#new-task": "save",

        // on submit event
        "submit #task-form": "save"
    },

    initialize: function() {
    },

    render: function() {
        $(this.el).html(this.template);

        return this;
    },

    save: function(e) {
        var input = this.$("input#new-task");

        var val = input.val().trim();

        // create, add and save
        this.collection.create({ name: val });

        input.val("");

        e.preventDefault();
    },

    showTooltip: function(e) {      
        var tooltip = this.$(".ui-tooltip-top");
        tooltip.fadeOut();
    
        if (this.tooltipTimeout) clearTimeout(this.tooltipTimeout);

        if (this.$("#new-task").val().trim() !== "") {
            this.tooltipTimeout = setTimeout(function(){
                tooltip.fadeIn();
            }, 1000);
        }
    }
});

