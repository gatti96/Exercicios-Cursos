const password = "123";
let yes = 0;
let not = 0;
let nule = 0;
let electore = 0;

document.getElementById("init").addEventListener("click", function () {
  const senha = document.getElementById("password").value;

  if (senha === password) {
    document.querySelector(".item1").style.display = "none";
    document.querySelector(".item2").style.display = "block";
  } else {
    alert("Senha incorreta");
  }
});

document.getElementById("yes").addEventListener("click", function () {
  yes = yes + 1;
  electore = electore + 1;
  const confirm = document.getElementById("confirm");
  confirm.value = "voto computado";
  confirm.style.backgroundColor = "green";
  confirm.style.color = "#fff";
});

document.getElementById("not").addEventListener("click", function () {
  not = not + 1;
  electore = electore + 1;
});

document.getElementById("nule").addEventListener("click", function () {
  nule = nule + 1;
  electore = electore + 1;
});
