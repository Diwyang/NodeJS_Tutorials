var Todos = require('../models/todoModel');

module.exports = function(app) {
    
   app.get('/api/setupTodos', function(req, res) {
       
       // seed database
       var starterTodos = [
           {
               username: 'djain20',
               todo: 'Buy milk',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'djain20',
               todo: 'Feed dog',
               isDone: false,
               hasAttachment: false
           },
           {
               username: 'djain20',
               todo: 'Learn Node',
               isDone: false,
               hasAttachment: false
           }
       ];
       Todos.create(starterTodos, function(err, results) {
           res.send(results);
       }); 
   });
    
}