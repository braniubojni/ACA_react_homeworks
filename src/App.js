import { Component } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import H1 from './components/H1';

class App extends Component {
  state = {
    value: 0,
    left: "",
    right: "",
  }
  doIncrement = () => {
    this.setState({value: this.state.value + 1})
  }
  doDecrement = () => {
    this.setState({value: this.state.value - 1})
  }
  add = () => {
    const left = this.Input
    this.setState()
  }

  render(){
    return (
      <div className="App">
        <H1 title={this.state.value}></H1>
        <div className="inputs">
          <Input type="text" placeholder="Type any number" value={this.state.left} />
          <Input type="text" placeholder="Type any number" value={this.state.right} />
        </div>
        
        <div className="buttons">
          <Input type="checkbox"/>
          <Button 
            className="myButton" 
            onClick={this.doDecrement}>
              Decrement
          </Button>
          <Button onClick={this.doIncrement} className="myButton">Increment</Button>
        </div>
        <Button onClick={this.add} className="myButton">+</Button>
      </div>
    );
  }

}

export default App;
