const router = require("express").Router();
const { Post } = require("../models/post");

router.post("/add", (req, res) => {
  const post = new Post(req.body);
  console.log(post);
  post.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/", (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, posts });
  });
});

router.get("/detail/:id", (req, res) => {
  const id = req.params.id;

  Post.findById(id, function (err, post) {
    if (err) return res.status(400).json({ success: false, error: err });
    return res.status(200).json({ success: true, post });
  });
});

router.put("/update/:id", (req, res) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, posts) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.delete("/delete/:id", (req, res) => {
  Post.findOneAndRemove(req.params.id).exec((err, deleteItem) => {
    if (err) {
      res.send(err);
    }
    return res.json(deleteItem);
  });
});

module.exports = router;
