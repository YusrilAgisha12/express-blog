const conn = require('../database/index');

function findAll(callback) {
    conn.query(
        {
            sql: 'SELECT * FROM posts'
        },
        function(err,result){
            callback(err,result)
        }
    )
}

function store (post, callback) {
    conn.query(
        {
            sql: 'INSERT INTO posts SET ?',
            values: {title: post.title, content: post.content}
        },
        function(err,result){
            callback(err,result);
        },
    );
}

function destroy(id, callback){
    conn.query(
        {
            sql: 'DELETE FROM posts WHERE id = ?',
            values: [id],
        },function(err,result){
            callback(err,result);
        }
    )
}

function update (id, post, callback){
    conn.query(
        {
            sql: "UPDATE posts SET? WHERE id = ?",
            values: [{...post}, id],
        }, function (err, result) {
            callback(err, result);
        }
    )
}

function findOne (id, callback){
    conn.query(
        {
            sql: "SELECT * FROM  posts WHERE id = ?",
            values: [id],
        }, function (err, result) {
            callback(err, result[0]);
        }
    )
}

module.exports = {
    store,
    findAll,
    destroy,
    update,
    findOne
}