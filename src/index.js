import React, { Component } from "react";
import { Scene } from "react-native-magic-move";
import { NavigationEvents } from "react-navigation";

class ReactNavigationScene extends Component {
  state = {
    active: false,
    id: undefined
  };

  render() {
    const { active, id } = this.state;
    return (
      <React.Fragment>
        <NavigationEvents
          onWillFocus={this.onWillFocus}
          onWillBlur={this.onWillBlur}
          // onDidFocus={payload => console.log("did focus", payload)}
          // onDidBlur={payload => console.log("did blur", payload)}
        />
        {// eslint-disable-next-line
        React.cloneElement(this.props.children, {
          active,
          id: this.props.children.props.id || id // eslint-disable-line
        })}
      </React.Fragment>
    );
  }

  onWillFocus = event => {
    this.setState({
      id: event.state.routeName,
      active: true
    });
  };

  onWillBlur = () => {
    this.setState({
      active: false
    });
  };
}

Scene.addHook(ReactNavigationScene);
