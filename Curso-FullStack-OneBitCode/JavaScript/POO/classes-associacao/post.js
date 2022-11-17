const Comment = require("./comment");

class Post {
  constructor(title, body, author) {
    this.title = title;
    this.comments = [];
    this.body = body;
    this.author = author;
    this.creatAt = new Date();
  }

  addComment(username, content) {
    this.comments.push(new Comment(username, content));
  }
}

module.exports = Post;
