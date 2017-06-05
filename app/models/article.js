var Backbone = require("Backbone");
var Article = Backbone.Model.extend({
    defaults: {
        title: "default",
        author: "name",
        category: "empty",
    }
});
module.exports = Article    ;