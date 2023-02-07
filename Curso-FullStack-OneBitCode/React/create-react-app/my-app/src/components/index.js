import React, { Fragment } from "react";
import Planet from "./planets/planets";

const Planets = (props) => {
  return (
    <>
      <div>
        <h3>Plenet List</h3>
      </div>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
      />
      <Planet
        name="Plutão"
        description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] uma região de corpos além da órbita de Netuno."
        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
      />
    </>
  );
};

export default Planets;
