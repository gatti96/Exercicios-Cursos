let dev = [];

function addInput() {
  const addInput = document.getElementById("stackInputs");

  const div = document.createElement("div");
  div.id = "tecnologias";

  const li = document.createElement("li");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "tech";
  input.placeholder = "Digite a tecnologia";

  const li2 = document.createElement("li");
  const input2 = document.createElement("input");
  input2.type = "radio";
  input2.name = "tempo";
  input2.id = "tempo";
  input2.value = "0-2 anos";
  const label1 = document.createElement("label");
  label1.for = "tempo";
  const t1 = document.createTextNode("0-2 anos");
  label1.appendChild(t1);

  const li3 = document.createElement("li");
  const input3 = document.createElement("input");
  input3.type = "radio";
  input3.name = "tempo";
  input3.value = "3-5 anos";
  const label2 = document.createElement("label");
  label2.for = "tempo";
  const t2 = document.createTextNode("3-5 anos");
  label2.appendChild(t2);

  const li4 = document.createElement("li");
  const input4 = document.createElement("input");
  input4.type = "radio";
  input4.name = "tempo";
  input4.value = "5+ anos";
  const label3 = document.createElement("label");
  label3.for = "tempo";
  const t3 = document.createTextNode("5+ anos");
  label3.appendChild(t3);

  const button = document.createElement("p");
  button.innerHTML =
    '<button onclick="removeTech()">Remover Tecnologia</button>';
  button.addEventListener("click", function () {
    //pega o elemento pai do evento e exlui
    addInput.removeChild(div);
  });

  li4.append(input4, label3);
  li3.append(input3, label2);
  li2.append(input2, label1);
  li.appendChild(input);
  div.append(li, li2, li3, li4, button);
  addInput.appendChild(div);
}

const form = document.getElementById("devForm");

form.addEventListener("submit", function (ev) {
  ev.preventDefault(); //impede o formulário de enviar os dados

  const name = document.querySelector("input[name='fullname']").value;
  const cadastro = new Object();
  cadastro.nome = name;

  if (document.getElementById("tecnologias")) {
    const skill = document.querySelector("input[name='tech']").value;
    const experience = document.querySelector("input[name='tempo']").value;

    cadastro.skill = skill;
    cadastro.experience = experience;
  }

  dev.push(cadastro);
  alert("Dev Cadastrado");

  console.log(dev);
});
