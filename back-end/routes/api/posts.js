const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Post model
const Post = require('../../models/Post');



// @route   GET api/posts/test
// @desc    Tests post route
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));

// @route   GET api/posts
// @desc    Get posts
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    );
});

// @route   POST api/posts
// @desc    Create post
router.post('/', async (req, res) => {

  const newPost = new Post({
    title: req.body.title,
    author: req.body.author,
    category: req.body.avatar,
    body: req.body.body
  });

  newPost.save()
    .then(post => res.json(post))
    .catch(err => console.log(err));;
}
);

// @route   PUT api/posts/:id
// @desc    Update post
router.put('/:id', async (req, res) => {
  Post.findById(req.params.id, function (err, post) {
    if (err)
      res.send(err);
    post.author = req.body.author ? req.body.author : post.author;
    post.body = req.body.body ? req.body.body : post.body;
    post.category = req.body.category ? req.body.category : post.category;
    post.title = req.body.title ? req.body.title : post.title;
    post.save(function (err) {
      if (err)
        err.json(err);
      res.json({
        message: 'Post info updated',
        data: post
      });
    });
  });
});

// @route   DELETE api/posts/:id
// @desc    Delete post
router.delete(
  '/:id', (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        // Delete
        post.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: 'No post found' }));

  }
);


module.exports = router;
