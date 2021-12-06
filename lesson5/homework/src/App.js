import List from "./List";
import {Component} from "react";
import Count from "./Count";

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: this.generateArray()
    };
  }

  generateRandomItemsNumber = () => {
    return Math.floor(Math.random() * 10);
  }

  generateArray = () => {
    const arr = [];
    const randomItem = this.generateRandomItemsNumber();
    for (let i = 0; i <= randomItem; i++) {
      arr.push(this.generateRandomItemsNumber());
    }
    return arr
  }

  addRandomNumber = () => {
    const {value} = this.state;
    this.setState({
      value: [...value, this.generateRandomItemsNumber()]
    })
  }

  render() {
    const {value} = this.state;

    return (
      <>
        <Count value={value.length}/>
        <List value={value} />
        <button onClick = {this.addRandomNumber}>Add</button>
      </>
    )
  }

}

export default App;
