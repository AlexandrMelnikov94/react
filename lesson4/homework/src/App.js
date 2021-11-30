import Phone from "./Phone/Phone";
import {Component} from "react";

class App extends Component {

  state = {
    phones: [
      {name: 'IPhone', model: 5},
      {name: 'IPhone', model: 6},
      {name: 'Samsung', model: 'A50'}
    ],
    pageTitle: 'Warning!!! Do not touch'
  }

  alertHandler = () => {
    alert('ALAAAAARM');
  }

  render() {
    const phones = this.state.phones;

    return (
      <div className="App">
        <h1 onMouseMove={this.alertHandler}>{this.state.pageTitle}</h1>

        <Phone name = {phones[0].name} model = {phones[0].model} />
        <Phone name = {phones[1].name} model = {phones[1].model} />
        <Phone name = {phones[2].name} model = {phones[2].model} />
      </div>
    );
  }
}

export default App;
