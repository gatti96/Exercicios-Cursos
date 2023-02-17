import React from "react";
import DescriptionWithLink from "../../description-with-link/index.js";

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }

  render() {
    return (
      <>
        <div onClick={this.props.clickOnPlanet}>
          <h4>{this.props.name}</h4>
          <DescriptionWithLink
            description={this.props.description}
            link={this.props.link}
          />
        </div>
      </>
    );
  }
}

export default Planet;
