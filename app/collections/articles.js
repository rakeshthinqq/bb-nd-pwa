var Backbone = require("Backbone");
var Artciles = require('models/article');
var Artciles = Backbone.Collection.extend({
    model: Artcile
});
module.exports = Artciles;