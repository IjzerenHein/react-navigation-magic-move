import React, { PureComponent } from "react";
import { Scene } from "react-native-magic-move";
import { NavigationEvents } from "react-navigation";

class NavigationScene extends PureComponent {
  state = {
    active: false
  };
  render() {
    const { active } = this.state;
    return (
      <React.Fragment>
        <NavigationEvents
          onWillFocus={this.onWillFocus}
          onWillBlur={this.onWillBlur}
          // onDidFocus={payload => console.log("did focus", payload)}
          // onDidBlur={payload => console.log("did blur", payload)}
        />
        <Scene {...this.props} active={active} />
      </React.Fragment>
    );
  }

  onWillFocus = () => {
    this.setState({
      active: true
    });
  };

  onWillBlur = () => {
    this.setState({
      active: false
    });
  };
}

export default NavigationScene;
