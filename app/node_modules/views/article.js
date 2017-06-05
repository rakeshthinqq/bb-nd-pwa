var Backbone = require('backbone');
var _ = require('underscore');

var ArticleView = Backbone.View.extend({
    tagName: 'article',
    className: 'art',
    template: '<h1><%= title %><hr></h1>',
    render: function () {
        var tmpl = _.template(this.template);
        this.$el.html(tmpl(this.model.toJSON()));
        this.$el.toggleClass('selected', this.model.get('selected'));
        return this;
    },
    initialize: function () {
        this.listenTo(this.model, 'change:title', this.render);
    }
});
module.exports = ArticleView;