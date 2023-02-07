import React from "react";
import DescriptionWithLink from "../../description-with-link/index.js";

const Planet = (props) => {
  return (
    <>
      <div>
        <h4>{props.name}</h4>
        <DescriptionWithLink
          description={props.description}
          link={props.link}
        />
      </div>
    </>
  );
};

export default Planet;
