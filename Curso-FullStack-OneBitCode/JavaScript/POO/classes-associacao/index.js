const Author = require("./author");

const renan = new Author("Renan Gatti");

const post = renan.writePost(
  "Isso é um post de teste numero 1",
  "conteudo aqui"
);

post.addComment("rian", "comment1");

console.log(renan);
console.log(post);
