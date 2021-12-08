import React, {Component} from 'react';
import Button from "./button";

const colors = ['red', 'yellow', 'green', 'blue', 'orange'];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: 'red',
    }
    setInterval(() => {
      let randomColor = colors[[Math.floor(Math.random() * colors.length)]];
      this.setState(() => ({colors: randomColor}))
    }, 1000);
  }

  render() {
    return <Button style={{backgroundColor: this.state.colors}}/>
  }
}

export default App;
