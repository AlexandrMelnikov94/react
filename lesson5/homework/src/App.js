import List from "./List";
import {Component} from "react";

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

  render() {
    const {value} = this.state;

    return (
      <>
        <List value={value} />
      </>
    )
  }

}

export default App;
