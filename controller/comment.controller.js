const commentService = require("../service/comment.service");

async function readComment(req, res, next) {
  try {
    const comments = await commentService.get();
    res.json(comments);
  } catch (err) {
    next(err);
  }
}

async function writeComment(req, res, next) {
  try {
    const { text } = req.body;
    const user = req.user;
    if (!text) throw { code: 400, message: "Text is required" };

    const comment = await commentService.write(user._id, text);
    res.status(201).json({ message: "Comment added successfully", comment });
  } catch (err) {
    next(err);
  }
}

async function deleteComment(req, res, next) {
  try {
    await commentService.deleteComment(req.params.id);
    res.json({ message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  readComment,
  writeComment,
  deleteComment,
};
