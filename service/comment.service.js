const Comment = require("../model/comment.model");

const get = () => {
  return Comment.find().populate("user", "name");
};

const write = async (userId, comment) => {
  const doc = new Comment({
    user: userId,
    comment,
  });
  const result = await doc.save();
  return result;
};

const deleteComment = async (id) => {
  const comment = await Comment.findByIdAndDelete(id);
  
  if (!comment) throw { code: 404, message: "Comment not found" };
  return comment;
};

module.exports = {
  get,
  write,
  deleteComment,
};
