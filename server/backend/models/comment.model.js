import mongoose from "mongoose";

// Reply Schema: This stores the individual replies
const ReplySchema = new mongoose.Schema({
  reply: { type: String },
  username: {type: String},
  timestamp: { type: Date, default: Date.now },
});


// Comment Schema: This stores the comments along with references to replies
const CommentSchema = new mongoose.Schema({
  comment: { type: String},
  username: {type: String},
  timestamp: { type: Date, default: Date.now },
  comments: [ReplySchema], // Array of replies
});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
