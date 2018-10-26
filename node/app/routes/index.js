const noteRoutes = require('./book_routes');
module.exports = function(app) {
    noteRoutes(app);
};