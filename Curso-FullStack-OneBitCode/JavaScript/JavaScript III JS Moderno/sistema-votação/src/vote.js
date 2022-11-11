const password = "123";

document.getElementById("init").addEventListener("click", function () {
  const senha = document.getElementById("password").value;

  if (senha === password) {
    document.querySelector(".item1").style.display = "none";
    document.querySelector(".item2").style.display = "block";
  } else {
    alert("Senha incorreta");
  }
});
