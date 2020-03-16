//file:routes/posts.js

const express = require ('express')
const route = express.Router ();
const Post = require ('../models/post');

route.get('/', function(req, res, next){
    Post.findAll(function(err,result){
        if(err) console.log(' error when fetching post', err)
        res.render('post/index', {posts:result});        
    })
});

route.get('/create', function(req, res, next){
    res.render('post/create');
});

route.post('/', function(req, res, next) {
    Post.store(req.body, function(err,result){
        if(err){
            console.log('error creating post', err);
        }
        res.redirect('/posts');
    })
}) 

route.post('/destroy/:id', function(req, res, next){
    Post.destroy(req.params.id, function(err, result){
        if(err) console.log('error when delecting post', err);
        res.redirect('/posts');
    })
})

route.post('/:id', function(req, res){
    Post.update (req.params.id, req.body, function(err, result){
        if(err) console.log('error when delecting post', err);
        res.redirect('/posts');
    })
})

route.get('/edit/:id', function(req,res){
    Post.findOne(req.params.id, function(err, result){
        if (err) console.log('error finding post')
        res.render('post/edit', {post: result});
    })
})

module.exports = route;