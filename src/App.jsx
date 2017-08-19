import * as React from 'react';
import * as ReactDOM from 'react-dom';


class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>This is the header</h1>
      </div>
    );
  }
}

/*
  Props:
  - large <boolean>
*/
class CustomizableHeader extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    this.props.large;
    return (
      <div>
        {
          this.props.large ? <Header/> : <h2>This is not large</h2>
        }
      </div>
    );
  }
}

/*
  Props:
  - onClick <function>
  - style <object>
*/
class CustomizableButton extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <button style={this.props.style} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

function HigherOrderButton(WrappedComponent) {
  /*
    Props:
    - color <string>
  */
  return class Wrapper extends React.Component {
    constructor() {
      super();
      this.render = this.render.bind(this);
    }

    render() {
      return (
        <WrappedComponent style={{backgroundColor: this.props.color}} {...this.props}/>
      );
    }
  }
}

var ColoredButton = HigherOrderButton(CustomizableButton);

class App extends React.Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
    this.state = {
      large: false
    };
  }

  render() {
    return (
      <div>
        <CustomizableHeader large={this.state.large}/>
        <div>
          This is no longer the Header
        </div>
        <button onClick={() => this.setState({large: !this.state.large})}> Click me to change header type!
        </button>
        <ColoredButton color='blue' onClick={() => this.setState({large: !this.state.large})}>
          Test
        </ColoredButton>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
