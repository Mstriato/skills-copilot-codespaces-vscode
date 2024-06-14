// Create web server
// Create web server
var express = require('express');
var router = express.Router();
var db = require('../database');

// Get all comments
router.get('/comments', function(request, response) {
    db.query('SELECT * FROM comments', function(error, results, fields) {
        if (error) throw error;
        response.send(results);
    });
});

// Get comment by ID
router.get('/comments/:id', function(request, response) {
    db.query('SELECT * FROM comments WHERE id=?', [request.params.id], function(error, results, fields) {
        if (error) throw error;
        response.send(results);
    });
});

// Add a new comment
router.post('/comments', function(request, response) {
    let comment = request.body;
    if (!comment) {
        response.status(400).send('Request body is missing');
    }
    db.query('INSERT INTO comments SET ?', comment, function(error, results, fields) {
        if (error) throw error;
        response.send(results);
    });
});

// Update comment
router.put('/comments', function(request, response) {
    let comment = request.body;
    if (!comment) {
        response.status(400).send('Request body is missing');
    }
    db.query('UPDATE comments SET body=? WHERE id=?', [comment.body, comment.id], function(error, results, fields) {
        if (error) throw error;
        response.send(results);
    });
});

// Delete comment
router.delete('/comments/:id', function(request, response) {
    db.query('DELETE FROM comments WHERE id=?', [request.params.id], function(error, results, fields) {
        if (error) throw error;
        response.send('Comment has been deleted');
    });
});

module.exports = router;